/**
 * storage 二次封装
 * @author xiaoLangTou
 */

import config from "./../config"

export default {
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace)) || {}
    },
    setStorage(storage) {
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    setItem(key, value) {
        let storage = this.getStorage()
        storage[key] = value
        this.setStorage(storage);
    },
    getItem(key) {
        let storage = this.getStorage();
        return storage[key] || undefined
    },
    clearItem(key) {
        let storage = this.getStorage();
        delete storage[key]
        this.setStorage(storage)
    },
    clear() {
        window.localStorage.removeItem(config.namespace)
    }
}