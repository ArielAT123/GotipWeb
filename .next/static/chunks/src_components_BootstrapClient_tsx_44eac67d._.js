(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_BootstrapClient_tsx_44eac67d._.js", {

"[project]/src/components/BootstrapClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BootstrapClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function BootstrapClient() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BootstrapClient.useEffect": ()=>{
            // Verificación de entorno cliente
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const initializeLibraries = {
                "BootstrapClient.useEffect.initializeLibraries": async ()=>{
                    try {
                        // Importación optimizada para React 19
                        const [{ default: bootstrap }, { default: GLightbox }, { default: Choices }] = await Promise.all([
                            __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.esm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
                            __turbopack_context__.r("[project]/node_modules/glightbox/dist/js/glightbox.min.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i),
                            __turbopack_context__.r("[project]/node_modules/choices.js/public/assets/scripts/choices.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i)
                        ]);
                        // Inicialización de Bootstrap - Fixed type assertion
                        const tooltipList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map({
                            "BootstrapClient.useEffect.initializeLibraries.tooltipList": (el)=>new bootstrap.Tooltip(el)
                        }["BootstrapClient.useEffect.initializeLibraries.tooltipList"]);
                        // Inicialización de GLightbox
                        GLightbox({
                            selector: '[data-gallery="image-popup"]',
                            touchNavigation: true,
                            loop: true
                        });
                        // Inicialización de Choices
                        document.querySelectorAll('.js-choice').forEach({
                            "BootstrapClient.useEffect.initializeLibraries": (select)=>{
                                new Choices(select, {
                                    removeItemButton: true,
                                    shouldSort: false
                                });
                            }
                        }["BootstrapClient.useEffect.initializeLibraries"]);
                    } catch (error) {
                        console.error('Error initializing libraries:', error);
                    }
                }
            }["BootstrapClient.useEffect.initializeLibraries"];
            initializeLibraries();
        }
    }["BootstrapClient.useEffect"], []);
    return null;
}
_s(BootstrapClient, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BootstrapClient;
var _c;
__turbopack_context__.k.register(_c, "BootstrapClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_BootstrapClient_tsx_44eac67d._.js.map