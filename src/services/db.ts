import { DB_KEYS } from "../interfaces"

export const getItems = (key: string) => {
    const items = localStorage.getItem(key)

    if (!items) return []

    return JSON.parse(items)
};

export const setItem = (key: `${DB_KEYS}`, value: string) => {
    localStorage.setItem(key, value)
}

export const deleteItem = (key: string) => {
    localStorage.removeItem(key)
}