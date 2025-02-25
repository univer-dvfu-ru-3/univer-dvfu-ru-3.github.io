! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "00da95c6-acac-4219-9c7a-19bb6e94234c", e._sentryDebugIdIdentifier = "sentry-dbid-00da95c6-acac-4219-9c7a-19bb6e94234c")
    } catch (e) {}
}(),
function() {
    const e = {
        NODE_ENV: "development"
    };
    try {
        if (process) return process.env = Object.assign({}, process.env), void Object.assign(process.env, e)
    } catch (e) {}
    globalThis.process = {
        env: e
    }
}(), ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "univer.dvfu.ru_master@09f99145"
};
let e = $("#coin-balance"),
    n = e.data("url");
$.get(n, (function(n) {
    !0 === n.success ? e.html(n.data) : e.html("&mdash;")
}));
//# sourceMappingURL=app.js.map