define(function (require) {
    var binder = require('binder');

    function Content() {
        binder.Component.apply(this, arguments);
    }

    Content.prototype.tpl = '<div class="content">content</div>';

    Content.prototype.initialize = function () {

    };

    binder.inherit(Content, binder.Component);

    return Content;
});

