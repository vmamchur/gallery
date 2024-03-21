const AUTH_STORAGE_KEY = "authData";

export function getAuthData() {
  return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "{}");
}

export function saveAuthData(accessToken: string, refreshToken: string) {
  return localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({ accessToken, refreshToken }),
  );
}

export function clearAuthData() {
  return localStorage.removeItem(AUTH_STORAGE_KEY);
}
