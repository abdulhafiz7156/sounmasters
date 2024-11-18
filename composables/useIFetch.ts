import type { UseFetchOptions } from "#app";
import { defu } from "defu";
import { useAuthStore } from '~/store/auth'

export async function useIFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const auth = useAuthStore();

  const defaults: UseFetchOptions<T> = {
    //baseURL: "http://127.0.0.1:8000/",
    key: url,
    headers: auth.token
      ? { Authorization: `Bearer ${auth.token}` }
      : {},
    /*    onResponse: async ({ response, options }) => {
          if (response.status === 401) {
            try {
              const newToken = await refreshToken();
              auth = newToken;

              options.headers = { Authorization: `Bearer ${newToken}` };
              useFetch(url, options as UseFetchOptions<T>);
            } catch (error) {
              console.error("Token refresh failed:", error);
            }
          }
        },*/
  };

  const params = defu(options, defaults);

  return $fetch(url, params);
}

async function refreshToken() {
  const refreshToken = useCookie("refreshToken");

  const { data, status } = await useFetch<{ access: string }>(
    "http://127.0.0.1:8000/api/token/refresh/",
    {
      method: "POST",
      body: { refresh: refreshToken.value },
    }
  );

  if (status.value === "success") {
    return data.value?.access;
  } else {
    throw new Error("Token refresh failed");
  }
}
