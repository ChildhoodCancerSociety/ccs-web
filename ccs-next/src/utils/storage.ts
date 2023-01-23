const ROOT_STORAGE_KEY = "ccs_vault";

const localStorageSupported = (function localStorageSupported() {
  try {
    const backup = localStorage.getItem("");
    localStorage.removeItem("");
    if (backup) localStorage.setItem("", backup);
    return true;
  } catch (e) {
    return false;
  }
}());

const storage = {
  set: (key: string, obj: any) => localStorage.setItem(key, JSON.stringify(obj)),
  setString: (key: string, str: string) => localStorage.setItem(key, str),
  getString: (key: string) => localStorage.getItem(key),
  get: (key: string, eraseIfError?: boolean) => {
    try {
      const item = localStorage.getItem(key);
      if (item) return JSON.parse(item);
    } catch (e) {
      if (eraseIfError) {
        localStorage.removeItem(key);
      }
      console.error(e);
    }
    return null;
  },
  remove: (key: string) => localStorage.removeItem(key),
  clear: localStorage.clear,
};

export { localStorageSupported, ROOT_STORAGE_KEY };
export default storage;
