const base = require('@high-standards-js/base');

function addPluginConfig(config) {
    const releaseRcObject = JSON.parse(
        base.getFile('.releaserc', true, '{ "plugins": [] }')
    );

    if (!configExisting(config)) {
        releaseRcObject.plugins.push(config)
    }
    base.writeFile(
        '.releaserc',
        JSON.stringify(releaseRcObject, null, 2)
    );
}

function configExisting(config, key) {
    return config.plugins.find((configSet) => {
        return configSet[0] === key;
    })
}

module.exports = {
    addPluginConfig
}