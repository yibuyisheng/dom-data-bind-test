define(function (require) {
    var binder = require('binder');

    function Section() {
        binder.Component.apply(this, arguments);
    }

    Section.prototype.tpl = ['<div style="${style}"><!-- children --></div>'].join('');

    Section.prototype.literalAttrReady = function () {
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
    };

    Section.getStyle = function () {
        return [
            '#root# {',
                '',
            '}',
            '#root# input {',
                'width: 100%;',
                'box-sizing: border-box;',
            '}'
        ].join('');
    };

    binder.inherit(Section, binder.Component);

    return Section;
});
