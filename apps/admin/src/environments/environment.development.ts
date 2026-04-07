import { AppConfig } from '@org/core';

export const environment : AppConfig = {
    
    apiUrl: 'http://localhost:8000/api',
    baseUrl: 'http://localhost:8000',
  
    featureFlags: {
        enableNewDashboard: true,
        enableBetaFeatures: false
    },
    version: 'dev'
};
