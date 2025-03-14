var TimeLimitedCache = function() {
    this.cache = new Map(); // Stores { key: { value, expiresAt } }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now(); // Get the current time
    const expiresAt = now + duration; // Set expiration time

    // Check if the key exists and has not expired
    const alreadyExists = this.cache.has(key) && this.cache.get(key).expiresAt > now;

    // Store the new value and expiration time
    this.cache.set(key, { value, expiresAt });

    return alreadyExists; // Return true if key was already in cache and still valid
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now(); // Get the current time

    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expiresAt > now) {
            return entry.value; // Key is valid, return the value
        } else {
            this.cache.delete(key); // Key has expired, remove it
        }
    }

    return -1; // Key doesn't exist or expired
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now(); // Get the current time
    let count = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expiresAt > now) {
            count++; // Count only valid keys
        } else {
            this.cache.delete(key); // Cleanup expired keys
        }
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * console.log(timeLimitedCache.set(1, 42, 1000)); // false
 * console.log(timeLimitedCache.get(1)); // 42
 * console.log(timeLimitedCache.count()); // 1
 */
