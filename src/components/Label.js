define(function (require) {
    var binder = require('binder');

    return binder.Component.extends(
        {
            tpl: ['<label></label>'].join('')
        },
        {
        }
    );
});
