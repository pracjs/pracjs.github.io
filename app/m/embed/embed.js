define([
    "text!app/m/embed/embed-tpl.html",
    "bootstrap",
    "underscore",
    "jquery", 
    "component"
], function (tpl, b, _, $) {

    function _init(ctx, path) {
        ctx.html(_.template(tpl)({
            path: path
        }));
    }

    return {
        init: _init
    }
});