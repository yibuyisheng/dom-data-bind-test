define(function (require) {
    var binder = require('binder');

    return binder.Component.extends(
        {
            literalAttrReady: function () {
                var me = this;

                setInterval(function () {
                    me.setData({
                        contentText: new Date().getTime()
                    });
                }, 1000);
            },
            tpl: [
                '<h1 title="====${title}doubi">',
                    '${contentText}',
                '</h1>'
            ].join('')
        },
        {
            getStyle: function () {
                return [
                    '#root# {',
                        'height: 50px;',
                        'line-height: 50px;',
                        'text-align: center;',
                        'font-weight: bold;',
                        'font-size: 18px;',
                        'margin: 0;',
                        'background: #9eab7f;',
                    '}'
                ].join('');
            }
        }
    );
});
