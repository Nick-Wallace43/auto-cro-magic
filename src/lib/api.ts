import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface PageAnalysisResult {
  performanceScore: number;
  coreWebVitals: {
    fcp: number;
    fcpScore: number;
    lcp: number;
    lcpScore: number;
    tti: number;
    ttiScore: number;
  };
  recommendations: Array<{
    title: string;
    description: string;
    priority: string;
  }>;
}

export async function analyzePage(url: string): Promise<PageAnalysisResult> {
  const response = await api.post<PageAnalysisResult>('/pagespeed/analyze', { url });
  return response.data;
}

export const getRecommendations = async (pageSpeedData: any, url: string) => {
  const response = await api.post('/chat/recommendations', { pageSpeedData, url });
  return response.data;
};

export default api; 