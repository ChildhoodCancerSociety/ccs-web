/**
 * Async sleep function
 * NOTE: *DONT USE THIS*
 *
 * @param {number} ms number of ms to put thread to sleep
 * @returns {void}
 */
export const sleep = async (ms: number): Promise<void> => new Promise((res) => {
  setTimeout(res, ms);
});

export const d = 2;
