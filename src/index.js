const base = require('@high-standards-js/base');

function addPluginConfig(config) {
    const releaseRcObject = JSON.parse(
        base.getFile('.releaserc', true, '{ "plugins": [] }')
    );

    if (!configExisting(releaseRcObject, config)) {
        releaseRcObject.plugins.push(config)
    }
    base.writeFile(
        '.releaserc',
        JSON.stringify(releaseRcObject, null, 2)
    );
}

function configExisting(releaseRcObject, config) {
    return !!releaseRcObject.plugins.find((configSet) => {
        return configSet[0] === config[0];
    })
}

module.exports = {
    addPluginConfig
}