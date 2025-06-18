/**
 * Search Module
 * Handles all search and filtering functionality
 */

import { debounce } from './utils.js';

/**
 * Filter laptops based on search query
 * @param {Array} laptops - Array of laptop objects
 * @param {string} query - Search query string
 * @param {string} type - Type of laptops to filter ('new', 'refurbished', or 'all')
 * @returns {Array} - Filtered array of laptops
 */
export const filterLaptops = (laptops, query, type = 'all') => {
  if (!laptops || !laptops.length) return [];
  
  const searchQuery = query ? query.toLowerCase().trim() : '';
  
  return laptops.filter(laptop => {
    // Filter by type if specified
    if (type !== 'all' && laptop.type !== type) return false;
    
    // If no search query, return all matching types
    if (!searchQuery) return true;
    
    // Search in relevant fields
    const searchableFields = [
      laptop.model,
      laptop.processor,
      laptop.ram,
      laptop.storage,
      laptop.brand,
      laptop.type
    ].join(' ').toLowerCase();
    
    return searchableFields.includes(searchQuery);
  });
};

/**
 * Initialize search functionality
 * @param {HTMLElement} container - The container element with search inputs
 * @param {Function} onSearch - Callback function when search is performed
 * @returns {Object} - Object with search control methods
 */
export const initSearch = (container, onSearch) => {
  console.log('Initializing search with container:', container);
  
  if (!container) {
    console.warn('Search initialization failed: No container provided');
    return {};
  }
  
  const searchInputs = {
    new: container.querySelector('#new-search'),
    refurbished: container.querySelector('#refurbished-search')
  };
  
  const searchButtons = {
    new: container.querySelector('#new-search-btn'),
    refurbished: container.querySelector('#refurbished-search-btn')
  };
  
  console.log('Search inputs found:', searchInputs);
  console.log('Search buttons found:', searchButtons);
  
  // Debounced search function
  const debouncedSearch = debounce((type) => {
    const query = searchInputs[type]?.value || '';
    onSearch(query, type);
  }, 300);
  
  // Event listeners
  const setupEventListeners = () => {
    // Input events for search
    Object.entries(searchInputs).forEach(([type, input]) => {
      if (!input) return;
      
      // Input event with debounce
      input.addEventListener('input', () => debouncedSearch(type));
      
      // Clear button
      const clearButton = input.nextElementSibling;
      if (clearButton && clearButton.classList.contains('clear-search')) {
        clearButton.addEventListener('click', () => {
          input.value = '';
          onSearch('', type);
          input.focus();
        });
      }
    });
    
    // Search button events
    Object.entries(searchButtons).forEach(([type, button]) => {
      if (!button) return;
      
      button.addEventListener('click', () => {
        const query = searchInputs[type]?.value || '';
        onSearch(query, type);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeInput = document.activeElement;
        if (Object.values(searchInputs).includes(activeInput)) {
          activeInput.value = '';
          const type = Object.entries(searchInputs).find(([_, input]) => input === activeInput)?.[0];
          if (type) onSearch('', type);
        }
      }
    });
  };
  
  // Initialize
  setupEventListeners();
  
  // Public methods
  return {
    /**
     * Set the search query for a specific type
     * @param {string} query - The search query
     * @param {string} type - The type of search ('new' or 'refurbished')
     */
    setQuery: (query, type) => {
      if (searchInputs[type]) {
        searchInputs[type].value = query;
      }
    },
    
    /**
     * Clear all search inputs
     */
    clearAll: () => {
      Object.values(searchInputs).forEach(input => {
        if (input) input.value = '';
      });
    },
    
    /**
     * Focus the search input for a specific type
     * @param {string} type - The type of search ('new' or 'refurbished')
     */
    focus: (type) => {
      if (searchInputs[type]) {
        searchInputs[type].focus();
      }
    }
  };
};

/**
 * Sort laptops by a specific property
 * @param {Array} laptops - Array of laptop objects
 * @param {string} property - Property to sort by
 * @param {boolean} ascending - Sort order (true for ascending, false for descending)
 * @returns {Array} - Sorted array of laptops
 */
export const sortLaptops = (laptops, property, ascending = true) => {
  if (!laptops || !laptops.length) return [];
  
  return [...laptops].sort((a, b) => {
    let valueA = a[property];
    let valueB = b[property];
    
    // Handle numeric values
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return ascending ? valueA - valueB : valueB - valueA;
    }
    
    // Handle string values
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
      return ascending 
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    
    return 0;
  });
};
