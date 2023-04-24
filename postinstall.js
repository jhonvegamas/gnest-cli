const figlet = require('figlet');
const packageInfo = require('./package.json');

if (packageInfo.version.includes('alpha')) {
    console.log('You are using an alpha version!');
}
figlet('GNest CLI', {
        font: 'slant',
        width: 500,
    },
    (err, data) => {
        if (err) {
            console.log('GNest-CLI');
        } else {
            console.log(data);
        }
        console.log(packageInfo.description);
        console.log(`Version ${packageInfo.version}`);
        console.log('');
    });
