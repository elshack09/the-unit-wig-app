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
            description:'The Straight Hair is made by taking raw virgin hair and perming the hair using no lye. The texture comes out textured yet still straight, just as if you were to get a perm yourself. The almost invisible “crimps” in the hair to really capture the authenticity of a naturally kinky girl that has a relaxed perm. The hair is a very low luster, and very dense to the touch.',
            length: 'Medium Length',
            cap: 'Small Cap',
            price: 200
        }),
        new Wig({
            title: 'Wavy Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/285/1624/IMG_2882_Facetune_25-01-2018-13-22-10_3__18515.1516911842.JPG?c=2&imbypass=on&imbypass=on',
            description: 'The Wavy Hair has shorter, more distinct “S” waves, similar to the waves you get from unbraiding 1” thick damp braids. The custom made curl can resemble a wave or a curl, depending on how you choose to manipulate the curl. Use a frizz free cream, or a gel with hold. Coconut oil or Argan Oil used lightly will help to seal patterns sheen. Dry shampoo also works very well with this texture.',
            length: 'Medium Length',
            cap: 'Large Cap',
            price: 300
        }),
        new Wig({
            title: 'Curly Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/121/1743/IMG_2918_Facetune_25-01-2018-16-54-04__26331.1516927232.1280.1280__93031.1516947096.jpg?c=2&imbypass=on&imbypass=on',
            description: 'Also known as the Kawaii Curl. Big, mildly tight curls. Very versatile look for all nationality hairs for its silk like curl. The hair is not a shiny as the looser curls, and is also a little coarser and dense than the higher numbered mm curls. Use a humidity blocking styling cream for fewer frizzes and more definition. Use lightweight spray in moisturizers, and sulfate free cleansers for best results.',
            length: 'Medium Length',
            cap: 'Medium Cap',
            price: 275
        }),
        new Wig({
            title: 'Kinky Hair Texture',
            texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/380x507/products/127/1783/IMG_2931_Facetune_25-01-2018-18-20-50__53484.1516930545.1280.1280__32031.1517090967.1280.1280__15996.1517091049.jpg?c=2&imbypass=on',
            description:'The Kinky Hair Texturcurls resemble tight corkscrew curly ringlets. Perfect if you have completed the “Big Chop” and looking for a heat free break on your natural hair. This texture retains more moisture than the 4mm curl and has a visible curl pattern that is still kinky and yet more defined. A 3C curl pattern resembles tight corkscrew curls about the size of a pencil circumference. This hair is coarse and gives loads of volume. You can use a gel that provides lasting curl definition. The use of grease, or shea butter will maximize your heat free style',
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
        description:'The Straight Hair is made by taking raw virgin hair and perming the hair using no lye. The texture comes out textured yet still straight, just as if you were to get a perm yourself. The almost invisible “crimps” in the hair to really capture the authenticity of a naturally kinky girl that has a relaxed perm. The hair is a very low luster, and very dense to the touch.',
        length: 'Medium Length',
        cap: 'Small Cap',
        price: 200
    }),
    new Wig({
        title: 'Wavy Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/285/1624/IMG_2882_Facetune_25-01-2018-13-22-10_3__18515.1516911842.JPG?c=2&imbypass=on&imbypass=on',
        description: 'The Wavy Hair has shorter, more distinct “S” waves, similar to the waves you get from unbraiding 1” thick damp braids. The custom made curl can resemble a wave or a curl, depending on how you choose to manipulate the curl. Use a frizz free cream, or a gel with hold. Coconut oil or Argan Oil used lightly will help to seal patterns sheen. Dry shampoo also works very well with this texture.',
        length: 'Medium Length',
        cap: 'Large Cap',
        price: 300
    }),
    new Wig({
        title: 'Curly Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/1280x1280/products/121/1743/IMG_2918_Facetune_25-01-2018-16-54-04__26331.1516927232.1280.1280__93031.1516947096.jpg?c=2&imbypass=on&imbypass=on',
        description: 'Also known as the Kawaii Curl. Big, mildly tight curls. Very versatile look for all nationality hairs for its silk like curl. The hair is not a shiny as the looser curls, and is also a little coarser and dense than the higher numbered mm curls. Use a humidity blocking styling cream for fewer frizzes and more definition. Use lightweight spray in moisturizers, and sulfate free cleansers for best results.',
        length: 'Medium Length',
        cap: 'Medium Cap',
        price: 275
    }),
    new Wig({
        title: 'Kinky Hair Texture',
        texture: 'http://cdn7.bigcommerce.com/s-c8yvxoqyiv/images/stencil/380x507/products/127/1783/IMG_2931_Facetune_25-01-2018-18-20-50__53484.1516930545.1280.1280__32031.1517090967.1280.1280__15996.1517091049.jpg?c=2&imbypass=on',
        description:'The Kinky Hair Texturcurls resemble tight corkscrew curly ringlets. Perfect if you have completed the “Big Chop” and looking for a heat free break on your natural hair. This texture retains more moisture than the 4mm curl and has a visible curl pattern that is still kinky and yet more defined. A 3C curl pattern resembles tight corkscrew curls about the size of a pencil circumference. This hair is coarse and gives loads of volume. You can use a gel that provides lasting curl definition. The use of grease, or shea butter will maximize your heat free style',
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