/// <reference types="./node_modules/xtyle/dist/index.d.ts" />
/// <reference types="./node_modules/xtylist/dist/index.d.ts" />

// Add `JSX.IntrinsicElements` Definition (For Custom JSX Frameworks)
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any; // Define intrinsic elements as needed
    }
}

// Frontend
declare const h: any;
declare const preact: any;
declare const packageName: any;

// Backend
declare const API: any;
