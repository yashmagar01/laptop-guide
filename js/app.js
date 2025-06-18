/**
 * Main Application Module
 * Initializes and coordinates all application components
 */

// Import all necessary modules
import { debounce, showToast, initOfflineDetection } from './utils.js';
import { renderLaptopTables, initLazyLoading, initTooltips } from './components.js';
import { filterLaptops, initSearch, sortLaptops } from './search.js';
import { initModal } from './modal.js';
import CONFIG from './config.js';
import laptopsData from '../data/laptops.js';

// Debug log to verify data is loaded
console.log('Laptops data loaded:', laptopsData);

class LaptopGuideApp {
  constructor() {
    // DOM Elements - use document as the main container since we don't have an 'app' div
    this.dom = {
      app: document, // Using document as the root since we don't have an 'app' container
      newLaptopsBody: document.getElementById('new-laptops-body'),
      refurbishedLaptopsBody: document.getElementById('refurbished-laptops-body'),
      offlineBanner: document.querySelector('.offline-banner'),
      loadingOverlay: document.querySelector('.loading-overlay')
    };
    
    console.log('DOM elements:', this.dom);
    
    // State
    this.state = {
      laptops: [...laptopsData],
      filteredLaptops: {
        new: [],
        refurbished: []
      },
      searchQuery: {
        new: '',
        refurbished: ''
      },
      sortBy: {
        new: 'price',
        refurbished: 'price',
      },
      sortOrder: {
        new: 'asc',
        refurbished: 'asc'
      }
    };
    
    // Initialize the app
    this.init();
  }
  
  /**
   * Initialize the application
   */
  init() {
    console.log('Initializing app...');
    
    // Initialize offline detection
    initOfflineDetection();
    
    // Initial data processing
    this.processInitialData();
    
    // Initialize components
    this.initComponents();
    
    // Initial render
    console.log('Rendering laptops...');
    this.renderLaptops();
    
    // Show welcome message
    showToast('Welcome to Ultimate Laptop Guide!', 'info');
    
    // Log initialization
    console.log('LaptopGuideApp initialized');
    console.log('App initialization complete');
  }
  
  /**
   * Render the laptop tables
   */
  renderLaptops() {
    console.log('Rendering laptop tables...');
    console.log('New laptops:', this.state.filteredLaptops.new);
    console.log('Refurbished laptops:', this.state.filteredLaptops.refurbished);
    
    // Get the table body elements
    const newLaptopsBody = document.getElementById('new-laptops-body');
    const refurbishedLaptopsBody = document.getElementById('refurbished-laptops-body');
    
    console.log('New laptops body element:', newLaptopsBody);
    console.log('Refurbished laptops body element:', refurbishedLaptopsBody);
    
    // Render the laptop tables
    renderLaptopTables({
      newLaptopsBody,
      refurbishedLaptopsBody,
      newLaptops: this.state.filteredLaptops.new,
      refurbishedLaptops: this.state.filteredLaptops.refurbished
    });
    
    // Initialize lazy loading for images
    if (newLaptopsBody || refurbishedLaptopsBody) {
      initLazyLoading();
      initTooltips();
    }
  }
  
  /**
   * Process initial data
   */
  processInitialData() {
    // Separate new and refurbished laptops
    this.state.filteredLaptops.new = this.state.laptops.filter(laptop => laptop.type === 'new');
    this.state.filteredLaptops.refurbished = this.state.laptops.filter(laptop => laptop.type === 'refurbished');
    
    // Initial sort
    this.sortLaptops('new');
    this.sortLaptops('refurbished');
  }
  
  /**
   * Initialize application components
   */
  initComponents() {
    console.log('Initializing components...');
    
    try {
      console.log('Initializing search...');
      this.search = initSearch(document, this.handleSearch.bind(this));
      console.log('Search initialized');
      
      console.log('Initializing modal...');
      this.modal = initModal(document, this.getLaptopById.bind(this));
      console.log('Modal initialized');
      
      console.log('Adding event listeners...');
      this.addEventListeners();
      console.log('Event listeners added');
    } catch (error) {
      console.error('Error initializing components:', error);
      throw error; // Re-throw to be caught by the caller
    }
  }
  
  /**
   * Add event listeners
   */
  addEventListeners() {
    console.log('Adding event listeners...');
    
    try {
      // Handle window resize with debounce
      window.addEventListener('resize', debounce(() => {
        this.handleResize();
      }, 200));
      
      // Handle beforeunload
      window.addEventListener('beforeunload', () => {
        // Cleanup if needed
      });
      
      // Add search event listeners
      const newSearchInput = document.getElementById('new-search');
      const newSearchBtn = document.getElementById('new-search-btn');
      const refurbishedSearchInput = document.getElementById('refurbished-search');
      const refurbishedSearchBtn = document.getElementById('refurbished-search-btn');
      
      if (newSearchInput && newSearchBtn) {
        newSearchInput.addEventListener('input', (e) => {
          this.handleSearch(e.target.value, 'new');
        });
        
        newSearchBtn.addEventListener('click', () => {
          this.handleSearch(newSearchInput.value, 'new');
        });
        console.log('Added event listeners for new laptops search');
      } else {
        console.warn('Could not find new search elements');
      }
      
      if (refurbishedSearchInput && refurbishedSearchBtn) {
        refurbishedSearchInput.addEventListener('input', (e) => {
          this.handleSearch(e.target.value, 'refurbished');
        });
        
        refurbishedSearchBtn.addEventListener('click', () => {
          this.handleSearch(refurbishedSearchInput.value, 'refurbished');
        });
        console.log('Added event listeners for refurbished laptops search');
      } else {
        console.warn('Could not find refurbished search elements');
      }
      
      // Add sort event listeners - safely handle if elements don't exist
      const sortButtons = document.querySelectorAll('.sort-btn');
      if (sortButtons.length > 0) {
        sortButtons.forEach(btn => {
          btn.addEventListener('click', (e) => {
            const { type, sortBy } = e.target.dataset;
            if (type && sortBy) {
              this.handleSort(type, sortBy);
            }
          });
        });
        console.log('Added event listeners for sort buttons');
      } else {
        console.warn('No sort buttons found');
      }
      
      // Add modal event listeners
      document.addEventListener('click', (e) => {
        const viewDetailsBtn = e.target.closest('.view-details');
        if (viewDetailsBtn) {
          const id = parseInt(viewDetailsBtn.dataset.id);
          if (id && this.modal && typeof this.modal.show === 'function') {
            this.modal.show(id);
          }
        }
      });
      
      console.log('All event listeners added successfully');
    } catch (error) {
      console.error('Error adding event listeners:', error);
    }
  }
  
  /**
   * Handle search
   * @param {string} query - The search query
   * @param {string} type - The type of laptops to search ('new' or 'refurbished')
   */
  handleSearch(query, type) {
    this.state.searchQuery[type] = query;
    this.applyFiltersAndSort(type);
  }
  
  /**
   * Handle sort
   * @param {string} type - The type of laptops to sort ('new' or 'refurbished')
   * @param {string} sortBy - The property to sort by
   */
  handleSort(type, sortBy) {
    // Toggle sort order if sorting by the same property
    if (this.state.sortBy[type] === sortBy) {
      this.state.sortOrder[type] = this.state.sortOrder[type] === 'asc' ? 'desc' : 'asc';
    } else {
      this.state.sortBy[type] = sortBy;
      this.state.sortOrder[type] = 'asc';
    }
    
    this.sortLaptops(type);
    this.renderTable(type);
    
    // Update sort indicators
    this.updateSortIndicators(type, sortBy);
  }
  
  /**
   * Apply filters and sort to laptops
   * @param {string} type - The type of laptops to process ('new' or 'refurbished')
   */
  applyFiltersAndSort(type) {
    // Apply search filter
    this.state.filteredLaptops[type] = filterLaptops(
      this.state.laptops,
      this.state.searchQuery[type],
      type
    );
    
    // Apply sort
    this.sortLaptops(type);
    
    // Re-render the table
    this.renderTable(type);
  }
  
  /**
   * Sort laptops
   * @param {string} type - The type of laptops to sort ('new' or 'refurbished')
   */
  sortLaptops(type) {
    this.state.filteredLaptops[type] = sortLaptops(
      this.state.filteredLaptops[type],
      this.state.sortBy[type],
      this.state.sortOrder[type] === 'asc'
    );
  }
  
  /**
   * Update sort indicators in the UI
   * @param {string} type - The type of laptops ('new' or 'refurbished')
   * @param {string} sortBy - The property being sorted by
   */
  updateSortIndicators(type, sortBy) {
    // Remove all sort indicators
    const indicators = this.dom.app.querySelectorAll(`[data-type="${type}"][data-sort] .sort-indicator`);
    indicators.forEach(indicator => {
      indicator.innerHTML = '';
    });
    
    // Add indicator to active sort
    const activeSortButton = this.dom.app.querySelector(`[data-type="${type}"][data-sort="${sortBy}"]`);
    if (activeSortButton) {
      const indicator = activeSortButton.querySelector('.sort-indicator') || document.createElement('span');
      indicator.className = 'sort-indicator ms-1';
      indicator.innerHTML = this.state.sortOrder[type] === 'asc' ? '↑' : '↓';
      
      if (!activeSortButton.contains(indicator)) {
        activeSortButton.appendChild(indicator);
      }
    }
  }
  
  /**
   * Handle window resize
   */
  handleResize() {
    // Handle responsive adjustments if needed
  }
  
  /**
   * Handle online/offline status change
   */
  handleOnlineStatusChange() {
    if (navigator.onLine) {
      showToast('Back online', 'success');
    } else {
      showToast('You are currently offline', 'warning');
    }
  }
  
  /**
   * Get laptop by ID
   * @param {number} id - The laptop ID
   * @returns {Object|null} - The laptop object or null if not found
   */
  getLaptopById(id) {
    return this.state.laptops.find(laptop => laptop.id === id) || null;
  }
  
  /**
   * Render the application
   */
  render() {
    // Render tables
    this.renderTable('new');
    this.renderTable('refurbished');
    
    // Initialize lazy loading after render
    requestAnimationFrame(() => {
      initLazyLoading();
    });
  }
  
  /**
   * Render a laptop table
   * @param {string} type - The type of laptops to render ('new' or 'refurbished')
   */
  renderTable(type) {
    const container = type === 'new' ? this.dom.newLaptopsBody : this.dom.refurbishedLaptopsBody;
    if (!container) return;
    
    renderLaptopTables(this.dom.app, {
      [type]: this.state.filteredLaptops[type]
    });
    
    // Update result count
    const countElement = this.dom.app.querySelector(`#${type}-results-count`);
    if (countElement) {
      countElement.textContent = this.state.filteredLaptops[type].length;
    }
  }
  
  /**
   * Show loading state
   * @param {boolean} show - Whether to show or hide the loading state
   */
  showLoading(show = true) {
    if (this.dom.loadingOverlay) {
      this.dom.loadingOverlay.style.display = show ? 'flex' : 'none';
    }
  }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('DOM fully loaded, initializing app...');
    
    // Initialize the app
    const app = new LaptopGuideApp();
    app.init();
    
    // Store app instance globally for debugging
    window.app = app;
    
    // Handle offline/online status
    window.addEventListener('online', () => {
      if (app.dom.offlineBanner) {
        app.dom.offlineBanner.style.display = 'none';
      }
      showToast('You are back online', 'success');
    });

    window.addEventListener('offline', () => {
      if (app.dom.offlineBanner) {
        app.dom.offlineBanner.style.display = 'block';
      }
      showToast('You are currently offline. Some features may be limited.', 'warning');
    });

    // Initial check
    if (!navigator.onLine && app.dom.offlineBanner) {
      app.dom.offlineBanner.style.display = 'block';
    }
    
    console.log('App initialization complete');
  } catch (error) {
    console.error('Failed to initialize application:', error);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = 'Failed to load application. Please check the console for details.';
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '20px';
    errorDiv.style.textAlign = 'center';
    document.body.prepend(errorDiv);
  }
});
