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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$glightbox$2f$dist$2f$js$2f$glightbox$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/glightbox/dist/js/glightbox.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$choices$2e$js$2f$public$2f$assets$2f$scripts$2f$choices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/choices.js/public/assets/scripts/choices.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dropzone$2f$dist$2f$dropzone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dropzone/dist/dropzone.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BootstrapClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Inicializar Bootstrap
        "undefined" !== 'undefined' && __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-ssr] (ecmascript)");
        // Inicializar GLightbox
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$glightbox$2f$dist$2f$js$2f$glightbox$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            selector: '[data-gallery="image-popup"]',
            touchNavigation: true,
            loop: true
        });
        // Inicializar Choices para los selects
        document.querySelectorAll('.js-choice').forEach((select)=>{
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$choices$2e$js$2f$public$2f$assets$2f$scripts$2f$choices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](select, {
                removeItemButton: true,
                shouldSort: false
            });
        });
        // Inicializar Dropzone con tipado seguro
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dropzone$2f$dist$2f$dropzone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].autoDiscover = false;
        document.querySelectorAll('.dropzone').forEach((dropzone)=>{
            const maxFiles = dropzone.dataset.dropzone;
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dropzone$2f$dist$2f$dropzone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dropzone, {
                url: '/upload',
                maxFiles: maxFiles ? parseInt(maxFiles) : 1,
                acceptedFiles: 'image/*'
            });
        });
    }, []);
    return null;
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d64a43b2._.js.map