define(function (require) {
    var binder = require('binder');

    function Content() {
        binder.Component.apply(this, arguments);
    }

    Content.prototype.tpl = [
        '<div>',
            '<ui-input-row>',
                '<ui-section width="100px">姓名：</ui-section>',
                '<ui-section flex="1"><ui-input type="text"></ui-section>',
            '</ui-input-row>',
        '</div>'
    ].join('');

    Content.prototype.initialize = function () {

    };

    Content.getStyle = function () {
        return [
            '#root# {flex: 1}'
        ].join('');
    };

    binder.inherit(Content, binder.Component);

    return Content;
});

