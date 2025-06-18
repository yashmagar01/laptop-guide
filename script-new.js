/**
 * Laptop Guide Application
 * A Progressive Web App for comparing and finding the best laptops
 */

// Main Application Module
const LaptopGuide = (function() {
    'use strict';

    // ====================================
    // Configuration and Constants
    // ====================================
    const CONFIG = {
        debounceTime: 300,
        toastDuration: 3000,
        lazyLoadOffset: 200
    };

    // ====================================
    // State Management
    // ====================================
    const state = {
        laptops: [],
        filteredLaptops: [],
        currentView: 'new', // 'new' or 'refurbished'
        searchQuery: '',
        isOnline: navigator.onLine
    };

    // ====================================
    // DOM Elements
    // ====================================
    const elements = {
        // Search Elements
        searchInput: document.querySelector('#search-input'),
        searchButton: document.querySelector('#search-button'),
        searchRefurbishedInput: document.querySelector('#search-refurbished-input'),
        searchRefurbishedButton: document.querySelector('#search-refurbished-button'),
        
        // Container Elements
        newLaptopsContainer: document.querySelector('#new-laptops .table-container'),
        refurbishedLaptopsContainer: document.querySelector('#refurbished .table-container'),
        
        // UI Elements
        loadingOverlay: document.querySelector('.loading-overlay'),
        offlineBanner: document.querySelector('.offline-banner'),
        installButton: document.querySelector('.install-button')
    };

    // ====================================
    // Data Models
    // ====================================
    const laptopData = [
        // New Laptops (1-23)
        {
            id: 1,
            model: 'HP Pavilion 15-eh1003AU',
            processor: 'AMD Ryzen 5 5500U (2.1-4.0 GHz, 6C/12T)',
            ram: '8GB DDR4',
            storage: '512GB SSD',
            expandable: 'RAM+SSD',
            webDev: '✅ Excellent',
            appDev: '✅ Good',
            aiDev: '⚠️ Basic',
            videoEditing: '✅ Good',
            gaming: '🎮 Light Gaming (Vega 7)',
            discount: '10% HP Education',
            brand: 'HP Inc.',
            year: 2023,
            price: 40990,
            amazon: 41999,
            flipkart: 42500,
            official: 40990,
            offline: '43,000-45,000',
            type: 'new',
            bestFor: ['coding', 'general']
        },
        // Add more laptops here...
    ];

    // ====================================
    // Core Functions
    // ====================================


    /**
     * Initialize the application
     */
    function init() {
        // Set initial state
        state.laptops = [...laptopData];
        state.filteredLaptops = [...laptopData];
        
        // Initialize UI components
        renderLaptopTables();
        setupEventListeners();
        initOfflineDetection();
        checkInstallPrompt();
        
        console.log('Laptop Guide initialized');
    }

    /**
     * Set up event listeners
     */
    function setupEventListeners() {
        // Search functionality
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', debounce(handleSearch, CONFIG.debounceTime));
        }
        
        if (elements.searchButton) {
            elements.searchButton.addEventListener('click', () => {
                handleSearch({ target: elements.searchInput });
            });
        }
        
        if (elements.searchRefurbishedInput) {
            elements.searchRefurbishedInput.addEventListener('input', 
                debounce(handleSearch, CONFIG.debounceTime));
        }
        
        if (elements.searchRefurbishedButton) {
            elements.searchRefurbishedButton.addEventListener('click', () => {
                handleSearch({ target: elements.searchRefurbishedInput });
            });
        }
        
        // Online/offline detection
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        
        // Before install prompt
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (elements.installButton) {
                elements.installButton.style.display = 'block';
                elements.installButton.addEventListener('click', () => {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the install prompt');
                        } else {
                            console.log('User dismissed the install prompt');
                        }
                        deferredPrompt = null;
                    });
                });
            }
        });
    }

    /**
     * Render laptop tables
     */
    function renderLaptopTables() {
        if (!elements.newLaptopsContainer || !elements.refurbishedLaptopsContainer) return;
        
        const newLaptops = state.laptops.filter(laptop => laptop.type === 'new');
        const refurbishedLaptops = state.laptops.filter(laptop => laptop.type === 'refurbished');
        
        elements.newLaptopsContainer.innerHTML = generateLaptopTable(newLaptops);
        elements.refurbishedLaptopsContainer.innerHTML = generateLaptopTable(refurbishedLaptops);
    }

    /**
     * Generate HTML for laptop table
     */
    function generateLaptopTable(laptops) {
        if (!laptops.length) return '<p>No laptops found matching your criteria.</p>';
        
        return `
            <table class="laptop-table">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Processor</th>
                        <th>RAM</th>
                        <th>Storage</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${laptops.map(laptop => `
                        <tr>
                            <td>${laptop.model}</td>
                            <td>${laptop.processor}</td>
                            <td>${laptop.ram}</td>
                            <td>${laptop.storage}</td>
                            <td>₹${laptop.price.toLocaleString()}</td>
                            <td>
                                <button class="btn btn-sm btn-info view-details" data-id="${laptop.id}">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    /**
     * Handle search functionality
     */
    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        state.searchQuery = query;
        
        if (!query.trim()) {
            state.filteredLaptops = [...state.laptops];
        } else {
            state.filteredLaptops = state.laptops.filter(laptop => 
                laptop.model.toLowerCase().includes(query) ||
                laptop.processor.toLowerCase().includes(query) ||
                laptop.ram.toLowerCase().includes(query) ||
                laptop.storage.toLowerCase().includes(query) ||
                laptop.brand.toLowerCase().includes(query)
            );
        }
        
        renderLaptopTables();
    }

    // ====================================
    // Utility Functions
    // ====================================

    
    /**
     * Debounce function to limit the rate at which a function can fire
     */
    function debounce(func, wait, immediate = false) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    /**
     * Show a toast notification
     */
    function showToast(message, type = 'info', duration = CONFIG.toastDuration) {
        // Implementation for toast notifications
        console.log(`[${type.toUpperCase()}] ${message}`);
    }

    /**
     * Initialize offline detection
     */
    function initOfflineDetection() {
        updateOnlineStatus();
    }

    /**
     * Update online status
     */
    function updateOnlineStatus() {
        state.isOnline = navigator.onLine;
        if (elements.offlineBanner) {
            elements.offlineBanner.style.display = state.isOnline ? 'none' : 'block';
        }
        showToast(
            state.isOnline ? 'Back online' : 'You are currently offline',
            state.isOnline ? 'success' : 'warning'
        );
    }

    /**
     * Check if install prompt is available
     */
    function checkInstallPrompt() {
        // Implementation for install prompt check
    }

    // ====================================
    // Public API
    // ====================================
    return {
        init,
        getLaptops: () => [...state.laptops],
        getFilteredLaptops: () => [...state.filteredLaptops],
        searchLaptops: (query) => {
            state.searchQuery = query;
            handleSearch({ target: { value: query } });
        }
    };
})();

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => LaptopGuide.init());
    } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(LaptopGuide.init, 0);
    }
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.error('ServiceWorker registration failed: ', err);
            });
    });
}
