define(function (require) {
    var binder = require('binder');

    return binder.Component.extends(
        {
            tpl: '<div>footer</div>'
        },
        {
            getStyle: function () {
                return '#root# {height: 50px; line-height: 50px;}';
            }
        }
    );
});

