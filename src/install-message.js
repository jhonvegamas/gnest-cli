const figlet = require('figlet');
const packageInfo = require('../package.json');

figlet('GNest-CLI', (err, data) => {
    if (err) {
        console.log('GNest-CLI');
    } else {
        console.log(data);
    }
    console.log(packageInfo.description);
    console.log(`Version ${packageInfo.version}`);
    console.log('');
});
