/**
 * UI Components Module
 * Contains functions for rendering UI components
 */

import { formatPrice } from './utils.js';

/**
 * Generate HTML for laptop table rows
 * @param {Array} laptops - Array of laptop objects
 * @returns {string} - HTML string of table rows
 */
export const generateLaptopTableRows = (laptops) => {
  if (!laptops || !laptops.length) {
    return '<tr><td colspan="11" class="text-center">No laptops found matching your criteria.</td></tr>';
  }

  return laptops.map(laptop => `
    <tr data-laptop-id="${laptop.id}">
      <td>
        <div class="img-container" style="width: 120px; height: 80px;">
          <img 
            class="lazy-img" 
            data-src="${laptop.image || 'images/placeholder-laptop.png'}" 
            alt="${laptop.model}" 
            loading="lazy"
            width="120"
            height="80"
            onerror="this.onerror=null;this.src='images/placeholder-laptop.png';"
          >
          <div class="lazy-img-overlay"></div>
        </div>
        <div class="laptop-model">${laptop.model}</div>
      </td>
      <td>${laptop.processor}</td>
      <td>${laptop.ram}</td>
      <td>${laptop.storage}</td>
      <td>${laptop.webDev}</td>
      <td>${laptop.appDev}</td>
      <td>${laptop.aiDev}</td>
      <td>${laptop.videoEditing}</td>
      <td>${laptop.gaming}</td>
      <td>${formatPrice(laptop.price)}</td>
      <td>
        <button class="btn btn-sm btn-info view-details" 
                data-id="${laptop.id}" 
                aria-label="View details for ${laptop.model}">
          View Details
        </button>
      </td>
    </tr>
  `).join('');
};

/**
 * Render laptop tables
 * @param {Object} params - Parameters object
 * @param {HTMLElement} params.newLaptopsBody - The tbody element for new laptops
 * @param {HTMLElement} params.refurbishedLaptopsBody - The tbody element for refurbished laptops
 * @param {Array} params.newLaptops - Array of new laptops
 * @param {Array} params.refurbishedLaptops - Array of refurbished laptops
 */
export const renderLaptopTables = ({
  newLaptopsBody,
  refurbishedLaptopsBody,
  newLaptops = [],
  refurbishedLaptops = []
}) => {
  console.log('renderLaptopTables called');
  
  try {
    console.log('New laptops data:', newLaptops);
    console.log('Refurbished laptops data:', refurbishedLaptops);
    
    // Render new laptops
    if (newLaptopsBody) {
      console.log('Rendering new laptops...');
      if (newLaptops && newLaptops.length > 0) {
        const rows = generateLaptopTableRows(newLaptops);
        console.log('Generated rows for new laptops:', rows);
        newLaptopsBody.innerHTML = rows;
      } else {
        newLaptopsBody.innerHTML = '<tr><td colspan="11" class="text-center">No new laptops found.</td></tr>';
        console.log('No new laptops data to render');
      }
    } else {
      console.error('New laptops body element not found');
    }
    
    // Render refurbished laptops
    if (refurbishedLaptopsBody) {
      console.log('Rendering refurbished laptops...');
      if (refurbishedLaptops && refurbishedLaptops.length > 0) {
        const rows = generateLaptopTableRows(refurbishedLaptops);
        console.log('Generated rows for refurbished laptops:', rows);
        refurbishedLaptopsBody.innerHTML = rows;
      } else {
        refurbishedLaptopsBody.innerHTML = '<tr><td colspan="12" class="text-center">No refurbished laptops found.</td></tr>';
        console.log('No refurbished laptops data to render');
      }
    } else {
      console.error('Refurbished laptops body element not found');
    }
    
    console.log('renderLaptopTables completed successfully');
  } catch (error) {
    console.error('Error in renderLaptopTables:', error);
    
    // Show error message in the UI if possible
    const errorMessage = 'An error occurred while loading the laptop data. Please try again later.';
    if (newLaptopsBody) newLaptopsBody.innerHTML = `<tr><td colspan="11" class="text-center error">${errorMessage}</td></tr>`;
    if (refurbishedLaptopsBody) refurbishedLaptopsBody.innerHTML = `<tr><td colspan="12" class="text-center error">${errorMessage}</td></tr>`;
  }
};

/**
 * Initialize lazy loading for images
 * @param {HTMLElement} container - The container element to search for images
 */
export const initLazyLoading = (container = document) => {
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const lazyImages = container.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
      }
    });
  } else {
    // Fallback for browsers that don't support loading="lazy"
    const lazyImages = [].slice.call(container.querySelectorAll('img[data-src]'));
    
    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.onload = () => {
              lazyImage.classList.add('loaded');
              lazyImageObserver.unobserve(lazyImage);
            };
            lazyImage.onerror = () => {
              lazyImage.src = 'images/placeholder-laptop.png';
              lazyImage.classList.add('loaded');
              lazyImageObserver.unobserve(lazyImage);
            };
          }
        });
      }, {
        rootMargin: '200px 0px',
        threshold: 0.01
      });

      lazyImages.forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      let active = false;
      const lazyLoad = () => {
        if (active === false) {
          active = true;
          setTimeout(() => {
            lazyImages.forEach(lazyImage => {
              if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && 
                   lazyImage.getBoundingClientRect().bottom >= 0) &&
                  getComputedStyle(lazyImage).display !== 'none') {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.onload = () => lazyImage.classList.add('loaded');
                lazyImage.onerror = () => {
                  lazyImage.src = 'images/placeholder-laptop.png';
                  lazyImage.classList.add('loaded');
                };
                lazyImages.splice(lazyImages.indexOf(lazyImage), 1);
              }
            });
            active = false;
          }, 200);
        }
      };

      document.addEventListener('scroll', lazyLoad);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationchange', lazyLoad);
      lazyLoad(); // Initial check
    }
  }
};

/**
 * Show loading overlay
 * @param {boolean} show - Whether to show or hide the overlay
 */
export const showLoading = (show = true) => {
  const overlay = document.querySelector('.loading-overlay');
  if (overlay) {
    overlay.style.display = show ? 'flex' : 'none';
  }
};

/**
 * Initialize tooltips
 * @param {HTMLElement} container - The container element to initialize tooltips in
 */
export const initTooltips = (container = document) => {
  const tooltipTriggerList = [].slice.call(container.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
};
