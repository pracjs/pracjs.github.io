define([
    "text!app/m/cell/cell-tpl.html",
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
        embed.init($("#embed"), "/cell");

        var htmlTplCell = `<div class="p-cell mb-3">
    <div class="content">
        <div>
            <i class="bi bi-gear-fill"></i>
            <span>Title</span>
        </div>
        <div>
            <span>Contents</span>
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
    <div class="description">Here is description....</div>
</div>`;
        CodeMirror($("#code-html-cell").get(0), {
            readOnly: true,
            value: htmlTplCell,
            mode: "htmlmixed"
        });

        var htmlTplGroup = `<div class="p-cell-group mb-3">
    <div class="p-cell">
        <div class="content">
            <div>
                <span>Title 1</span>
            </div>
            <div>
                <span>Content 1</span>
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
    </div>
    <div class="p-cell">
        <div class="content">
            <div>
                <span>Title 2</span>
            </div>
            <div>
                <span>Content 2</span>
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
    </div>
</div>`;
        CodeMirror($("#code-html-group").get(0), {
            readOnly: true,
            value: htmlTplGroup,
            mode: "htmlmixed"
        });

        var htmlTplCard = ` <div class="p-card">
    <div class="p-cell-group">
        <div class="p-cell">
            <div class="content">
                <div>
                    <span>Title 1</span>
                </div>
                <div>
                    <span>Content 1</span>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="content">
                <div>
                    <span>Title 2</span>
                </div>
                <div>
                    <span>Content 2</span>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="content">
                <div>
                    <span>Title 3</span>
                </div>
                <div>
                    <span>Content 3</span>
                    <i class="bi bi-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
</div>`;
        CodeMirror($("#code-html-card").get(0), {
            readOnly: true,
            value: htmlTplCard,
            mode: "htmlmixed"
        });
    }

    return {
        name: "cell",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});