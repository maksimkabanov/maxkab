export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
};

export const getApiUrl = (path: string) => {
  return `${API_CONFIG.baseUrl}${path}`;
};
