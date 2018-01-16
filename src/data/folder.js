export default {
    name: 'philarios',
    toggled: true,
    children: [
        {
            name: 'data',
            children: [
                {
                    name: 'flickr',
                    loading: true,
                    children: []
                },
                { name: 'flickr.reflection.getMethods.json' }
            ]
        },
        {
            name: 'node_modules',
            loading: true,
            children: []
        },
        {
            name: 'src',
            children: [
                {
                    name: 'api',
                    children: [
                        { name: 'facets.js' },
                        { name: 'index.js' }
                    ]
                },
                {
                    name: 'config',
                    children: [
                        { name: 'config.json' },
                        { name: 'db.js' },
                        { name: 'index.js' }
                    ]
                },
                {
                    name: 'controllers',
                    children: [
                        { name: 'index.js' }
                    ]
                },
                {
                    name: 'externals',
                    children: [
                        { name: 'flickr.js' },
                        { name: 'index.js' },
                        { name: 'translate.js' }
                    ]
                },
                {
                    name: 'lib',
                    children: [
                        { name: 'util.js' }
                    ]
                },
                {
                    name: 'logic',
                    children: [
                        { name: 'index.js' }
                    ]
                },
                {
                    name: 'models',
                    children: [
                        { name: 'facets.js' }
                    ]
                },
                { name: 'index.js' }
            ]
        },
        { name: 'README.md' },
        { name: 'package.json' }
    ]
};