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
        lazyLoadOffset: 200,
        imagePlaceholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==',
        defaultImage: 'images/placeholder-laptop.png'
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
        newSearchInput: document.querySelector('#new-search'),
        newSearchButton: document.querySelector('#new-search-btn'),
        refurbishedSearchInput: document.querySelector('#refurbished-search'),
        refurbishedSearchButton: document.querySelector('#refurbished-search-btn'),
        
        // Table Bodies
        newLaptopsBody: document.querySelector('#new-laptops-body'),
        refurbishedLaptopsBody: document.querySelector('#refurbished-laptops-body'),
        
        // UI Elements
        loadingOverlay: document.querySelector('.loading-overlay'),
        offlineBanner: document.querySelector('.offline-banner'),
        installButton: document.querySelector('.install-button')
    };

    // ====================================
    // Data Models
    // ====================================
    const laptopsData = [
        // ===== NEW LAPTOPS =====
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
        {
            id: 2,
            model: 'Lenovo IdeaPad 3 15ITL6',
            processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
            ram: '8GB DDR4',
            storage: '512GB SSD',
            expandable: 'Both',
            webDev: '✅ Excellent',
            appDev: '✅ Excellent',
            aiDev: '⚠️ Moderate',
            videoEditing: '✅ Good',
            gaming: '🎮 Light Gaming (Iris Xe)',
            discount: '12% Lenovo Portal',
            brand: 'Lenovo',
            year: 2023,
            price: 44500,
            amazon: 45990,
            flipkart: 46200,
            official: 44500,
            offline: '46,000-48,000',
            type: 'new',
            bestFor: ['coding', 'general']
        },
        {
            id: 3,
            model: 'Acer Aspire 5 A515-56',
            processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            expandable: 'Both',
            webDev: '✅ Excellent',
            appDev: '✅ Excellent',
            aiDev: '⚠️ Moderate',
            videoEditing: '✅ Good',
            gaming: '🎮 Light Gaming (Iris Xe)',
            discount: '5% Student',
            brand: 'Acer',
            year: 2023,
            price: 47990,
            amazon: 48990,
            flipkart: 49200,
            official: 47990,
            offline: '48,000-50,000',
            type: 'new',
            bestFor: ['coding', 'video_editing', 'gaming']
        },
        {
            id: 4,
            model: 'Dell Inspiron 3511',
            processor: 'Intel Core i3-1115G4 (3.0-4.1 GHz, 2C/4T)',
            ram: '8GB DDR4',
            storage: '256GB SSD + 1TB HDD',
            expandable: 'RAM+HDD',
            webDev: '✅ Good',
            appDev: '✅ Good',
            aiDev: '❌ Limited',
            videoEditing: '⚠️ Basic',
            gaming: '❌ Not Recommended',
            discount: '8% Student',
            brand: 'Dell',
            year: 2023,
            price: 38990,
            amazon: 39990,
            flipkart: 40200,
            official: 38990,
            offline: '39,000-41,000',
            type: 'new',
            bestFor: ['general', 'coding']
        },
        
        // ===== REFURBISHED LAPTOPS =====
        {
            id: 101,
            model: 'HP EliteBook 840 G5 (Refurbished)',
            processor: 'Intel Core i5-8350U (1.7-3.6 GHz, 4C/8T)',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            expandable: 'RAM+SSD',
            webDev: '✅ Excellent',
            appDev: '✅ Good',
            aiDev: '⚠️ Basic',
            videoEditing: '✅ Good',
            gaming: '❌ Not Recommended',
            warranty: '6 Months',
            condition: 'Grade A',
            brand: 'HP',
            year: 2020,
            price: 29990,
            originalPrice: 54990,
            type: 'refurbished',
            bestFor: ['coding', 'general']
        },
        {
            id: 102,
            model: 'Dell Latitude 5400 (Refurbished)',
            processor: 'Intel Core i5-8365U (1.6-4.1 GHz, 4C/8T)',
            ram: '8GB DDR4',
            storage: '256GB SSD',
            expandable: 'RAM+SSD',
            webDev: '✅ Good',
            appDev: '✅ Good',
            aiDev: '❌ Limited',
            videoEditing: '⚠️ Basic',
            gaming: '❌ Not Recommended',
            warranty: '6 Months',
            condition: 'Grade A',
            brand: 'Dell',
            year: 2020,
            price: 25990,
            originalPrice: 49990,
            type: 'refurbished',
            bestFor: ['general', 'coding']
        },
        {
            id: 103,
            model: 'Lenovo ThinkPad T480 (Refurbished)',
            processor: 'Intel Core i5-8250U (1.6-3.4 GHz, 4C/8T)',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            expandable: 'RAM+SSD',
            webDev: '✅ Excellent',
            appDev: '✅ Excellent',
            aiDev: '⚠️ Basic',
            videoEditing: '✅ Good',
            gaming: '❌ Not Recommended',
            warranty: '6 Months',
            condition: 'Grade A',
            brand: 'Lenovo',
            year: 2019,
            price: 27990,
            originalPrice: 52990,
            type: 'refurbished',
            bestFor: ['coding', 'general', 'business']
        },
        {
            id: 104,
            model: 'HP ProBook 450 G6 (Refurbished)',
            processor: 'Intel Core i7-8565U (1.8-4.6 GHz, 4C/8T)',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            expandable: 'RAM+SSD',
            webDev: '✅ Excellent',
            appDev: '✅ Excellent',
            aiDev: '⚠️ Moderate',
            videoEditing: '✅ Good',
            gaming: '🎮 Light Gaming (UHD 620)',
            warranty: '6 Months',
            condition: 'Grade A',
            brand: 'HP',
            year: 2020,
            price: 34990,
            originalPrice: 64990,
            type: 'refurbished',
            bestFor: ['coding', 'video_editing', 'general']
        }
        // Add more laptops here...
    ];

    // ====================================
    // Core Functions
    // ====================================


    /**
     * Initialize the application
     */
    function init() {
        console.log('Initializing Laptop Guide...');
        
        // Set initial state
        state.laptops = [...laptopsData];
        state.filteredLaptops = [...laptopsData];
        
        console.log('Laptops data loaded:', state.laptops.length, 'items');
        
        // Initialize UI components
        try {
            renderLaptopTables();
            setupEventListeners();
            initOfflineDetection();
            checkInstallPrompt();
            initLazyLoading();
            
            console.log('Laptop Guide initialized successfully');
        } catch (error) {
            console.error('Error initializing Laptop Guide:', error);
        }
    }

    /**
     * Set up event listeners
     */
    function setupEventListeners() {
        // New laptops search
        if (elements.newSearchInput) {
            elements.newSearchInput.addEventListener('input', 
                debounce((e) => handleSearch(e, 'new'), CONFIG.debounceTime));
        }
        
        if (elements.newSearchButton) {
            elements.newSearchButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleSearch({ target: elements.newSearchInput }, 'new');
            });
        }
        
        // Refurbished laptops search
        if (elements.refurbishedSearchInput) {
            elements.refurbishedSearchInput.addEventListener('input', 
                debounce((e) => handleSearch(e, 'refurbished'), CONFIG.debounceTime));
        }
        
        if (elements.refurbishedSearchButton) {
            elements.refurbishedSearchButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleSearch({ target: elements.refurbishedSearchInput }, 'refurbished');
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
        console.log('Rendering laptop tables...');
        console.log('Total laptops in state:', state.laptops.length);
        
        if (!elements.newLaptopsBody || !elements.refurbishedLaptopsBody) {
            console.error('Table bodies not found. Elements found:', {
                newLaptopsBody: !!elements.newLaptopsBody,
                refurbishedLaptopsBody: !!elements.refurbishedLaptopsBody
            });
            return;
        }
        
        const newLaptops = state.laptops.filter(laptop => laptop.type === 'new');
        const refurbishedLaptops = state.laptops.filter(laptop => laptop.type === 'refurbished');
        
        console.log('New laptops count:', newLaptops.length);
        console.log('Refurbished laptops count:', refurbishedLaptops.length);
        
        elements.newLaptopsBody.innerHTML = generateLaptopTableRows(newLaptops);
        elements.refurbishedLaptopsBody.innerHTML = generateLaptopTableRows(refurbishedLaptops);
        
        console.log('Tables rendered successfully');
    }

    /**
     * Generate HTML for laptop table rows
     */
    function generateLaptopTableRows(laptops) {
        if (!laptops.length) return '<tr><td colspan="11" class="text-center">No laptops found matching your criteria.</td></tr>';
        
        return laptops.map(laptop => `
            <tr data-laptop-id="${laptop.id}">
                <td>
                    <div class="img-container" style="width: 120px; height: 80px;">
                        <img 
                            class="lazy-img" 
                            data-src="${laptop.image || CONFIG.defaultImage}" 
                            alt="${laptop.model}" 
                            loading="lazy"
                            width="120"
                            height="80"
                            onerror="this.onerror=null;this.src='${CONFIG.defaultImage}';"
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
                <td>₹${laptop.price.toLocaleString('en-IN')}</td>
                <td>
                    <button class="btn btn-sm btn-info view-details" data-id="${laptop.id}" aria-label="View details for ${laptop.model}">
                        View Details
                    </button>
                </td>
            </tr>
        `).join('');
    }

    /**
     * Handle search functionality
     */
    function handleSearch(event, type) {
        const query = event.target.value.toLowerCase();
        const filteredLaptops = state.laptops.filter(laptop => {
            if (type && laptop.type !== type) return false;
            if (!query) return true;
            
            return (
                laptop.model.toLowerCase().includes(query) ||
                laptop.processor.toLowerCase().includes(query) ||
                laptop.ram.toLowerCase().includes(query) ||
                laptop.storage.toLowerCase().includes(query) ||
                (laptop.brand && laptop.brand.toLowerCase().includes(query))
            );
        });

        const targetBody = type === 'new' ? elements.newLaptopsBody : elements.refurbishedLaptopsBody;
        if (targetBody) {
            targetBody.innerHTML = generateLaptopTableRows(filteredLaptops);
        }
    }

    /**
     * Initialize lazy loading for images
     */
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading is supported
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                }
            });
        } else {
            // Fallback for browsers that don't support loading="lazy"
            const lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));
            
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
                                lazyImage.src = CONFIG.defaultImage;
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
                                        lazyImage.src = CONFIG.defaultImage;
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
