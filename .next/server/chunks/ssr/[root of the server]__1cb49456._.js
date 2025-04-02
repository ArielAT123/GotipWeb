module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/BootstrapClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BootstrapClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function BootstrapClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Importación dinámica con tipos
        const initializeBootstrap = async ()=>{
            try {
                // Importar Bootstrap
                const bootstrap = await __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                // Importar otras librerías
                const [GLightbox, Choices, Dropzone] = await Promise.all([
                    __turbopack_context__.r("[project]/node_modules/glightbox/dist/js/glightbox.min.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i),
                    __turbopack_context__.r("[project]/node_modules/choices.js/public/assets/scripts/choices.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i),
                    __turbopack_context__.r("[project]/node_modules/dropzone/dist/dropzone.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i)
                ]);
                // Inicializar GLightbox
                GLightbox.default({
                    selector: '[data-gallery="image-popup"]',
                    touchNavigation: true,
                    loop: true
                });
                // Inicializar Choices
                document.querySelectorAll('.js-choice').forEach((select)=>{
                    new Choices.default(select, {
                        removeItemButton: true,
                        shouldSort: false
                    });
                });
                // Inicializar Dropzone
                Dropzone.default.autoDiscover = false;
                document.querySelectorAll('.dropzone').forEach((dropzone)=>{
                    const maxFiles = dropzone.dataset.dropzone;
                    new Dropzone.default(dropzone, {
                        url: '/upload',
                        maxFiles: maxFiles ? parseInt(maxFiles) : 1,
                        acceptedFiles: 'image/*'
                    });
                });
            } catch (error) {
                console.error('Error initializing libraries:', error);
            }
        };
        initializeBootstrap();
    }, []);
    return null;
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1cb49456._.js.map