/**
 * Application Configuration
 * Contains all the configuration constants and settings
 */

const CONFIG = {
  // UI Configuration
  debounceTime: 300,
  toastDuration: 3000,
  lazyLoadOffset: 200,
  
  // Assets
  imagePlaceholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==',
  defaultImage: 'images/placeholder-laptop.png',
  
  // API Endpoints (if any)
  api: {
    baseUrl: 'https://api.example.com',
    endpoints: {
      search: '/search',
      recommendations: '/recommendations'
    }
  },
  
  // Feature Flags
  features: {
    offlineSupport: true,
    lazyLoading: true,
    serviceWorker: true
  },
  
  // Performance Settings
  performance: {
    maxConcurrentRequests: 5,
    cacheTTL: 3600000, // 1 hour in milliseconds
    retryAttempts: 3
  }
};

export default CONFIG;
