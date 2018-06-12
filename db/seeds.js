// requirements
const Wig = require('../models/wig');
const mongoose = require('mongoose');

// connection to database
mongoose.connect('mongodb://localhost/theUnit')
    .then(() => {
        console.log('   ===============================  ')
        console.log('   CONNECTION TO MONGO ESTABLISHED  ')
        console.log('   ===============================  ')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })
// remove data for wigs

Wig.remove()
  .then(() => {
    const wigs = [
        new Wig({
            title: 'Straight Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/288/1621/IMG_2871_Facetune_25-01-2018-12-02-50__58410.1516904318.JPG?c=2&imbypass=on&imbypass=on',
            length: 'Medium Length',
            cap: 'Small Cap',
            price: 200
        }),
        new Wig({
            title: 'Wavy Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/285/1624/IMG_2882_Facetune_25-01-2018-13-22-10_3__18515.1516911842.JPG?c=2&imbypass=on&imbypass=on',
            length: 'Medium Length',
            cap: 'Large Cap',
            price: 300
        }),
        new Wig({
            title: 'Curly Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/121/1743/IMG_2918_Facetune_25-01-2018-16-54-04__26331.1516927232.1280.1280__93031.1516947096.jpg?c=2&imbypass=on&imbypass=on',
            length: 'Medium Length',
            cap: 'Medium Cap',
            price: 275
        }),
        new Wig({
            title: 'Kinky Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/380x507/products/127/1783/IMG_2931_Facetune_25-01-2018-18-20-50__53484.1516930545.1280.1280__32031.1517090967.1280.1280__15996.1517091049.jpg?c=2&imbypass=on',
            length: 'Short Length',
            cap: 'Large Cap',
            price: 150
        }),
    ];


  });


// data for wigs
const wigs = [
    new Wig({
        title: 'Straight Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/288/1621/IMG_2871_Facetune_25-01-2018-12-02-50__58410.1516904318.JPG?c=2&imbypass=on&imbypass=on',
        length: 'Medium Length',
        cap: 'Small Cap',
        price: 200
    }),
    new Wig({
        title: 'Wavy Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/285/1624/IMG_2882_Facetune_25-01-2018-13-22-10_3__18515.1516911842.JPG?c=2&imbypass=on&imbypass=on',
        length: 'Medium Length',
        cap: 'Large Cap',
        price: 300
    }),
    new Wig({
        title: 'Curly Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/121/1743/IMG_2918_Facetune_25-01-2018-16-54-04__26331.1516927232.1280.1280__93031.1516947096.jpg?c=2&imbypass=on&imbypass=on',
        length: 'Medium Length',
        cap: 'Medium Cap',
        price: 275
    }),
    new Wig({
        title: 'Kinky Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/380x507/products/127/1783/IMG_2931_Facetune_25-01-2018-18-20-50__53484.1516930545.1280.1280__32031.1517090967.1280.1280__15996.1517091049.jpg?c=2&imbypass=on',
        length: 'Short Length',
        cap: 'Large Cap',
        price: 150
    }),
];
// goes through all wigs type products

let completed = 0;
for (let w = 0; w < wigs.length; w++) {
    wigs[w].save(function (err, result) {
        completed++;
        if (completed === wigs.length) {
            close();
        }
    });
}

function close() {
    mongoose.disconnect();
}