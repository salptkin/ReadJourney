/**
 * @typedef {Object} UserRegisterData
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} UserLoginData
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} AuthState
 * @property {User} user
 * @property {string|null} token
 * @property {boolean} isLoggedIn
 * @property {boolean} isRefreshing
 * @property {boolean} isLoading
 * @property {string|null|any} error
 */

/** @typedef {User & { token: string }} AuthResponse */

/** @typedef {{ message: string }} ApiError */

/** @typedef {{ message: string }} LogOutResponse */

export {};
