const yargs = require('yargs');

const Server = require('./app.js');

const argv = yargs
    .usage('anywhere [options]')
    .option('p', {
        alias: 'port',
        describe: '端口号',
        default: 3333
    })
    .option('h', {
        alias: 'host',
        describe: '主机号',
        default: '127.0.0.1'
    })
    .option('d', {
        alias: 'root',
        describe: '根目录',
        default: process.cwd()
    })
    .version()
    .alias('v', 'version')
    .help()
    .argv;

const server = new Server(argv);
server.start();