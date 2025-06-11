// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api';

export const API_ENDPOINTS = {
  ANALYSES: `${API_BASE_URL}/analyses`,
  ANALYSIS_BY_ID: (id: string) => `${API_BASE_URL}/analyses/${id}`,
  ANALYSES_BY_LOCATION: (location: string) => `${API_BASE_URL}/analyses/location/${location}`,
  ANALYSES_BY_FARM: (farmName: string) => `${API_BASE_URL}/analyses/farm/${farmName}`,
};

export default API_BASE_URL; 