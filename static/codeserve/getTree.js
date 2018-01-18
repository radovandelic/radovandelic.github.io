const fs = require('fs');
const path = require('path');
const dirTree = require('directory-tree');

//git clone the relevant projects before proceeding

const apocryphon = dirTree(__dirname + "/" + 'apocryphon', { exclude: /(\.git$|\.gitignore$)/ });
var philarios = dirTree(__dirname + "/" + 'philarios', { exclude: /(\.git$|\.gitignore$)/ });
philarios = {
    name: 'philarios',
    type: 'directory',
    children: [apocryphon, philarios]
}

const holmichapp = dirTree(__dirname + "/" + 'holmichapp', { exclude: /(\.git$|\.gitignore$)/ });
const rankerjs = dirTree(__dirname + "/" + 'rankerjs', { exclude: /(\.git$|\.gitignore$)/ });
const merchantjs = dirTree(__dirname + "/" + 'merchantjs', { exclude: /(\.git$|\.gitignore$)/ });
const starbook = dirTree(__dirname + "/" + 'starbook', { exclude: /(\.git$|\.gitignore$)/ });
const cleancalc = dirTree(__dirname + "/" + 'cleancalc', { exclude: /(\.git$|\.gitignore$)/ });

philarios.children[0].toggled = true; philarios.children[0].children[12].toggled = true;
philarios.entry = '../static/codeserve/apocryphon/src/index.js';
philarios.children[0].children[12].children[6].active = true;

holmichapp.children[7].toggled = true;
holmichapp.entry = '../static/codeserve/holmichapp/src/index.js';
holmichapp.children[7].children[7].active = true;

rankerjs.children[1].toggled = true;
rankerjs.entry = '../static/codeserve/rankerjs/app/app.js';
rankerjs.children[1].children[0].active = true;

merchantjs.children[7].toggled = true;
merchantjs.entry = '../static/codeserve/merchantjs/src/index.js';
merchantjs.children[7].children[6].active = true;

starbook.entry = '../static/codeserve/starbook/index.html';
starbook.children[0].active = true;

cleancalc.entry = '../static/codeserve/cleancalc/index.html';
cleancalc.children[2].active = true;

const tree = {
    philarios, holmichapp, rankerjs, merchantjs, starbook, cleancalc
}

for (var key in tree) {
    tree[key].toggled = true;
}

fs.writeFile(path.resolve(__dirname, '..', '..', '..', 'src/data/directorytree.json'),
    JSON.stringify(tree).replace(new RegExp(__dirname, 'g'), '../static/codeserve'),
    (err, res) => {
        console.log(err || "done")
    });