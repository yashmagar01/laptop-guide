/**
 * Modal Module
 * Handles all modal-related functionality for laptop details
 */

import { formatPrice } from './utils.js';

/**
 * Initialize modal functionality
 * @param {HTMLElement} container - The container element for modals
 * @param {Function} getLaptopById - Function to get laptop by ID
 * @returns {Object} - Object with modal control methods
 */
export const initModal = (container, getLaptopById) => {
  if (!container) return {};
  
  const modalElement = container.querySelector('#laptopDetailsModal');
  const modalTitle = container.querySelector('#laptopDetailsModalLabel');
  const modalBody = container.querySelector('#laptopDetailsBody');
  
  if (!modalElement || !modalTitle || !modalBody) {
    console.error('Modal elements not found');
    return {};
  }
  
  const modal = new bootstrap.Modal(modalElement);
  
  /**
   * Render laptop details in the modal
   * @param {Object} laptop - The laptop object
   */
  const renderLaptopDetails = (laptop) => {
    if (!laptop) return;
    
    modalTitle.textContent = laptop.model;
    
    const detailsHtml = `
      <div class="row g-3">
        <div class="col-md-6">
          <div class="laptop-image-container mb-3">
            <img 
              src="${laptop.image || 'images/placeholder-laptop.png'}" 
              alt="${laptop.model}" 
              class="img-fluid rounded"
              onerror="this.onerror=null; this.src='images/placeholder-laptop.png'"
            >
          </div>
          
          <div class="specs-card mb-3">
            <h5 class="card-title">Key Specifications</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <span>Processor:</span>
                <span class="text-end">${laptop.processor}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>RAM:</span>
                <span>${laptop.ram}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Storage:</span>
                <span>${laptop.storage}</span>
              </li>
              ${laptop.gpu ? `
                <li class="list-group-item d-flex justify-content-between">
                  <span>Graphics:</span>
                  <span>${laptop.gpu}</span>
                </li>
              ` : ''}
              <li class="list-group-item d-flex justify-content-between">
                <span>Display:</span>
                <span>${laptop.display || '15.6\" FHD (1920x1080)'}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Operating System:</span>
                <span>${laptop.os || 'Windows 11 Home'}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Weight:</span>
                <span>${laptop.weight || '1.6 - 2.0 kg'}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-header">
              <h5 class="mb-0">Performance</h5>
            </div>
            <div class="card-body">
              <div class="performance-badges mb-3">
                <span class="badge bg-${laptop.webDev.includes('✓') ? 'success' : 'secondary'} me-1 mb-1">
                  Web Development ${laptop.webDev.includes('✓') ? '✓' : '✗'}
                </span>
                <span class="badge bg-${laptop.appDev.includes('✓') ? 'success' : 'secondary'} me-1 mb-1">
                  App Development ${laptop.appDev.includes('✓') ? '✓' : '✗'}
                </span>
                <span class="badge bg-${laptop.aiDev.includes('✓') ? 'success' : laptop.aiDev.includes('⚠️') ? 'warning' : 'secondary'} me-1 mb-1">
                  AI/ML ${laptop.aiDev.includes('✓') ? '✓' : laptop.aiDev.includes('⚠️') ? '⚠️' : '✗'}
                </span>
                <span class="badge bg-${laptop.videoEditing.includes('✓') ? 'success' : laptop.videoEditing.includes('⚠️') ? 'warning' : 'secondary'} me-1 mb-1">
                  Video Editing ${laptop.videoEditing.includes('✓') ? '✓' : laptop.videoEditing.includes('⚠️') ? '⚠️' : '✗'}
                </span>
                <span class="badge bg-${laptop.gaming.includes('✓') ? 'success' : laptop.gaming.includes('🎮') ? 'primary' : 'secondary'} me-1 mb-1">
                  Gaming ${laptop.gaming.includes('✓') ? '✓' : laptop.gaming.includes('🎮') ? '🎮' : '✗'}
                </span>
              </div>
              
              <h6 class="card-subtitle mb-2 text-muted">Best For:</h6>
              <div class="mb-3">
                ${Array.isArray(laptop.bestFor) ? laptop.bestFor.map(item => 
                  `<span class="badge bg-info me-1">${item.replace(/_/g, ' ')}</span>`
                ).join('') : ''}
              </div>
              
              ${laptop.discount ? `
                <div class="alert alert-success mb-3">
                  <i class="fas fa-tag me-2"></i>
                  <strong>Special Offer:</strong> ${laptop.discount}
                </div>
              ` : ''}
            </div>
          </div>
          
          <div class="card mb-3">
            <div class="card-header">
              <h5 class="mb-0">Pricing</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span>Our Price:</span>
                <span class="h5 mb-0">${formatPrice(laptop.price)}</span>
              </div>
              
              ${laptop.originalPrice ? `
                <div class="d-flex justify-content-between text-muted small mb-2">
                  <span>Original Price:</span>
                  <span><s>${formatPrice(laptop.originalPrice)}</s></span>
                </div>
                <div class="d-flex justify-content-between text-success fw-bold mb-3">
                  <span>You Save:</span>
                  <span>${formatPrice(laptop.originalPrice - laptop.price)} (${Math.round((1 - laptop.price / laptop.originalPrice) * 100)}%)</span>
                </div>
              ` : ''}
              
              <div class="d-grid gap-2">
                <a href="#" class="btn btn-primary" onclick="window.open('https://www.amazon.in/s?k=${encodeURIComponent(laptop.model)}', '_blank')">
                  <i class="fab fa-amazon me-2"></i>View on Amazon
                </a>
                <a href="#" class="btn btn-warning" onclick="window.open('https://www.flipkart.com/search?q=${encodeURIComponent(laptop.model)}', '_blank')">
                  <i class="fas fa-shopping-cart me-2"></i>View on Flipkart
                </a>
                ${laptop.official ? `
                  <a href="#" class="btn btn-outline-primary" onclick="window.open('${laptop.official}', '_blank')">
                    <i class="fas fa-globe me-2"></i>Official Website
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    modalBody.innerHTML = detailsHtml;
  };
  
  // Handle view details button clicks
  const handleViewDetails = (e) => {
    const button = e.target.closest('.view-details');
    if (!button) return;
    
    const laptopId = parseInt(button.dataset.id, 10);
    if (isNaN(laptopId)) return;
    
    const laptop = getLaptopById(laptopId);
    if (!laptop) {
      console.error(`Laptop with ID ${laptopId} not found`);
      return;
    }
    
    renderLaptopDetails(laptop);
    modal.show();
  };
  
  // Event delegation for view details buttons
  container.addEventListener('click', handleViewDetails);
  
  // Public methods
  return {
    /**
     * Show modal with laptop details
     * @param {number} laptopId - The ID of the laptop to show
     */
    show: (laptopId) => {
      const laptop = getLaptopById(laptopId);
      if (laptop) {
        renderLaptopDetails(laptop);
        modal.show();
      }
    },
    
    /**
     * Hide the modal
     */
    hide: () => {
      modal.hide();
    },
    
    /**
     * Cleanup event listeners
     */
    destroy: () => {
      container.removeEventListener('click', handleViewDetails);
      modal.dispose();
    }
  };
};
