define(function (require) {
    var binder = require('binder');

    return binder.Component.extends(
        {
            literalAttrReady: function () {
                var width = this.getData('width');
                var flex = this.getData('flex');

                var styleObj = {};
                if (width !== undefined) {
                    styleObj.width = width;
                }
                if (flex !== undefined) {
                    styleObj.flex = flex;
                }

                this.setData({
                    style: styleObj
                });
            },
            tpl: ['<div style="${style}"><!-- children --></div>'].join('')
        },
        {
            getStyle: function () {
                return [
                    '#root# {',
                        '',
                    '}',
                    '#root# input {',
                        'width: 100%;',
                        'box-sizing: border-box;',
                    '}'
                ].join('');
            }
        }
    );
});
