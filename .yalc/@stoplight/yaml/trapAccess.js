"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYS = Symbol('object_keys');
const traps = {
    ownKeys(target) {
        return exports.KEYS in target ? target[exports.KEYS] : Reflect.ownKeys(target);
    },
};
exports.trapAccess = (target) => new Proxy(target, traps);
//# sourceMappingURL=trapAccess.js.map