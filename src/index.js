const base = require('@high-standards-js/base');

function addPluginConfig(config) {
    const config = JSON.parse(
        base.getFile('.releaserc', true, '{ "plugins": [] }')
    );

    if (!configExisting(config)) {
        config.plugins.push(config)
    }
    base.writeFile(
        '.releaserc',
        JSON.stringify(config, null, 2)
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