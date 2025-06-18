// Complete Laptops Data
const laptopsData = [
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
        model: 'ASUS VivoBook 15 X515EA',
        processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        expandable: 'RAM+SSD',
        webDev: '✅ Excellent',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '8% ASUS Education',
        brand: 'ASUS',
        year: 2023,
        price: 42990,
        amazon: 43990,
        flipkart: 44500,
        official: 42990,
        offline: '44,000-46,000',
        type: 'new',
        bestFor: ['coding', 'general']
    },
    {
        id: 4,
        model: 'Acer Aspire 5 A515-56',
        processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        expandable: 'RAM+SSD',
        webDev: '✅ Excellent',
        appDev: '✅ Excellent',
        aiDev: '⚠️ Moderate',
        videoEditing: '✅ Good',
        gaming: '🎮 Light Gaming (Iris Xe)',
        discount: '7% Acer Education',
        brand: 'Acer',
        year: 2023,
        price: 44990,
        amazon: 45990,
        flipkart: 46500,
        official: 44990,
        offline: '46,000-48,000',
        type: 'new',
        bestFor: ['coding', 'multitasking']
    },
    {
        id: 5,
        model: 'Dell Inspiron 3511',
        processor: 'Intel Core i5-1135G7 (2.4-4.2 GHz, 4C/8T)',
        ram: '8GB DDR4',
        storage: '1TB HDD + 256GB SSD',
        expandable: 'Both',
        webDev: '✅ Excellent',
        appDev: '✅ Good',
        aiDev: '⚠️ Basic',
        videoEditing: '⚠️ Basic',
        gaming: '⚠️ Very Limited',
        discount: '10% Dell University',
        brand: 'Dell',
        year: 2023,
        price: 46990,
        amazon: 47990,
        flipkart: 48500,
        official: 46990,
        offline: '48,000-50,000',
        type: 'new',
        bestFor: ['general', 'office']
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

// Gaming Performance Data
const gamingPerformance = [
    {
        category: 'No Gaming',
        level: 'Cannot run modern games',
        processor: 'Below i3-10th Gen',
        ram: '4GB',
        graphics: 'Intel UHD 600',
        games: 'Basic 2D games only',
        settings: 'N/A',
        fps: 'N/A'
    },
    {
        category: 'Very Limited',
        level: 'Ancient games only',
        processor: 'i3-10th Gen',
        ram: '4-8GB',
        graphics: 'Intel UHD 620',
        games: 'Solitaire, Minesweeper',
        settings: 'Low',
        fps: '30+ FPS'
    },
    {
        category: 'Light Gaming',
        level: 'Casual & older games',
        processor: 'i3-11th Gen / Ryzen 3 5000',
        ram: '8GB',
        graphics: 'Intel Iris Xe / Vega 7',
        games: 'Minecraft, CS:GO, Rocket League',
        settings: 'Low-Medium',
        fps: '30-45 FPS'
    },
    {
        category: 'Medium Gaming',
        level: 'Indie & competitive games',
        processor: 'i5-11th Gen / Ryzen 5 5000',
        ram: '8GB',
        graphics: 'GTX 1650 / RTX 2050',
        games: 'Valorant, Fortnite, Apex Legends',
        settings: 'Medium',
        fps: '45-60 FPS'
    },
    {
        category: 'Good Gaming',
        level: 'Modern games',
        processor: 'i5-12th Gen / Ryzen 5 6000',
        ram: '8-16GB',
        graphics: 'GTX 1650Ti / RTX 2050',
        games: 'Call of Duty, GTA V, Cyberpunk 2077',
        settings: 'Medium-High',
        fps: '60+ FPS'
    },
    {
        category: 'Excellent Gaming',
        level: 'All games high settings',
        processor: 'i7 / Ryzen 7',
        ram: '16GB',
        graphics: 'RTX 3060+ / RX 6600M+',
        games: 'All AAA titles',
        settings: 'High-Ultra',
        fps: '60-120+ FPS'
    }
];

// Student Discounts Data
const studentDiscounts = [
    {
        brand: 'HP',
        portal: 'HP Education Store',
        discount: '5-12%',
        verification: 'Student ID + Email',
        benefits: 'Extended warranty, free shipping',
        link: 'education.hp.com'
    },
    {
        brand: 'Dell',
        portal: 'Dell Education',
        discount: '8-15%',
        verification: 'Educational email',
        benefits: 'Priority support, bulk discounts',
        link: 'dell.com/learn/student'
    },
    {
        brand: 'Lenovo',
        portal: 'Lenovo Student',
        discount: '5-12%',
        verification: 'Student verification',
        benefits: 'Gaming laptop discounts',
        link: 'lenovo.com/students'
    },
    {
        brand: 'ASUS',
        portal: 'ASUS Education',
        discount: '3-8%',
        verification: 'Student ID required',
        benefits: 'ROG gaming series included',
        link: 'asus.com/in/education'
    },
    {
        brand: 'Acer',
        portal: 'Acer Education',
        discount: '5-10%',
        verification: 'University email',
        benefits: 'Predator gaming discounts',
        link: 'acer.com/education'
    },
    {
        brand: 'MSI',
        portal: 'MSI Student Program',
        discount: '5-7%',
        verification: 'Student verification',
        benefits: 'Gaming laptop focus',
        link: 'msi.com/student'
    }
];

// DOM Elements
const newLaptopsBody = document.getElementById('new-laptops-body');
const refurbishedLaptopsBody = document.getElementById('refurbished-laptops-body');
const gamingTableBody = document.querySelector('.gaming-table tbody');
const discountCardsContainer = document.querySelector('.discount-cards');
const applyFiltersBtn = document.getElementById('apply-filters');
const newSearchInput = document.getElementById('new-search');
const refurbishedSearchInput = document.getElementById('refurbished-search');

// Filtered data
let filteredNewLaptops = [];
let filteredRefurbishedLaptops = [];

// Initialize the page
function init() {
    // Filter laptops
    filteredNewLaptops = laptopsData.filter(laptop => laptop.type === 'new');
    filteredRefurbishedLaptops = laptopsData.filter(laptop => laptop.type === 'refurbished');
    
    // Render tables
    renderLaptops();
    renderGamingPerformance();
    renderStudentDiscounts();
    setupEventListeners();
    
    // Set up intersection observer for active nav highlighting
    setupIntersectionObserver();
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
                <td colspan="11" class="no-results">No new laptops found matching your criteria.</td>
            </tr>`;
    } else {
        filteredNewLaptops.forEach(laptop => {
            const row = document.createElement('tr');
            row.dataset.id = laptop.id;
            row.innerHTML = `
                <td>${laptop.model}</td>
                <td>${laptop.processor.split('(')[0].trim()}</td>
                <td>${laptop.ram}</td>
                <td>${laptop.storage} ${laptop.expandable ? `(${laptop.expandable})` : ''}</td>
                <td class="status-${laptop.webDev.includes('✅') ? 'excellent' : 'good'}">${laptop.webDev}</td>
                <td class="status-${laptop.appDev.includes('✅') ? 'excellent' : 'good'}">${laptop.appDev}</td>
                <td class="status-${laptop.aiDev.includes('✅') ? 'excellent' : laptop.aiDev.includes('⚠️') ? 'basic' : 'poor'}">${laptop.aiDev}</td>
                <td class="status-${laptop.videoEditing.includes('✅') ? 'excellent' : 'good'}">${laptop.videoEditing}</td>
                <td>${laptop.gaming}</td>
                <td>₹${laptop.price.toLocaleString('en-IN')}</td>
                <td>
                    <button class="btn btn-sm view-details" data-id="${laptop.id}">Details</button>
                </td>
            `;
            newLaptopsBody.appendChild(row);
        });
    }
    
    // Render refurbished laptops
    if (filteredRefurbishedLaptops.length === 0) {
        refurbishedLaptopsBody.innerHTML = `
            <tr>
                <td colspan="12" class="no-results">No refurbished laptops found matching your criteria.</td>
            </tr>`;
    } else {
        filteredRefurbishedLaptops.forEach(laptop => {
            const row = document.createElement('tr');
            row.dataset.id = laptop.id;
            row.innerHTML = `
                <td>${laptop.model}</td>
                <td>${laptop.processor.split('(')[0].trim()}</td>
                <td>${laptop.ram}</td>
                <td>${laptop.storage} ${laptop.expandable ? `(${laptop.expandable})` : ''}</td>
                <td class="status-${laptop.webDev.includes('✅') ? 'excellent' : 'good'}">${laptop.webDev}</td>
                <td class="status-${laptop.appDev.includes('✅') ? 'excellent' : 'good'}">${laptop.appDev}</td>
                <td class="status-${laptop.aiDev.includes('✅') ? 'excellent' : laptop.aiDev.includes('⚠️') ? 'basic' : 'poor'}">${laptop.aiDev}</td>
                <td class="status-${laptop.videoEditing.includes('✅') ? 'excellent' : 'good'}">${laptop.videoEditing}</td>
                <td>${laptop.gaming}</td>
                <td>₹${laptop.price.toLocaleString('en-IN')}</td>
                <td>${laptop.warranty || 'N/A'}</td>
                <td>
                    <button class="btn btn-sm view-details" data-id="${laptop.id}">Details</button>
                </td>
            `;
            refurbishedLaptopsBody.appendChild(row);
        });
    }
    
    // Set up event listeners for details buttons
    setupLaptopDetailsButtons();
}

// Render gaming performance table
function renderGamingPerformance() {
    if (!gamingTableBody) return;

    const rows = gamingPerformance.map(item => `
        <tr>
            <td>${item.category}</td>
            <td>${item.level}</td>
            <td>${item.processor}</td>
            <td>${item.ram}</td>
            <td>${item.graphics}</td>
            <td>${item.games}</td>
            <td>${item.settings}</td>
            <td>${item.fps}</td>
        </tr>
    `).join('');

    gamingTableBody.innerHTML = rows;
}

// Render student discount cards
function renderStudentDiscounts() {
    if (!discountCardsContainer) return;

    const cards = studentDiscounts.map(discount => `
        <div class="discount-card">
            <h3>${discount.brand} - ${discount.discount} off</h3>
            <p><strong>Portal:</strong> ${discount.portal}</p>
            <p><strong>Verification:</strong> ${discount.verification}</p>
            <p><strong>Benefits:</strong> ${discount.benefits}</p>
            <p><a href="https://${discount.link}" target="_blank" class="btn btn-sm">Visit Portal</a></p>
        </div>
    `).join('');

    discountCardsContainer.innerHTML = cards;
}

// Filter laptops based on selected filters
function filterLaptops() {
    const category = document.getElementById('category').value;
    const maxPrice = parseInt(document.getElementById('price-range').value);
    const usage = document.getElementById('usage').value;

    let filtered = [...laptopsData];

    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(laptop => laptop.type === category);
    }

    // Filter by price
    filtered = filtered.filter(laptop => laptop.price <= maxPrice);

    // Filter by usage
    if (usage !== 'all') {
        filtered = filtered.filter(laptop => laptop.bestFor.includes(usage));
    }

    renderLaptops(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Filter button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', filterLaptops);
    }
    
    // Search functionality
    if (newSearchInput) {
        newSearchInput.addEventListener('input', (e) => filterLaptopsBySearch(e.target.value, 'new'));
        document.getElementById('new-search-btn').addEventListener('click', () => filterLaptopsBySearch(newSearchInput.value, 'new'));
    }
    
    if (refurbishedSearchInput) {
        refurbishedSearchInput.addEventListener('input', (e) => filterLaptopsBySearch(e.target.value, 'refurbished'));
        document.getElementById('refurbished-search-btn').addEventListener('click', () => filterLaptopsBySearch(refurbishedSearchInput.value, 'refurbished'));
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

// Filter laptops by search query
function filterLaptopsBySearch(query, type) {
    const searchTerm = query.toLowerCase().trim();
    
    if (type === 'new') {
        filteredNewLaptops = laptopsData.filter(laptop => {
            if (laptop.type !== 'new') return false;
            if (!searchTerm) return true;
            
            return (
                laptop.model.toLowerCase().includes(searchTerm) ||
                laptop.processor.toLowerCase().includes(searchTerm) ||
                laptop.ram.toLowerCase().includes(searchTerm) ||
                laptop.gaming.toLowerCase().includes(searchTerm) ||
                laptop.price.toString().includes(searchTerm)
            );
        });
    } else if (type === 'refurbished') {
        filteredRefurbishedLaptops = laptopsData.filter(laptop => {
            if (laptop.type !== 'refurbished') return false;
            if (!searchTerm) return true;
            
            return (
                laptop.model.toLowerCase().includes(searchTerm) ||
                laptop.processor.toLowerCase().includes(searchTerm) ||
                laptop.ram.toLowerCase().includes(searchTerm) ||
                laptop.gaming.toLowerCase().includes(searchTerm) ||
                laptop.price.toString().includes(searchTerm)
            );
        });
    }
    
    renderLaptops();
}

// Setup laptop details buttons
function setupLaptopDetailsButtons() {
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const laptopId = e.target.dataset.id;
            const laptop = [...filteredNewLaptops, ...filteredRefurbishedLaptops].find(l => l.id === laptopId);
            if (laptop) {
                showLaptopDetails(laptop);
            }
        });
    });
}

// Show laptop details in modal with animations
function showLaptopDetails(laptop) {
    const modal = document.getElementById('laptop-details-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Format specifications into a more readable format
    const formatSpecs = (specs) => {
        if (!specs) return 'N/A';
        return specs.split('|').map(s => s.trim()).filter(s => s).join(' • ');
    };
    
    // Create modal content with enhanced layout
    modalContent.innerHTML = `
        <button class="close-btn" aria-label="Close">&times;</button>
        <h2>${laptop.model}</h2>
        <div class="price-highlight">₹${laptop.price.toLocaleString('en-IN')}${laptop.originalPrice ? 
            ` <small style="font-size: 1rem; color: var(--light-text); text-decoration: line-through;">₹${laptop.originalPrice.toLocaleString('en-IN')}</small>
              <span style="color: #e74c3c; font-size: 1rem; margin-left: 0.5rem;">${laptop.discount}% OFF</span>` : ''}
        </div>
        
        <div class="laptop-details">
            <div class="detail-group">
                <h3><i class="fas fa-microchip"></i> Specifications</h3>
                <p><strong>Processor:</strong> <span>${laptop.processor}</span></p>
                <p><strong>RAM:</strong> <span>${laptop.ram}</span></p>
                <p><strong>Storage:</strong> <span>${laptop.storage} ${laptop.expandable ? `(${laptop.expandable})` : ''}</span></p>
                <p><strong>Display:</strong> <span>${laptop.display || 'N/A'}</span></p>
                <p><strong>Graphics:</strong> <span>${laptop.graphics || 'Integrated'}</span></p>
                ${laptop.weight ? `<p><strong>Weight:</strong> <span>${laptop.weight}</span></p>` : ''}
                ${laptop.os ? `<p><strong>OS:</strong> <span>${laptop.os}</span></p>` : ''}
            </div>
            
            <div class="detail-group">
                <h3><i class="fas fa-chart-line"></i> Performance</h3>
                <p><strong>Web Development:</strong> <span class="status-${laptop.webDev.includes('✅') ? 'excellent' : 'good'}">${formatSpecs(laptop.webDev)}</span></p>
                <p><strong>App Development:</strong> <span class="status-${laptop.appDev.includes('✅') ? 'excellent' : 'good'}">${formatSpecs(laptop.appDev)}</span></p>
                <p><strong>AI/ML:</strong> <span class="status-${laptop.aiDev.includes('✅') ? 'excellent' : laptop.aiDev.includes('⚠️') ? 'basic' : 'poor'}">${formatSpecs(laptop.aiDev)}</span></p>
                <p><strong>Video Editing:</strong> <span class="status-${laptop.videoEditing.includes('✅') ? 'excellent' : 'good'}">${formatSpecs(laptop.videoEditing)}</span></p>
                <p><strong>Gaming:</strong> <span>${laptop.gaming}</span></p>
            </div>
            
            <div class="detail-group">
                <h3><i class="fas fa-info-circle"></i> Additional Info</h3>
                ${laptop.warranty ? `<p><strong>Warranty:</strong> <span>${laptop.warranty}</span></p>` : ''}
                <p><strong>Availability:</strong> <span>${laptop.availability || 'In Stock'}</span></p>
                ${laptop.battery ? `<p><strong>Battery:</strong> <span>${laptop.battery}</span></p>` : ''}
                ${laptop.ports ? `<p><strong>Ports:</strong> <span>${laptop.ports}</span></p>` : ''}
                ${laptop.additionalFeatures ? `<p><strong>Features:</strong> <span>${laptop.additionalFeatures}</span></p>` : ''}
                ${laptop.lastUpdated ? `<p><strong>Last Updated:</strong> <span>${laptop.lastUpdated}</span></p>` : ''}
            </div>
        </div>
        
        <div class="modal-actions">
            <a href="${laptop.buyLink || '#'}" target="_blank" class="btn btn-primary" style="flex: 1;">
                <i class="fas fa-shopping-cart"></i> Buy Now
            </a>
            <button class="btn btn-outline close-modal" style="flex: 0 0 auto;">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };
    
    const handleEscapeKey = (e) => {
        if (e.key === 'Escape') closeModal();
    };
    
    // Close modal handlers
    modal.querySelector('.close-btn').addEventListener('click', closeModal);
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close when clicking outside content
    modal.addEventListener('click', (e) => e.target === modal && closeModal());
    
    // Keyboard navigation
    document.addEventListener('keydown', handleEscapeKey);
    
    // Cleanup
    return () => {
        document.removeEventListener('keydown', handleEscapeKey);
    };
}

// Add CSS for modal
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 1rem;
        box-sizing: border-box;
    }
    
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
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
document.addEventListener('DOMContentLoaded', init);
