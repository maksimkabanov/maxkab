import { API_CONFIG, getApiUrl } from "./config";

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export async function fetchApi<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const { timeout = API_CONFIG.timeout, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const url = path.startsWith("http") ? path : getApiUrl(path);
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        ...API_CONFIG.headers,
        ...fetchOptions.headers,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timeout");
      }
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
