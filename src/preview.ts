// @ts-nocheck

// import "../node_modules/xtyle/dist/index.min.js";

import * as Plugin from "./index.ts";
import LiveDemo from "./Live.tsx";
// import "./views/__init__.ts";

/**
 * @Register <Plugin>
 */
xtyle.use(Plugin);
xtyle.use(xtylist);

/**
 * @Router
 */
const router = {
    history: false,
    baseURL: null,
};

/**
 * @Render
 */
xtyle.init(LiveDemo, document.body, router);

/**
 * @Preview
 */

/* Actions */
console.log("Actions: ", xtyle.action.keys());

/* Directives */
console.log("Directives: ", Object.keys(xtyle.allDirectives));

/* Globals */
console.log("Globals: ", xtyle.global);

/* Models */
console.log("Models: ", xtyle.models.keys());

/* Routes */
console.log("Routes: ", xtyle.router.keys());

/* Store */
console.log("Store: ", xtyle.store);
