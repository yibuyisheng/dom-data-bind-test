define(function () {
    var binder = require('binder');

    return binder.Component.extends(
        {
            tpl: [
                '<div><!-- children --></div>'
            ].join('')
        },
        {
            getStyle: function () {
                return [
                    '#root# {',
                        'display: flex',
                    '}'
                ].join('');
            }
        }
    );
});
