// Complete Laptops Data
const laptopsData = [
    // New Laptops (1-5)
    {
        id: 1,
        model: 'HP Pavilion 15-eh1003AU',
        processor: 'AMD Ryzen 5 5500U (2.1-4.0 GHz, 6C/12T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: '✅ RAM+SSD',
        webDev: '✅ Excellent',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '10% HP Education',
        brand: 'HP',
        provider: 'HP Inc.',
        year: 2023,
        price: 40990,
        amazon: 41999,
        flipkart: 42500,
        official: 40990,
        offline: '43,000-45,000',
        reliance: 44200,
        type: 'new',
        bestFor: ['webdev', 'coding', 'light-gaming'],
        launchYear: 2023,
        graphics: 'Vega 7',
        gamingLevel: 'light',
        processorCores: 6,
        processorThreads: 12,
        processorBase: 2.1,
        processorBoost: 4.0,
        processorBrand: 'AMD',
        storageType: 'SSD',
        storageSize: 512
    },
    {
        id: 2,
        model: 'Lenovo IdeaPad 3 15ITL6',
        processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: '✅ Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '⚠️ Moderate',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '12% Lenovo Portal',
        brand: 'Lenovo',
        provider: 'Lenovo',
        year: 2023,
        price: 44500,
        amazon: 45990,
        flipkart: 46200,
        official: 44500,
        offline: '46,000-48,000',
        reliance: 47800,
        type: 'new',
        bestFor: ['appdev', 'coding', 'light-gaming'],
        launchYear: 2023,
        graphics: 'Iris Xe',
        gamingLevel: 'light',
        processorCores: 4,
        processorThreads: 8,
        processorBase: 2.4,
        processorBoost: 4.2,
        processorBrand: 'Intel',
        storageType: 'SSD',
        storageSize: 512
    },
    {
        id: 3,
        model: 'ASUS VivoBook 15 X515EA',
        processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: '✅ RAM+SSD',
        webDev: '✅ Excellent',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        provider: 'ASUS',
        year: 2023,
        price: 43990,
        amazon: 43990,
        flipkart: 44500,
        official: 42990,
        offline: '44,000-46,000',
        reliance: 45500,
        type: 'new',
        bestFor: ['webdev', 'coding', 'light-gaming'],
        launchYear: 2023,
        graphics: 'Iris Xe',
        gamingLevel: 'light',
        processorCores: 4,
        processorThreads: 8,
        processorBase: 2.4,
        processorBoost: 4.2,
        processorBrand: 'Intel',
        storageType: 'SSD',
        storageSize: 512
    },
    {
        id: 4,
        model: 'Acer Aspire 5 A515-57G',
        processor: 'Intel Core i5-12450H (2.0-4.4 GHz, 8C/12T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: '✅ Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Medium Gaming (RTX 2050)',
        discount: '10% Acer Education',
        brand: 'Acer',
        provider: 'Acer',
        year: 2024,
        price: 46999,
        amazon: 46999,
        flipkart: 47200,
        official: 45999,
        offline: '47,000-49,000',
        reliance: 48000,
        type: 'new',
        bestFor: ['gaming', 'videoediting', 'ai'],
        launchYear: 2024,
        graphics: 'RTX 2050',
        gamingLevel: 'medium',
        processorCores: 8,
        processorThreads: 12,
        processorBase: 2.0,
        processorBoost: 4.4,
        processorBrand: 'Intel',
        storageType: 'SSD',
        storageSize: 512
    },
    {
        id: 5,
        model: 'HP 15s-eq2144AU',
        processor: 'AMD Ryzen 5 5500U (2.1-4.0 GHz, 6C/12T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: '✅ SSD Only',
        webDev: '✅ Excellent',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '10% HP Student',
        brand: 'HP',
        provider: 'HP Inc.',
        year: 2023,
        price: 36990,
        amazon: 37999,
        flipkart: 38500,
        official: 36990,
        offline: '38,000-40,000',
        reliance: 39200,
        type: 'new',
        bestFor: ['webdev', 'coding', 'light-gaming'],
        launchYear: 2023,
        graphics: 'Vega 7',
        gamingLevel: 'light',
        processorCores: 6,
        processorThreads: 12,
        processorBase: 2.1,
        processorBoost: 4.0,
        processorBrand: 'AMD',
        storageType: 'SSD',
        storageSize: 512
    },
    {
        id: 6,
        model: 'Lenovo IdeaPad Slim 3 82H801L9IN',
        processor: 'AMD Ryzen 5 5500U (2.1-4.0 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'RAM+SSD',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '12% Lenovo Portal',
        brand: 'Lenovo',
        year: 2023,
        price: 47990,
        amazon: 48990,
        flipkart: 49500,
        official: 47990,
        offline: '49,000-51,000',
        type: 'new',
        bestFor: ['coding', 'multitasking']
    },
    {
        id: 7,
        model: 'ASUS TUF Gaming F15',
        processor: 'Intel Core i5-11400H (2.7-4.5 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        year: 2023,
        price: 67990,
        amazon: 68990,
        flipkart: 69500,
        official: 67990,
        offline: '69,000-72,000',
        type: 'new',
        bestFor: ['gaming', 'design', 'development']
    },
    {
        id: 8,
        model: 'HP Victus 15-fa0166TX',
        processor: 'Intel Core i5-12450H (2.0-4.4 GHz, 8C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050)',
        discount: '10% HP Education',
        brand: 'HP',
        year: 2023,
        price: 69990,
        amazon: 71990,
        flipkart: 72500,
        official: 69990,
        offline: '71,000-74,000',
        type: 'new',
        bestFor: ['gaming', 'design', 'development']
    },
    {
        id: 9,
        model: 'Acer Nitro 5 AN515-58',
        processor: 'Intel Core i5-12500H (2.5-4.5 GHz, 12C/16T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050 Ti)',
        discount: '7% Acer Education',
        brand: 'Acer',
        year: 2023,
        price: 72990,
        amazon: 74990,
        flipkart: 75500,
        official: 72990,
        offline: '74,000-77,000',
        type: 'new',
        bestFor: ['gaming', 'design', 'development']
    },
    {
        id: 10,
        model: 'Lenovo IdeaPad Gaming 3 82S801L8IN',
        processor: 'AMD Ryzen 5 6600H (3.3-4.5 GHz, 6C/12T)',
        ram: '16GB DDR5',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050)',
        discount: '12% Lenovo Portal',
        brand: 'Lenovo',
        year: 2023,
        price: 68990,
        amazon: 69990,
        flipkart: 70500,
        official: 68990,
        offline: '70,000-73,000',
        type: 'new',
        bestFor: ['gaming', 'development', 'design']
    },
    {
        id: 11,
        model: 'MSI GF63 Thin 11UC',
        processor: 'Intel Core i5-11400H (2.7-4.5 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050)',
        discount: '5% MSI Student',
        brand: 'MSI',
        year: 2023,
        price: 69990,
        amazon: 71990,
        flipkart: 72500,
        official: 69990,
        offline: '71,000-74,000',
        type: 'new',
        bestFor: ['gaming', 'design', 'development']
    },
    {
        id: 12,
        model: 'HP 15s-fq5007TU',
        processor: 'Intel Core i3-1215U (1.2-4.4 GHz, 6C/8T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: 'RAM+SSD',
        webDev: '✅ Good',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '⚠️ Basic',
        gaming: '⚠️ Very Limited',
        discount: '10% HP Education',
        brand: 'HP',
        year: 2023,
        price: 38990,
        amazon: 39990,
        flipkart: 40500,
        official: 38990,
        offline: '40,000-42,000',
        type: 'new',
        bestFor: ['general', 'office', 'basic coding']
    },
    {
        id: 13,
        model: 'Lenovo IdeaPad Slim 5 82R9006TIN',
        processor: 'AMD Ryzen 5 7530U (2.0-4.5 GHz, 6C/12T)',
        ram: '16GB LPDDR4X',
        storage: '512GB SSD',
        expandable: 'SSD only',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Radeon 660M)',
        discount: '12% Lenovo Portal',
        brand: 'Lenovo',
        year: 2023,
        price: 55990,
        amazon: 56990,
        flipkart: 57500,
        official: 55990,
        offline: '57,000-59,000',
        type: 'new',
        bestFor: ['coding', 'multitasking', 'light design']
    },
    {
        id: 14,
        model: 'Dell Vostro 3520',
        processor: 'Intel Core i5-1235U (1.3-4.4 GHz, 10C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '10% Dell University',
        brand: 'Dell',
        year: 2023,
        price: 54990,
        amazon: 55990,
        flipkart: 56500,
        official: 54990,
        offline: '56,000-58,000',
        type: 'new',
        bestFor: ['business', 'coding', 'general']
    },
    {
        id: 15,
        model: 'ASUS VivoBook 16X M1603QA',
        processor: 'AMD Ryzen 5 5600H (3.3-4.2 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'SSD only',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        year: 2023,
        price: 52990,
        amazon: 53990,
        flipkart: 54500,
        official: 52990,
        offline: '54,000-56,000',
        type: 'new',
        bestFor: ['coding', 'multimedia', 'general']
    },
    {
        id: 16,
        model: 'Acer Swift 3 SF314-43',
        processor: 'AMD Ryzen 7 5700U (1.8-4.3 GHz, 8C/16T)',
        ram: '16GB LPDDR4X',
        storage: '512GB SSD',
        expandable: 'SSD only',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 8)',
        discount: '7% Acer Education',
        brand: 'Acer',
        year: 2023,
        price: 61990,
        amazon: 62990,
        flipkart: 63500,
        official: 61990,
        offline: '63,000-65,000',
        type: 'new',
        bestFor: ['coding', 'multitasking', 'portability']
    },
    {
        id: 17,
        model: 'HP Envy x360 13-ay0088AU',
        processor: 'AMD Ryzen 5 5600U (2.3-4.2 GHz, 6C/12T)',
        ram: '16GB LPDDR4X',
        storage: '512GB SSD',
        expandable: 'No',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '10% HP Education',
        brand: 'HP',
        year: 2023,
        price: 74990,
        amazon: 76990,
        flipkart: 77500,
        official: 74990,
        offline: '76,000-78,000',
        type: 'new',
        bestFor: ['design', 'multimedia', '2-in-1']
    },
    {
        id: 18,
        model: 'Lenovo ThinkPad E14 Gen 4',
        processor: 'Intel Core i5-1235U (1.3-4.4 GHz, 10C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '15% Lenovo Campus',
        brand: 'Lenovo',
        year: 2023,
        price: 68990,
        amazon: 69990,
        flipkart: 70500,
        official: 68990,
        offline: '70,000-72,000',
        type: 'new',
        bestFor: ['business', 'coding', 'durability']
    },
    {
        id: 19,
        model: 'ASUS ROG Strix G15 G513RC',
        processor: 'AMD Ryzen 7 6800H (3.2-4.7 GHz, 8C/16T)',
        ram: '16GB DDR5',
        storage: '1TB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Excellent',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3050)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        year: 2023,
        price: 84990,
        amazon: 86990,
        flipkart: 87500,
        official: 84990,
        offline: '86,000-88,000',
        type: 'new',
        bestFor: ['gaming', 'design', 'development']
    },
    {
        id: 20,
        model: 'Dell Inspiron 14 5420',
        processor: 'Intel Core i5-1240P (1.7-4.4 GHz, 12C/16T)',
        ram: '16GB LPDDR4X',
        storage: '512GB SSD',
        expandable: 'SSD only',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '10% Dell University',
        brand: 'Dell',
        year: 2023,
        price: 67990,
        amazon: 68990,
        flipkart: 69500,
        official: 67990,
        offline: '69,000-71,000',
        type: 'new',
        bestFor: ['coding', 'business', 'portability']
    },
    {
        id: 21,
        model: 'HP Pavilion Aero 13-be2018AU',
        processor: 'AMD Ryzen 7 7735U (2.7-4.75 GHz, 8C/16T)',
        ram: '16GB LPDDR5',
        storage: '1TB SSD',
        expandable: 'No',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Excellent',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Good Gaming (Radeon 680M)',
        discount: '10% HP Education',
        brand: 'HP',
        year: 2023,
        price: 84990,
        amazon: 86990,
        flipkart: 87500,
        official: 84990,
        offline: '86,000-88,000',
        type: 'new',
        bestFor: ['ultraportable', 'coding', 'design']
    },
    {
        id: 22,
        model: 'Lenovo Yoga 7 14ACN6',
        processor: 'AMD Ryzen 5 5600U (2.3-4.2 GHz, 6C/12T)',
        ram: '16GB LPDDR4X',
        storage: '512GB SSD',
        expandable: 'No',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Vega 7)',
        discount: '12% Lenovo Portal',
        brand: 'Lenovo',
        year: 2023,
        price: 74990,
        amazon: 76990,
        flipkart: 77500,
        official: 74990,
        offline: '76,000-78,000',
        type: 'new',
        bestFor: ['2-in-1', 'design', 'portability']
    },
    {
        id: 23,
        model: 'ASUS ZenBook 14 UX3402ZA',
        processor: 'Intel Core i7-1260P (2.1-4.7 GHz, 12C/16T)',
        ram: '16GB LPDDR5',
        storage: '1TB SSD',
        expandable: 'No',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Excellent',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Good Gaming (Iris Xe)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        year: 2023,
        price: 94990,
        amazon: 96990,
        flipkart: 97500,
        official: 94990,
        offline: '96,000-98,000',
        type: 'new',
        bestFor: ['premium', 'design', 'productivity']
    },
    
    // Refurbished Laptops (24-30)
    {
        id: 24,
        model: 'Lenovo Legion 5 (Refurb)',
        processor: 'AMD Ryzen 5 4600H (3.0-4.0 GHz, 6C/12T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (GTX 1650Ti)',
        discount: '12% Lenovo Outlet',
        brand: 'Lenovo',
        year: 2021,
        price: 43999,
        amazon: 44999,
        flipkart: 45500,
        official: 43999,
        offline: '45,000-47,000',
        type: 'refurbished',
        bestFor: ['gaming', 'coding', 'design'],
        warranty: '6 Months'
    },
    {
        id: 25,
        model: 'Dell G5 15 5500 (Refurb)',
        processor: 'Intel Core i5-10300H (2.5-4.5 GHz, 4C/8T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Very Good Gaming (GTX 1650)',
        discount: '10% Dell Outlet',
        brand: 'Dell',
        year: 2020,
        price: 41999,
        amazon: 42999,
        flipkart: 43500,
        official: 41999,
        offline: '43,000-45,000',
        type: 'refurbished',
        bestFor: ['gaming', 'coding', 'multimedia'],
        warranty: '6 Months'
    },
    {
        id: 26,
        model: 'HP Omen 15-ek0016TX (Refurb)',
        processor: 'Intel Core i7-10750H (2.6-5.0 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '1TB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Excellent',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 2060)',
        discount: '15% HP Renew',
        brand: 'HP',
        year: 2020,
        price: 69999,
        amazon: 71999,
        flipkart: 72500,
        official: 69999,
        offline: '71,000-74,000',
        type: 'refurbished',
        bestFor: ['gaming', 'development', 'design'],
        warranty: '1 Year'
    },
    {
        id: 27,
        model: 'ASUS TUF A15 FA506IU (Refurb)',
        processor: 'AMD Ryzen 5 4600H (3.0-4.0 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (GTX 1660Ti)',
        discount: '10% ASUS Official Refurb',
        brand: 'ASUS',
        year: 2020,
        price: 54999,
        amazon: 55999,
        flipkart: 56500,
        official: 54999,
        offline: '56,000-58,000',
        type: 'refurbished',
        bestFor: ['gaming', 'coding', 'multitasking'],
        warranty: '6 Months'
    },
    {
        id: 28,
        model: 'Acer Predator Helios 300 PH315-53 (Refurb)',
        processor: 'Intel Core i7-10750H (2.6-5.0 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '1TB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Excellent',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 2060)',
        discount: '12% Acer Recertified',
        brand: 'Acer',
        year: 2020,
        price: 65999,
        amazon: 67999,
        flipkart: 68500,
        official: 65999,
        offline: '67,000-69,000',
        type: 'refurbished',
        bestFor: ['gaming', 'development', 'design'],
        warranty: '1 Year'
    },
    {
        id: 29,
        model: 'MSI GF65 Thin 10UE (Refurb)',
        processor: 'Intel Core i5-10500H (2.5-4.5 GHz, 6C/12T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Excellent',
        gaming: '🎮 Excellent Gaming (RTX 3060)',
        discount: '10% MSI Official Outlet',
        brand: 'MSI',
        year: 2021,
        price: 68999,
        amazon: 69999,
        flipkart: 70500,
        official: 68999,
        offline: '70,000-72,000',
        type: 'refurbished',
        bestFor: ['gaming', 'development', 'multimedia'],
        warranty: '1 Year'
    },
    {
        id: 30,
        model: 'Lenovo IdeaPad Gaming 3 15ARH05 (Refurb)',
        processor: 'AMD Ryzen 5 4600H (3.0-4.0 GHz, 6C/12T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '✅ Good',
        videoEditing: '✅ Good',
        gaming: '🎮 Very Good Gaming (GTX 1650)',
        discount: '15% Lenovo Outlet',
        brand: 'Lenovo',
        year: 2020,
        price: 42999,
        amazon: 43999,
        flipkart: 44500,
        official: 42999,
        offline: '44,000-46,000',
        type: 'refurbished',
        bestFor: ['gaming', 'coding', 'general'],
        warranty: '6 Months'
    }
];


// DOM Elements
let newLaptopsBody, refurbishedLaptopsBody;
let newSearchInput, refurbishedSearchInput, applyFiltersBtn;
let filteredNewLaptops = [];
let filteredRefurbishedLaptops = [];

// Initialize the page
function init() {
    try {
        console.log('Initializing application...');
        
        // Get DOM elements
        newLaptopsBody = document.getElementById('new-laptops-body');
        refurbishedLaptopsBody = document.getElementById('refurbished-laptops-body');
        
        if (!newLaptopsBody || !refurbishedLaptopsBody) {
            console.warn('Some DOM elements not found. The page might not render correctly.');
        }
        
        // Set initial filtered lists
        filteredNewLaptops = laptopsData.filter(laptop => laptop.type === 'new');
        filteredRefurbishedLaptops = laptopsData.filter(laptop => laptop.type === 'refurbished');
        
        console.log(`Loaded ${filteredNewLaptops.length} new laptops and ${filteredRefurbishedLaptops.length} refurbished laptops`);
        
        // Set up event listeners first to ensure they're ready
        setupEventListeners();
        
        // Apply any initial filters from URL parameters
        applyAllFilters();
        
        // Set up intersection observer for active nav highlighting
        setupIntersectionObserver();
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
        // Display error to user
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = 'An error occurred while loading the page. Please refresh and try again.';
        document.body.prepend(errorElement);
    }
}

// Helper function to get performance status class
function getStatusClass(rating) {
    if (!rating) return '';
    if (rating.includes('✅')) return 'excellent';
    if (rating.includes('⚠️')) return 'basic';
    if (rating.includes('❌')) return 'poor';
    return 'good';
}

// Helper function to get brand from model name
function getBrand(model) {
    if (!model) return '';
    const brand = model.split(' ')[0];
    return brand.replace(/[^a-zA-Z]/g, ''); // Remove any non-alphabetic characters
}

// Render laptops to the DOM
function renderLaptops() {
    // Clear existing content
    newLaptopsBody.innerHTML = '';
    refurbishedLaptopsBody.innerHTML = '';
    
    // Render new laptops
    if (filteredNewLaptops.length === 0) {
        newLaptopsBody.innerHTML = `
            <tr>
                <td colspan="12" class="no-results">No new laptops found matching your criteria.</td>
            </tr>`;
    } else {
        filteredNewLaptops.forEach(laptop => {
            const brand = laptop.brand || getBrand(laptop.model);
            const processorName = laptop.processor.split('(')[0].trim();
            const storageInfo = laptop.storage + (laptop.expandable ? ` (${laptop.expandable})` : '');
            
            const row = document.createElement('tr');
            row.dataset.id = laptop.id;
            row.innerHTML = `
                <td class="brand-cell">
                    <div class="brand-logo brand-${brand.toLowerCase()}" title="${brand}"></div>
                </td>
                <td class="model-cell">${laptop.model}</td>
                <td title="${laptop.processor}">${processorName}</td>
                <td>${laptop.ram}</td>
                <td>${storageInfo}</td>
                <td class="status-cell status-${getStatusClass(laptop.webDev)}" title="Web Development">
                    ${laptop.webDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.appDev)}" title="App Development">
                    ${laptop.appDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.aiDev)}" title="AI/ML Development">
                    ${laptop.aiDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.videoEditing)}" title="Video Editing">
                    ${laptop.videoEditing.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="gaming-cell" title="${laptop.gaming}">
                    ${laptop.gaming.replace(/[🎮🕹️]/g, '').trim() || 'N/A'}
                </td>
                <td class="price-cell">₹${laptop.price.toLocaleString('en-IN')}</td>
                <td class="actions">
                    <button class="btn btn-sm view-details" data-id="${laptop.id}" title="View Details">
                        <i class="fas fa-eye"></i> Details
                    </button>
                </td>
            `;
            newLaptopsBody.appendChild(row);
        });
    }
    
    // Render refurbished laptops
    if (filteredRefurbishedLaptops.length === 0) {
        refurbishedLaptopsBody.innerHTML = `
            <tr>
                <td colspan="13" class="no-results">No refurbished laptops found matching your criteria.</td>
            </tr>`;
    } else {
        filteredRefurbishedLaptops.forEach(laptop => {
            const brand = laptop.brand || getBrand(laptop.model);
            const processorName = laptop.processor.split('(')[0].trim();
            const storageInfo = laptop.storage + (laptop.expandable ? ` (${laptop.expandable})` : '');
            
            const row = document.createElement('tr');
            row.dataset.id = laptop.id;
            row.innerHTML = `
                <td class="brand-cell">
                    <div class="brand-logo brand-${brand.toLowerCase()}" title="${brand}"></div>
                </td>
                <td class="model-cell">${laptop.model}</td>
                <td title="${laptop.processor}">${processorName}</td>
                <td>${laptop.ram}</td>
                <td>${storageInfo}</td>
                <td class="status-cell status-${getStatusClass(laptop.webDev)}" title="Web Development">
                    ${laptop.webDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.appDev)}" title="App Development">
                    ${laptop.appDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.aiDev)}" title="AI/ML Development">
                    ${laptop.aiDev.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="status-cell status-${getStatusClass(laptop.videoEditing)}" title="Video Editing">
                    ${laptop.videoEditing.replace(/[✅⚠️❌]/g, '').trim() || 'N/A'}
                </td>
                <td class="gaming-cell" title="${laptop.gaming}">
                    ${laptop.gaming.replace(/[🎮🕹️]/g, '').trim() || 'N/A'}
                </td>
                <td class="price-cell">₹${laptop.price.toLocaleString('en-IN')}</td>
                <td>${laptop.warranty || 'N/A'}</td>
                <td class="actions">
                    <button class="btn btn-sm view-details" data-id="${laptop.id}" title="View Details">
                        <i class="fas fa-eye"></i> Details
                    </button>
                </td>
            `;
            refurbishedLaptopsBody.appendChild(row);
        });
    }
    
    // Set up event listeners for details buttons
    setupLaptopDetailsButtons();
}


// Filter laptops based on selected filters (legacy function, now using applyAllFilters)
function filterLaptops() {
    applyAllFilters();
}

// Setup event listeners
function setupEventListeners() {
    // Filter button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', filterLaptops);
    }
    
    // Search functionality
    if (newSearchInput) {
        newSearchInput.addEventListener('input', () => applyAllFilters());
        const newSearchBtn = document.getElementById('new-search-btn');
        if (newSearchBtn) {
            newSearchBtn.addEventListener('click', () => applyAllFilters());
        }
    }
    
    if (refurbishedSearchInput) {
        refurbishedSearchInput.addEventListener('input', () => applyAllFilters());
        const refurbishedSearchBtn = document.getElementById('refurbished-search-btn');
        if (refurbishedSearchBtn) {
            refurbishedSearchBtn.addEventListener('click', () => applyAllFilters());
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, '', targetId);
            }
        });
    });
    
    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Set up intersection observer for active nav highlighting
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-80px 0px -70% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

/**
 * Apply all filters and search criteria to the laptops data
 */
function applyAllFilters() {
    // Get filter values
    const category = document.getElementById('category')?.value || 'all';
    const maxPrice = parseInt(document.getElementById('price-range')?.value) || 100000;
    const usage = document.getElementById('usage')?.value || 'all';
    const newSearchTerm = (document.getElementById('new-search')?.value || '').toLowerCase().trim();
    const refurbishedSearchTerm = (document.getElementById('refurbished-search')?.value || '').toLowerCase().trim();
    
    // Filter new laptops
    filteredNewLaptops = laptopsData.filter(laptop => {
        // Filter by type first (new/refurbished)
        if (laptop.type !== 'new') return false;
        
        // Apply category filter
        if (category !== 'all' && laptop.type !== category) return false;
        
        // Apply price filter
        if (laptop.price > maxPrice) return false;
        
        // Apply usage filter
        if (usage !== 'all' && !laptop.bestFor?.includes(usage)) return false;
        
        // Apply search term if present
        if (newSearchTerm) {
            const searchMatch = (
                laptop.model?.toLowerCase().includes(newSearchTerm) ||
                laptop.processor?.toLowerCase().includes(newSearchTerm) ||
                laptop.ram?.toLowerCase().includes(newSearchTerm) ||
                laptop.gaming?.toLowerCase().includes(newSearchTerm) ||
                laptop.price?.toString().includes(newSearchTerm) ||
                (laptop.brand?.toLowerCase().includes(newSearchTerm))
            );
            if (!searchMatch) return false;
        }
        
        return true;
    });
    
    // Filter refurbished laptops
    filteredRefurbishedLaptops = laptopsData.filter(laptop => {
        // Filter by type first (new/refurbished)
        if (laptop.type !== 'refurbished') return false;
        
        // Apply category filter
        if (category !== 'all' && laptop.type !== category) return false;
        
        // Apply price filter
        if (laptop.price > maxPrice) return false;
        
        // Apply usage filter
        if (usage !== 'all' && !laptop.bestFor?.includes(usage)) return false;
        
        // Apply search term if present
        if (refurbishedSearchTerm) {
            const searchMatch = (
                laptop.model?.toLowerCase().includes(refurbishedSearchTerm) ||
                laptop.processor?.toLowerCase().includes(refurbishedSearchTerm) ||
                laptop.ram?.toLowerCase().includes(refurbishedSearchTerm) ||
                laptop.gaming?.toLowerCase().includes(refurbishedSearchTerm) ||
                laptop.price?.toString().includes(refurbishedSearchTerm) ||
                (laptop.brand?.toLowerCase().includes(refurbishedSearchTerm))
            );
            if (!searchMatch) return false;
        }
        
        return true;
    });
    
    // Update the UI
    renderLaptops();
}

// Filter laptops by search query (kept for backward compatibility)
function filterLaptopsBySearch(query, type) {
    if (type === 'new') {
        document.getElementById('new-search').value = query;
    } else if (type === 'refurbished') {
        document.getElementById('refurbished-search').value = query;
    }
    applyAllFilters();
}

// Setup laptop details buttons with event delegation
function setupLaptopDetailsButtons() {
    // Use event delegation for better performance with dynamic content
    document.addEventListener('click', (e) => {
        // Check if the clicked element is a details button or inside one
        const button = e.target.closest('.view-details');
        if (!button) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        // Get laptop ID from data attribute
        const laptopId = button.dataset.id;
        if (!laptopId) return;
        
        // Find the laptop in both new and refurbished lists
        const laptop = [...filteredNewLaptops, ...filteredRefurbishedLaptops].find(l => 
            String(l.id) === String(laptopId)
        );
        
        if (laptop) {
            showLaptopDetails(laptop);
        } else {
            console.error('Laptop not found with ID:', laptopId);
        }
    });
    
    // Also handle the close button in the modal
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            const modal = document.getElementById('laptop-modal');
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        });
    }
}

// Show laptop details in modal with animations
function showLaptopDetails(laptop) {
    const modal = document.getElementById('laptop-modal');
    
    // Format price with currency symbol
    const formatPrice = (price) => {
        if (!price) return 'N/A';
        if (typeof price === 'string') return price; // Return as is if it's already formatted
        return `₹${price.toLocaleString('en-IN')}`;
    };

    // Format performance rating
    const getPerformanceClass = (rating) => {
        if (!rating) return '';
        if (rating.includes('✅')) return 'excellent';
        if (rating.includes('⚠️')) return 'basic';
        if (rating.includes('❌')) return 'poor';
        return 'good';
    };

    // Set laptop name and brand
    document.getElementById('modal-laptop-name').textContent = laptop.model;
    document.getElementById('modal-laptop-brand').textContent = laptop.brand || 'Laptop';

    // Set specifications
    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = `
        <li><span class="spec-label">Processor</span> <span class="spec-value">${laptop.processor.split('(')[0].trim()}</span></li>
        <li><span class="spec-label">RAM</span> <span class="spec-value">${laptop.ram}</span></li>
        <li><span class="spec-label">Storage</span> <span class="spec-value">${laptop.storage} ${laptop.expandable ? `(${laptop.expandable})` : ''}</span></li>
        <li><span class="spec-label">Graphics</span> <span class="spec-value">${laptop.graphics || 'Integrated'}</span></li>
        <li><span class="spec-label">Type</span> <span class="spec-value">${laptop.type === 'new' ? 'New' : 'Refurbished'}</span></li>
    `;

    // Set performance ratings
    document.getElementById('web-dev').textContent = laptop.webDev.replace(/[✅⚠️❌]/g, '').trim();
    document.getElementById('web-dev').className = `performance-value status-${getPerformanceClass(laptop.webDev)}`;
    
    document.getElementById('app-dev').textContent = laptop.appDev.replace(/[✅⚠️❌]/g, '').trim();
    document.getElementById('app-dev').className = `performance-value status-${getPerformanceClass(laptop.appDev)}`;
    
    document.getElementById('ai-dev').textContent = laptop.aiDev.replace(/[✅⚠️❌]/g, '').trim();
    document.getElementById('ai-dev').className = `performance-value status-${getPerformanceClass(laptop.aiDev)}`;
    
    document.getElementById('video-edit').textContent = laptop.videoEditing.replace(/[✅⚠️❌]/g, '').trim();
    document.getElementById('video-edit').className = `performance-value status-${getPerformanceClass(laptop.videoEditing)}`;
    
    document.getElementById('gaming-perf').textContent = laptop.gaming.replace(/[🎮🕹️]/g, '').trim();
    document.getElementById('gaming-perf').className = `performance-value status-${laptop.gamingLevel || 'basic'}`;

    // Set pricing
    document.getElementById('best-price').textContent = formatPrice(laptop.price);
    document.getElementById('amazon-price').textContent = formatPrice(laptop.amazon);
    document.getElementById('flipkart-price').textContent = formatPrice(laptop.flipkart);
    document.getElementById('official-price').textContent = formatPrice(laptop.official);
    document.getElementById('offline-price').textContent = formatPrice(laptop.offline);

    // Set additional info
    const additionalInfo = document.getElementById('additional-info');
    additionalInfo.innerHTML = '';
    
    if (laptop.warranty) {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-shield-alt"></i> Warranty: ${laptop.warranty}`;
        additionalInfo.appendChild(li);
    }
    
    if (laptop.launchYear) {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-calendar-alt"></i> Launch Year: ${laptop.launchYear}`;
        additionalInfo.appendChild(li);
    }
    
    if (laptop.discount) {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-tag"></i> Discount: ${laptop.discount}`;
        additionalInfo.appendChild(li);
    }

    // Set up view online button
    const viewOnlineBtn = document.getElementById('view-online');
    if (laptop.amazon || laptop.flipkart) {
        viewOnlineBtn.onclick = () => {
            window.open(laptop.amazon || laptop.flipkart, '_blank');
        };
        viewOnlineBtn.disabled = false;
    } else {
        viewOnlineBtn.disabled = true;
    }

    // Show modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);

    // Close modal handlers
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    const handleEscapeKey = (e) => e.key === 'Escape' && closeModal();

    // Set up event listeners
    modal.querySelector('.close-btn').onclick = closeModal;
    document.addEventListener('keydown', handleEscapeKey);
    modal.onclick = (e) => e.target === modal && closeModal();
}

// Add CSS for modal
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    /* Modal Styles */
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow-y: auto;
    }
        
    .modal.active {
        opacity: 1;
    }
        
    .modal-content {
        background: white;
        margin: 2rem auto;
        max-width: 800px;
        width: 90%;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        position: relative;
        padding: 2rem;
        transform: translateY(-20px);
        transition: transform 0.3s ease;
    }
        
    .modal.active .modal-content {
        transform: translateY(0);
    }
        
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e5e7eb;
    }
        
    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #1f2937;
    }
        
    .modal-body {
        max-height: 70vh;
        overflow-y: auto;
        position: relative;
    }
        
    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-size: 2rem;
        cursor: pointer;
        line-height: 1;
    }
        
    .laptop-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }
        
    .detail-group h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--border-color);
    }
        
    .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
        
    .btn-outline {
        background: none;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
    }
        
    .btn-sm {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
        
    .no-results {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: var(--shadow);
    }
`;

document.head.appendChild(modalStyles);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing application...');
    init();
});
