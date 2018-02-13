const fs = require('fs');
const path = require('path');
const dirTree = require('directory-tree');
var tree = {};
//git clone the relevant projects before proceeding

const apocryphon = dirTree(__dirname + "/apocryphon", { exclude: /(\.git$|\.gitignore$)/ });
const philarios = dirTree(__dirname + "/philarios", { exclude: /(\.git$|\.gitignore$)/ });
tree.philarios = {
    name: 'philarios',
    type: 'directory',
    children: [apocryphon, philarios]
}

tree.holmichapp = dirTree(__dirname + "/holmichapp", { exclude: /(\.git$|\.gitignore$)/ });
tree.rankerjs = dirTree(__dirname + "/rankerjs", { exclude: /(\.git$|\.gitignore$)/ });
tree.merchantjs = dirTree(__dirname + "/merchantjs", { exclude: /(\.git$|\.gitignore$)/ });
tree.starbook = dirTree(__dirname + "/starbook", { exclude: /(\.git$|\.gitignore$)/ });
tree.cleancalc = dirTree(__dirname + "/cleancalc", { exclude: /(\.git$|\.gitignore$)/ });
tree.battleships = dirTree(__dirname + "/battleships", { exclude: /(\.git$|\.gitignore$)/ });
tree.viljuskari = dirTree(__dirname + "/viljuskari", { exclude: /(\.git$|\.gitignore$)/ });

tree.philarios.children[0].toggled = true; tree.philarios.children[0].children[11].toggled = true;
tree.philarios.entry = '../static/codeserve/apocryphon/src/index.js';
tree.philarios.children[0].children[11].children[6].active = true;

tree.holmichapp.children[7].toggled = true;
tree.holmichapp.entry = '../static/codeserve/holmichapp/src/index.js';
tree.holmichapp.children[7].children[6].active = true;

tree.rankerjs.children[1].toggled = true;
tree.rankerjs.entry = '../static/codeserve/rankerjs/app/app.js';
tree.rankerjs.children[1].children[0].active = true;

tree.merchantjs.children[7].toggled = true;
tree.merchantjs.entry = '../static/codeserve/merchantjs/src/index.js';
tree.merchantjs.children[7].children[6].active = true;

tree.starbook.entry = '../static/codeserve/starbook/index.html';
tree.starbook.children[0].active = true;

tree.cleancalc.entry = '../static/codeserve/cleancalc/index.html';
tree.cleancalc.children[2].active = true;

tree.battleships.children[5].toggled = true;
tree.battleships.entry = '../static/codeserve/battleships/web/index.php';
tree.battleships.children[5].children[2].active = true;

tree.viljuskari.entry = '../static/codeserve/viljuskari/README.md';
tree.viljuskari.children[0].active = true;

for (var key in tree) {
    tree[key].toggled = true;
}

fs.writeFile(path.resolve(__dirname, '..', '..', '..', 'src/data/directorytree.json'),
    JSON.stringify(tree).replace(new RegExp(__dirname, 'g'), '../static/codeserve'),
    (err, res) => {
        console.log(err || "done")
    });