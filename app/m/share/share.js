define([
    "text!app/m/share/share-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/shell/shell",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "app/m/embed/embed",
    "jquery", 
    "component"
], function (tpl, _, CodeMirror, shell, html, javascript, embed, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        embed.init($("#embed"), "/share");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-card">
    <div class="p-cell-group">
        <div class="p-cell" id="to-share">
            <div class="content">
                <div>
                    <span>Click to Share</span>
                </div>
                <div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="offcanvas offcanvas-bottom" id="share-bottom" style="height: 228px;">
    <div class="offcanvas-body" style="padding: 0">
        <div class="p-share" id="share">
            <div class="body">
                <div class="header">Share to Friend</div>
                <div class="list">
                    <div class="item">
                        <div class="icon" style="background-color: rgba(0, 0, 0, 0.1);"></div>
                        <span>WeChat</span>
                    </div>
                    <div class="item">
                        <div class="icon" style="background-color: rgba(0, 0, 0, 0.1);"></div>
                        <span>Blog</span>
                    </div>
                    <div class="item">
                        <div class="icon" style="background-color: rgba(0, 0, 0, 0.1);"></div>
                        <span>Copy</span>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <i class="bi bi-qr-code"></i>
                        </div>
                        <span>QRCode</span>
                    </div>
                    <div class="item">
                        <div class="icon" style="background-color: rgba(0, 0, 0, 0.1);"></div>
                        <span>Other</span>
                    </div>
                </div>
            </div>
            <div class="footer" p-cancel-share>Cancel</div>
        </div>
    </div>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "share",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});