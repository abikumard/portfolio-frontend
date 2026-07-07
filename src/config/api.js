// Central place for the backend base URL.
// Uses an env variable if you set one (VITE_API_BASE_URL), otherwise
// falls back to the live Railway backend URL.
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://portfolio-backend-production-7f06.up.railway.app";
