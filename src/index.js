const loaderUtils = require('loader-utils');

const defaultConf = {
    rootValue: 750,
    vwFixed: 2,
    minPixelValue: 12,
}

const reg = /\b(\d+(\.\d+)?)px\b/;

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const config = Object.assign({}, defaultConf, options);

    let regGlobal = new RegExp(reg.source, 'g');

    if (this.cacheable) {
        this.cacheable();
    }

    if (regGlobal.test(source)) {
        return source.replace(regGlobal, (origin, target) => {
            if (target < config.minPixelValue) {
                return target === 0 ? target : target + 'px';
            }

            let result = target * 100 / config.rootValue;

            result = parseFloat(result.toFixed(config.vwFixed));

            return result === 0 ? result : result + 'vw';
        });
    } else {
        return source;
    }
}