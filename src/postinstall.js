const base = require('@high-standards-js/base');
const fs = require('fs');
const path = require('path');

(async() => {
    await base.checkAcceptedHighStandards();

    let packageJson = base.getInitiatingProjectPackageJson();
    
    const releaseRcPath = path.join(
        base.getProjectRoot(),
        '.releaserc'
    );

    if (!fs.existsSync(releaseRcPath)) {
        base.copyFileFromTemplate(__dirname, '.releaserc');
    }
    
    packageJson = await base.addDevDependency(packageJson, '@semantic-release/commit-analyzer');
    packageJson = await base.addDevDependency(packageJson, '@semantic-release/release-notes-generator');
    base.writeInitiatingProjectPackageJson(packageJson);
})();
