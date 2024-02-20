"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequest = void 0;
const pages_plugin_static_forms_1 = require("@cloudflare/pages-plugin-static-forms");
exports.onRequest = (0, pages_plugin_static_forms_1.default)({
    respondWith: ({ formData, name }) => {
        const email = formData.get('email');
        return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`);
    },
});
