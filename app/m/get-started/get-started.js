define([
    "text!app/m/get-started/get-started-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/shell/shell",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "cm/mode/nginx/nginx",
    "jquery", 
    "component"
], function (tpl, _, CodeMirror, shell, html, javascript, nginx, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-init").get(0), {
            lineNumbers: false,
            readOnly: true,
            mode: "shell"
        });

        var indexTpl = `<!DOCTYPE html>
<html>

<head>
    <title>Prac</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <link href="/style/css/bootstrap.css" rel="stylesheet">
    <link href="/style/icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="/style/css/prac-m.css" rel="stylesheet">
    <script src="/js/prac.js"></script>
    <script src="/main.js"></script>
</head>

<body>
    <div class="content">
        <!-- Your page content -->
        <div p-content></div>
    </div>
</body>

</html>`;
        CodeMirror($("#code-index").get(0), {
            value: indexTpl,
            mode: "htmlmixed"
        });

        
        CodeMirror.fromTextArea($("#code-main").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-module-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var moduleTpl = `// Set template data
<h1><%=title%></h1>`;

        CodeMirror($("#code-module-html").get(0), {
            value: moduleTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-start-dev").get(0), {
            readOnly: true,
            mode: "shell"
        });

        CodeMirror.fromTextArea($("#code-nginx").get(0), {
            readOnly: true,
            mode: "nginx"
        });
    }

    return {
        name: "quickStart",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});