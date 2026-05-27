export async function getStoredValue(key) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (window.storage?.get) {
    const result = await window.storage.get(key, true);
    return result?.value ?? null;
  }

  return window.localStorage.getItem(key);
}

export async function setStoredValue(key, value) {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.storage?.set) {
    await window.storage.set(key, value, true);
    return;
  }

  window.localStorage.setItem(key, value);
}
