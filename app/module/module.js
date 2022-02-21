define([
    "text!app/module/module-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", "component"
], function (tpl, _, CodeMirror, html, javascript, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-module").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var moduleTpl = `<table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <%  _.each(records, function(record) { %>
        <tr>
            <td><%=record.id%></td>
            <td><%=record.name%></td>
            <td><%=record.age%></td>
            <td><%=record.address%></td>
            <td></td>
        </tr>
        <% }); %>
    </tbody>
</table>`;
        CodeMirror($("#code-tpl").get(0), {
            value: moduleTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "module",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});