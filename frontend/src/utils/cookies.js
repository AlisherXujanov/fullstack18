// Cookie management utilities

/**
 * Sets a session cookie with the user's UID
 * @param {string} uid - User's unique identifier
 */
export const setSessionCookie = (uid) => {
    document.cookie = `session=${uid}; path=/; max-age=2592000; secure; samesite=strict`
}

/**
 * Removes the session cookie
 */
export const removeSessionCookie = () => {
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict'
}

/**
 * Gets the session cookie value
 * @returns {string|null} The session cookie value or null if not found
 */
export const getSessionCookie = () => {
    const cookies = document.cookie.split(';')
    const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('session='))
    return sessionCookie ? sessionCookie.split('=')[1] : null
} 