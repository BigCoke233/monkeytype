'use client'

/**
 * 使用 Local Storage
 * 
 * @file lib/utils/useLocalStorage
 */

/**
 * 存入 Local Storage
 * 
 * @param {string} name 
 * @param {string} value 
 */

export function setStore(name, value) {
    if (typeof window !== undefined && window.localStorage) 
        localStorage.setItem(name, value);
}

/**
 * 取出 Local Storage
 * 
 * @param {string} name 
 * @returns 
 */

export function getStore(name) {
    let value;
    if (typeof window !== undefined && window.localStorage) 
        value = localStorage.getItem(name);
    return value
}