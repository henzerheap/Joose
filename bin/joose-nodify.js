var argv = require('optimist')
    .usage('Usage: $0 {OPTIONS}')
    .wrap(80)
    
    .option('root', {
        desc        : 'A path directory which will act as a web root. Default is current working directory',
        'default'   : './'
    })
    
    .option('require', {
        alias   : 'r',
        desc    : 'A file to nodify (has the same semantic as `require` made in `root` directory. You can specify several `require`',
        demand  : true
    })
    
    .option('help', {
        alias   : 'h',
        desc    : 'Show this message'
    })
    .check(function (argv) {
        if (argv.help) throw ''
    })
    .argv


var path        = require('path')
var Librarian   = require('librarian')

var librarian   = new Librarian({
    root        : path.resolve(argv.root || './')
})

librarian.writeBundleTo(process.stdout, [].concat(argv.require || []))
