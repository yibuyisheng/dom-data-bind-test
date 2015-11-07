define(function (require) {
    var binder = require('binder');

    function Content() {
        binder.Component.apply(this, arguments);
    }

    Content.prototype.tpl = [
        '<div>',
            '<ui-input-row><input type="text"></ui-input-row>',
        '</div>'
    ].join('');

    Content.prototype.initialize = function () {

    };

    Content.prototype.getStyle = function () {
        return [
            '#root# {flex: 1}'
        ].join('');
    };

    binder.inherit(Content, binder.Component);

    return Content;
});

