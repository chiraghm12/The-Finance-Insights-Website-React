import axios from "axios";

/**
 * Pre-configured Axios instance — backend integration ready.
 * Point VITE_API_BASE_URL at a real API when one exists; until then the
 * app reads from local dummy data in src/data.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" }
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Centralised error handling hook for future backend integration.
    return Promise.reject(error);
  }
);












/** Stubbed endpoints — swap the resolved promise for `api.post(...)` later. */
export const subscribeNewsletter = async (payload) => {
  await new Promise((r) => setTimeout(r, 700));
  return { success: true, ...payload };
};

export const sendContactMessage = async (payload) => {
  await new Promise((r) => setTimeout(r, 800));
  return { success: true, ...payload };
};