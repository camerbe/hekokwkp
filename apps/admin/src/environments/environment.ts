import { AppConfig } from "@org/core";

export const environment : AppConfig = {
    
    apiUrl: 'https://www.hekok.org/api',
    baseUrl: 'https://www.hekok.org',
    featureFlags: {
        enableNewDashboard: true,
        enableBetaFeatures: false
    },
    version: '1.0.0'
};
