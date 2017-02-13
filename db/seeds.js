//REQUIREMENTS
var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var Meme = require('../models/meme.js');
var dotenv = require('dotenv').config();

//all credit and documentation to this package can be found at https://github.com/seanemmer/mongoose-seed

//mongoose-seed boiler plate
seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/meme-app', function(){
  //load model
  seeder.loadModels(['./models/meme.js']);

  //clear meme collection
  seeder.clearModels(['Meme'], function(){
    //pupulates data to meme collection
    seeder.populateModels(memeData, function(){
      console.log('data seed success');
    });
  });
});

//data to seed
var memeData = [
  { 'model': 'Meme',
    'documents':[
      {
      name:"pesos",
      category:"Spanish, laughing",
      url:"http://bit.ly/2lHg4Ge"
      },
      {
      name:"chistoso",
      category:"Spanish, grumpy-cat",
      url:"http://bit.ly/2lcgGqb"
      },
      {
      name:"bieber",
      category:"Spanish, philosoraptor",
      url:"http://bit.ly/2lc8JS2"
      },
      {
      name:"juicio",
      category:"Spanish, philosoraptor",
      url:"http://bit.ly/2lHaUdg"
      },
      {
      name:"Eyebrows",
      category:"none-of-my-business",
      url:"http://bit.ly/2lBSTkr"
      },
      {
        name:"gym",
        category:"none-of-my-business",
        url:"http://bit.ly/2kLeoxK"
      },
      {
      name:"drama",
      category:"none-of-my-business",
      url:"https://i.imgflip.com/gxx8r.jpg"
      },
      {
      name:"sign",
      category:"none-of-my-business",
      url:"https://i.imgflip.com/ackdo.jpg"
      },
      {
      name:"like a boss",
      category:"none-of-my-business, like-boss",
      url:"https://i.imgflip.com/aqq52.jpg"
      },
      {
      name:"we did",
      category:"walk-into-mordor",
      url:"http://smo.sh/2kLeBRK"
      },
      {
      name:"argue with a woman",
      category:"walk-into-mordor",
      url:"http://smo.sh/2kCPvSn"
      },
      {
      name:"build an army",
      category:"walk-into-mordor, manatee",
      url:"http://bit.ly/2lBWv64"
      },
      {
      name:"fabulous",
      category:"walk-into-mordor",
      url:"http://bit.ly/2lHvomk"
      },
      {
      name:"warp",
      category:"walk-into-mordor, star-trek",
      url:"http://bit.ly/2kLli63"
      },
      {
      name:"is skeptical",
      category:"skeptical-hippo",
      url:"http://bit.ly/2l7N1yQ"
      },
      {
      name:"not skeptical",
      category:"skeptical-hippo",
      url:"http://bit.ly/2lbWi8H"
      },
      {
      name:"incontrovertible lion",
      category:"skeptical-hippo",
      url:"http://bit.ly/2koWSvG"
      },
      {
        name:"easy",
        category:"skeptical-hippo",
        url:"http://bit.ly/2l81db1"
      },
      {
        name:"check source",
        category:"skeptical-hippo, conspiracy",
        url:"http://bit.ly/2l0wbPV"
      },
      {
        name:"midget",
        category:"skeptical-hippo, cute",
        url:"http://bit.ly/2kD02gk"
      },
      {
        name:"harley",
        category:"batman",
        url:"http://bit.ly/2l7KC7o"
      },
      {
        name:"illegal-alien",
        category:"batman",
        url:"http://bit.ly/2l0bO5r"
      },
      {
        name:"jobs",
        category:"batman",
        url:"http://bit.ly/2l81PNR"
      },
      {
        name:"sad-batman",
        category:"batman",
        url:"http://bit.ly/2l7Lxoh"
      },
      {
        name:"the-club",
        category:"batman",
        url:"http://bit.ly/2lC3iNd"
      },
      {
        name:"heroes",
        category:"harambe",
        url:"http://i.imgur.com/Jod1Yvjl.jpg"
      },
      {
        name:"cesar-revenge",
        category:"harambe, planet-of-apes, monkey",
        url:"https://i.ytimg.com/vi/RomBIQnj0Wc/0.jpg"
      },
      {
        name:"plenty-kids",
        category:"harambe, monkey",
        url:"http://bit.ly/2l0dTyw"
      },
      {
        name:"granpa",
        category:"harambe",
        url:"http://bit.ly/2lC6ZCJ"
      },
      {
        name:"cool-vader",
        category:"star-wars, cool",
        url:"http://bit.ly/2kCVLcV"
      },
      {
        name:"workaholic",
        category:"star-wars",
        url:"http://bit.ly/2lbYxJd"
      },
      {
        name:"coffee-fail",
        category:"star-wars, fail, coffee",
        url:"http://bit.ly/2lItK4I"
      },
      {
        name:"skeptic-Han",
        category:"star-wars, skeptic",
        url:"http://bit.ly/2lBWore"
      },
      {
        name:"philosophy",
        category:"star-wars, philosoraptor",
        url:"http://smo.sh/2kLhiCC"
      },
      {
        name:"missing-dad",
        category:"star-wars, stormtrooper",
        url:"http://bit.ly/2kjMt9L"
      },
      {
        name:"missing-you",
        category:"star-wars, stormtrooper",
        url:"http://bit.ly/2lHwPRo"
      },
      {
        name:"avp",
        category:"philosoraptor",
        url:"http://bit.ly/2l0rkyl"
      },
      {
        name:"hipsters",
        category:"philosoraptor",
        url:"http://bit.ly/2kCMT78"
      },
      {
        name:"pondering",
        category:"philosoraptor",
        url:"http://bit.ly/2kjZYWX"
      },
      {
        name:"short-arms",
        category:"philosoraptor, tyrannosaurus-rex",
        url:"http://bit.ly/2lBGE7I"
      },
      {
        name:"sex-yes?",
        category:"philosoraptor",
        url:"http://bit.ly/2lBT7Ip"
      },
      {
        name:"shut-up",
        category:"grumpy-cat",
        url:"http://bit.ly/2kjXKXl"
      },
      {
        name:"ray",
        category:"grumpy-cat",
        url:"http://bit.ly/2l7C5l2"
      },

      {
        name:"zoo",
        category:"grumpy-cat",
        url:"http://bit.ly/2lBT9jB"
      },
      {
        name:"dreams",
        category:"grumpy-cat",
        url:"http://bit.ly/2lInF8b"
      },
      {
        name:"try-again",
        category:"grumpy-cat",
        url:"http://bit.ly/2l0jzIJ"
      },
      {
        name:"love",
        category:"grumpy-cat",
        url:"http://bit.ly/2kCLFbV"
      },
      {
        name:"coffee-monkey",
        category:"coffee, monkey",
        url:"http://bit.ly/2kLglKv"
      },
      {
        name:"psycho",
        category:"coffee",
        url:"http://bit.ly/2l7MH34"
      },
      {
        name:"ride-or-die",
        category:"questions",
        url:"http://bit.ly/2l0r4iH"
      },
      {
        name:"stupid-question",
        category:"questions, challenges",
        url:"http://bit.ly/2lc04ie"
      },
      {
        name:"g-o-t-questions",
        category:"questions, game-of-thrones",
        url:"http://bit.ly/2lbXNUv"
      },
      {
        name:"axe",
        category:"questions, psycho",
        url:"http://bit.ly/2kLtQtN"
      },
      {
        name:"me-at-GA",
        category:"questions, simpsons",
        url:"http://bit.ly/2l0lKfs"
      },
      {
        name:"angry-girl",
        category:"questions, escalation",
        url:"http://bit.ly/2kLubwz"
      },
      {
        name:"bear-arms",
        category:"questions, bear",
        url:"http://bit.ly/2lHhdxD"
      },
      {
        name:"too-many-questions",
        category:"questions, ike",
        url:"http://bit.ly/2kjZlfN"
      },
      {
        name:"suprised",
        category:"coffee, shocked",
        url:"http://bit.ly/2kCRoyA"
      },
      {
        name:"no-speaky",
        category:"coffee, grumpy-cat",
        url:"http://bit.ly/2l7PMjy"
      },
      {
        name:"mordor-coffee",
        category:"coffee",
        url:"http://bit.ly/2koPXmo"
      },
      {
        name:"life-is-coffee",
        category:"coffee, chart",
        url:"http://bit.ly/2kCRqq9"
      },
      {
        name:"accomplishments",
        category:"coffee",
        url:"http://bit.ly/2l0i7pR"
      },
      {
        name:"summons",
        category:"coffee",
        url:"http://bzfd.it/2lIfyZr"
      },
      {
        name:"monday-batman",
        category:"batman, coffee",
        url:"http://bit.ly/2l0pflV"
      },
      {
        name:"friendly-cat",
        category:"animals, cute",
        url:"http://bit.ly/2lbZtgL"
      },
      {
        name:"lets-talk",
        category:"animals, racoon",
        url:"http://bit.ly/2kCYJOD"
      },
      {
        name:"valid-complaint",
        category:"animals, bear",
        url:"http://bit.ly/2lBRKtw"
      },
      {
        name:"creepy-sloth",
        category:"animals, creepy-sloth",
        url:"http://bit.ly/2kCSri0"
      },
      {
        name:"jealous-dog",
        category:"animals, dog",
        url:"http://bit.ly/2koTVvb"
      },
      {
        name:"capable-bear",
        category:"animal, bear",
        url:"http://bit.ly/2lHswWe"
      },
      {
        name:"get-in",
        category:"creepy-sloth",
        url:"http://bit.ly/1Un63aX"
      },
      {
        name:"challenges",
        category:"creepy-sloth",
        url:"http://bit.ly/2kjE4mt"
      },
      {
        name:"creepy-family",
        category:"creepy-sloth",
        url:"http://bit.ly/2kLdfWN"
      },
      {
        name:"red-light",
        category:"creepy-sloth",
        url:"http://bit.ly/2kjRG1b"
      }
    ]
  }
];
