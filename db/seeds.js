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
      name:"Pesos",
      category:"Spanish, Laughing",
      url:"http://bit.ly/2lHg4Ge"
      },
      {
      name:"histoso",
      category:"Spanish, Grumpy Cat",
      url:"http://bit.ly/2lcgGqb"
      },
      {
      name:"Spanish Justin Bieber",
      category:"Spanish, Philosoraptor",
      url:"http://bit.ly/2lc8JS2"
      },
      {
      name:"No Pierdes el Juicio",
      category:"Spanish, Philosoraptor",
      url:"http://bit.ly/2lHaUdg"
      },
      {
      name:"Long eyebrows",
      category:"None of my business",
      url:"http://bit.ly/2lBSTkr"
      },
      {
        name:"No Gym",
        category:"None of my business",
        url:"http://bit.ly/2kLeoxK"
      },
      {
      name:"Drama",
      category:"None of my business",
      url:"https://i.imgflip.com/gxx8r.jpg"
      },
      {
      name:"Horoscope",
      category:"None of my business",
      url:"https://i.imgflip.com/ackdo.jpg"
      },
      {
      name:"Not really a boss",
      category:"None of my business, Like a Boss",
      url:"https://i.imgflip.com/aqq52.jpg"
      },
      {
      name:"Sometimes one simply Does",
      category:"Walk into Mordor, Ned Stark",
      url:"http://smo.sh/2kLeBRK"
      },
      {
      name:"Relationship Advice",
      category:"Walk into Mordor, Ned Stark",
      url:"http://smo.sh/2kCPvSn"
      },
      {
      name:"Manatee Sith Lord",
      category:"Walk into Mordor, Manatee",
      url:"http://bit.ly/2lBWv64"
      },
      {
      name:"Hobbit Hot",
      category:"Walk into Mordor, Look good to feel good",
      url:"http://bit.ly/2lHvomk"
      },
      {
      name:"Killjoy Data",
      category:"Walk into Mordor, Star Trek",
      url:"http://bit.ly/2kLli63"
      },
      {
      name:"Skeptical Hippo",
      category:"Skeptical Hippo",
      url:"http://bit.ly/2l7N1yQ"
      },
      {
      name:"Happy Hippo",
      category:"Skeptical Hippo",
      url:"http://bit.ly/2lbWi8H"
      },
      {
      name:"A Hippo and Friends",
      category:"Skeptical Hippo, Lions",
      url:"http://bit.ly/2koWSvG"
      },
      {
        name:"Programmer Hippo",
        category:"Skeptical Hippo, Programmer",
        url:"http://bit.ly/2l81db1"
      },
      {
        name:"Skeptical Hippo is a Conspiracy Theorist",
        category:"Skeptical Hippo, Conspiracy",
        url:"http://bit.ly/2l0wbPV"
      },
      {
        name:"Healthy Eating",
        category:"Skeptical Hippo, Cute, Midget",
        url:"http://bit.ly/2kD02gk"
      },
      {
        name:"Harley Fun",
        category:"Batman",
        url:"http://bit.ly/2l7KC7o"
      },
      {
        name:"Xenophobe",
        category:"Batman",
        url:"http://bit.ly/2l0bO5r"
      },
      {
        name:"Valid Ambission",
        category:"Batman",
        url:"http://bit.ly/2l81PNR"
      },
      {
        name:"Thoughtless",
        category:"Batman",
        url:"http://bit.ly/2l7Lxoh"
      },
      {
        name:"Dancing Bat",
        category:"Batman",
        url:"http://bit.ly/2lC3iNd"
      },
      {
        name:"A Legend",
        category:"Harambe, Tragedy, Legend",
        url:"http://i.imgur.com/Jod1Yvjl.jpg"
      },
      {
        name:"Cesar of Justice",
        category:"Harambe, Planet of Apes, Monkey, Legend",
        url:"https://i.ytimg.com/vi/RomBIQnj0Wc/0.jpg"
      },
      {
        name:"Scarcity increases value",
        category:"Harambe, Monkey, Legend",
        url:"http://bit.ly/2l0dTyw"
      },
      {
        name:"Granpa's cruel reality",
        category:"Harambe, Legend, Tragedy",
        url:"http://bit.ly/2lC6ZCJ"
      },
      {
        name:"Vader's Mojo",
        category:"Star Wars, Cool, Sith Lord",
        url:"http://bit.ly/2kCVLcV"
      },
      {
        name:"Demanding Boss",
        category:"Star Wars, Sith Lord, Work Ethic",
        url:"http://bit.ly/2lbYxJd"
      },
      {
        name:"Intern fail",
        category:"Star Wars, Fail, Coffee, Sith Lord",
        url:"http://bit.ly/2lItK4I"
      },
      {
        name:"Han Solo Win",
        category:"Star Wars, Skeptic",
        url:"http://bit.ly/2lBWore"
      },
      {
        name:"Self Awareness",
        category:"Star Wars, Philosoraptor",
        url:"http://smo.sh/2kLhiCC"
      },
      {
        name:"Cloned Emotions",
        category:"Star Wars, Stormtrooper",
        url:"http://bit.ly/2kjMt9L"
      },
      {
        name:"Clone Romance",
        category:"Star Wars, Stormtrooper",
        url:"http://bit.ly/2lHwPRo"
      },
      {
        name:"AVP",
        category:"Philosoraptor",
        url:"http://bit.ly/2l0rkyl"
      },
      {
        name:"Mainstream Questions",
        category:"Philosoraptor",
        url:"http://bit.ly/2kCMT78"
      },
      {
        name:"Am I lizard, or am I bird?",
        category:"Philosoraptor",
        url:"http://bit.ly/2kjZYWX"
      },
      {
        name:"Short arm struggle",
        category:"philosoraptor, tyrannosaurus-rex",
        url:"http://bit.ly/2lBGE7I"
      },
      {
        name:"Boolean Proposal",
        category:"Philosoraptor",
        url:"http://bit.ly/2lBT7Ip"
      },
      {
        name:"Sound of Silence",
        category:"Grumpy Cat",
        url:"http://bit.ly/2kjXKXl"
      },
      {
        name:"Compliments",
        category:"Grumpy Cat",
        url:"http://bit.ly/2l7C5l2"
      },
      {
        name:"Cat Poetry",
        category:"Grumpy Cat",
        url:"http://bit.ly/2lBT9jB"
      },
      {
        name:"Assurance",
        category:"Grumpy Cat",
        url:"http://bit.ly/2lInF8b"
      },
      {
        name:"Persistance",
        category:"Grumpy Cat",
        url:"http://bit.ly/2l0jzIJ"
      },
      {
        name:"Positivism",
        category:"Grumpy Cat",
        url:"http://bit.ly/2kCLFbV"
      },
      {
        name:"Blessings",
        category:"Coffee, Monkey",
        url:"http://bit.ly/2kLglKv"
      },
      {
        name:"Psycho",
        category:"Coffee",
        url:"http://bit.ly/2l7MH34"
      },
      {
        name:"Ride to Food",
        category:"Questions",
        url:"http://bit.ly/2l0r4iH"
      },
      {
        name:"The Question You Just Asked",
        category:"Questions, Challenges",
        url:"http://bit.ly/2lc04ie"
      },
      {
        name:"Ask",
        category:"Questions, Game of Thrones, Ned Stark",
        url:"http://bit.ly/2lbXNUv"
      },
      {
        name:"Good Question",
        category:"Questions, Psycho, Batman",
        url:"http://bit.ly/2kLtQtN"
      },
      {
        name:"Best Question",
        category:"Questions, Simpsons, Me at GA",
        url:"http://bit.ly/2l0lKfs"
      },
      {
        name:"Dating Advice",
        category:"Questions, Escalation",
        url:"http://bit.ly/2kLubwz"
      },
      {
        name:"My Guns",
        category:"Questions, Bear",
        url:"http://bit.ly/2lHhdxD"
      },
      {
        name:"Tina's Inspiration",
        category:"Questions, Like Ike",
        url:"http://bit.ly/2kjZlfN"
      },
      {
        name:"Coffee Knows",
        category:"Coffee, Shocked",
        url:"http://bit.ly/2kCRoyA"
      },
      {
        name:"Cats Coffee",
        category:"Coffee, Grumpy Cat",
        url:"http://bit.ly/2l7PMjy"
      },
      {
        name:"Ned's Coffee",
        category:"Coffee, Ned Stark",
        url:"http://bit.ly/2koPXmo"
      },
      {
        name:"Drug of choice",
        category:"Coffee, Chart",
        url:"http://bit.ly/2kCRqq9"
      },
      {
        name:"Achievement",
        category:"Coffee",
        url:"http://bit.ly/2l0i7pR"
      },
      {
        name:"Sleep Demon",
        category:"Coffee",
        url:"http://bzfd.it/2lIfyZr"
      },
      {
        name:"Batman's Drug",
        category:"Batman, Coffee",
        url:"http://bit.ly/2l0pflV"
      },
      {
        name:"Cat Love",
        category:"Animals, Cute, Cats",
        url:"http://bit.ly/2lbZtgL"
      },
      {
        name:"Counselling",
        category:"Animals, Racoon",
        url:"http://bit.ly/2kCYJOD"
      },
      {
        name:"Racoon City",
        category:"Animals, Racoon",
        url:"http://bit.ly/2kQgr3z"
      },
      {
        name:"Legitimate Needs",
        category:"Animals, Racoon",
        url:"http://bit.ly/2lNAfm0"
      },
      {
        name:"This Meme Notwithstanding",
        category:"Animals, Bear",
        url:"http://bit.ly/2lBRKtw"
      },
      {
        name:"Ice Cream and Chill",
        category:"Animals, Creepy Sloth",
        url:"http://bit.ly/2kCSri0"
      },
      {
        name:"Jealous Dog",
        category:"Animals, Dog",
        url:"http://bit.ly/2koTVvb"
      },
      {
        name:"Ride or Die",
        category:"Animals, Dog, Home Early",
        url:"http://bit.ly/2kuJxSw"
      },
      {
        name:"Knowing Your Limits",
        category:"Animals, Dog, Cute",
        url:"http://bit.ly/2lNiT8M"
      },
      {
        name:"Bearly Able",
        category:"Animal, Bear, Cute",
        url:"http://bit.ly/2lHswWe"
      },
      {
        name:"Bear Hands",
        category:"Animal, Bear",
        url:"http://img.memecdn.com/bear-hands_o_1041867.jpg"
      },
      {
        name:"Bearly Communicating",
        category:"Animal, Bear, Cute",
        url:"http://bit.ly/2kQjhWh"
      },
      {
        name:"I Love You",
        category:"Animal, Bear, Tiger, Cute",
        url:"http://bit.ly/2knId99"
      },
      {
        name:"Wholesome Invitations",
        category:"Creepy Sloth",
        url:"http://bit.ly/1Un63aX"
      },
      {
        name:"I love you and I love challenges",
        category:"Creepy Sloth",
        url:"http://bit.ly/2kjE4mt"
      },
      {
        name:"Luxury Basement",
        category:"Creepy Sloth",
        url:"http://bit.ly/2kLdfWN"
      },
      {
        name:"The Firetruck Game",
        category:"Creepy Sloth, Fun with Britney",
        url:"http://bit.ly/2kjRG1b"
      },
      {
  name:"Diet and Exercise",
  category:"Manatee",
  url:"http://bit.ly/2l8PrgR"
},
{
  name:"The Fat Friend",
  category:"Manatee, Shark",
  url:"http://bit.ly/2ldicbD"
},
{
  name:"Mountain Hazzard",
  category:"Game of Thrones",
  url:"http://bit.ly/2kMvqeI"
},
{
  name:"Internet Security",
  category:"Programmer, Office",
  url:"http://bit.ly/2lJd4dj"
},
{
  name:"True Romantic",
  category:"Office, Valentines",
  url:"http://bit.ly/2lIAApI"
},
{
  name:"Help with Perspective",
  category:"Laughing, Futurama",
  url:"http://bit.ly/1jOQGL2"
},
{
  name:"Good Humor",
  category:"Laughing",
  url:"http://bit.ly/2lDGP2o"
},
{
  name:"Appreciation",
  category:"Laughing, Minions",
  url:"http://m.memegen.com/s4iubx.jpg"
},
{
  name:"Political Dog",
  category:"Dog, Politics",
  url:"http://bit.ly/1CB8AdP"
},
{
  name:"Overcoming Adversity",
  category:"Like a Boss, Tire Change",
  url:"http://bit.ly/2kMbwAS"
},
{
  name:"Rebel Bird",
  category:"Like a Boss, Anarchy",
  url:"http://bit.ly/2lIeYdl"
},
{
  name:"Harley Woman",
  category:"Like a Boss, Anarchy, Ride or Die",
  url:"http://bit.ly/2ko42VV"
},
{
  name:"Joker Cat",
  category:"Like a Boss, Anarchy, Cats",
  url:"http://bit.ly/2kuLkHu"
},
{
  name:"Anarchist Dog",
  category:"Like a Boss, Anarchy, Dog",
  url:"http://bit.ly/2lhbmC7"
},
{
  name:"Rebel Dog",
  category:"Like a Boss, Anarchy, Dog",
  url:"http://bit.ly/2lh2tZ4"
},
{
  name:"Anarchy Cat",
  category:"Like a Boss, Anarchy, Cat, Politics",
  url:"http://bit.ly/2lN4g6a"
},
{
  name:"No Time to Stop",
  category:"Like a Boss, Military",
  url:"http://bit.ly/2l8yHX2"
},
{
  name:"Confidence Cat",
  category:"Like a Boss, Cats",
  url:"http://bit.ly/2l8JXTd"
},
{
  name:"Scratch my none-of-my-business",
  category:"Like a Boss, Animals, Shark",
  url:"http://bit.ly/2lJ4Jq1"
},
{
  name:"Shark Chivalry",
  category:"Like a Boss, Game of Thrones, Ned Stark",
  url:"http://bit.ly/2klcuFz"
},
{
  name:"Mixed Signals",
  category:"Superheroes, Batman",
  url:"http://bit.ly/2lIshKN"
},
{
  name:"Super Friend Zone",
  category:"Superheroes, Friend Zone",
  url:"http://bit.ly/2kMvUlj"
},
{
  name:"Earning God's Love",
  category:"Friend Zone",
  url:"https://i.ytimg.com/vi/4Dhh87BPbig/maxresdefault.jpg"
},
{
  name:"Superhero Mom",
  category:"Superheroes, Winning",
  url:"https://i.imgflip.com/16wl61.jpg"
},
{
  name:"Knock Knock",
  category:"Superheroes, Batman, Like a Boss",
  url:"http://bit.ly/2kDPYUg"
},
{
  name:"BVS",
  category:"Superheroes, Batman, Superman",
  url:"http://bit.ly/2kMk7n4"
},
{
  name:"Everything is a Conspiracy",
  category:"Conspiracy",
  url:"http://bit.ly/2l1pXiU"
},
{
  name:"A Perfect Plan",
  category:"Conspiracy",
  url:"http://m.memegen.com/4W4PPR.jpg"
},
{
  name:"Hooked on Facts",
  category:"Conspiracy",
  url:"http://bit.ly/2l1rWni"
},
{
  name:"Flow Chart of Science and Memes",
  category:"Conspiracy",
  url:"http://bit.ly/2kDUEJT"
},
{
  name:"What If?",
  category:"Conspiracy",
  url:"http://bit.ly/2lIevYq"
},
{
  name:"Irresponsible Wife and Kids",
  category:"Like a Boss",
  url:"http://bit.ly/2kl5JUf"
},
{
  name:"My Office",
  category:"Like a Boss, Spiderman, Superhero",
  url:"http://bit.ly/2kEisgZ"
},
{
  name:"Cthulhu",
  category:"Cute, Animals, Cthulhu",
  url:"http://bit.ly/2lJXlut"
},
{
  name:"Anarchy Girl",
  category:"Anarchy",
  url:"http://bit.ly/2lf27CZ"
},
{
  name:"Nopeland",
  category:"Cthulhu, Nope",
  url:"http://bit.ly/2lf0chB"
},
{
  name:"Morning Freshness",
  category:"Cthulhu",
  url:"http://bit.ly/2lIuY2R"
},
{
  name:"Preaching",
  category:"Cthulhu",
  url:"http://bit.ly/2l6f4wp"
},
{
  name:"A Powerful President",
  category:"Cthulhu",
  url:"http://blacksheepzart.com/resources/vote%20cthulhu.jpg"
},
{
  name:"Feelings",
  category:"Cute, Dog",
  url:"https://i.imgflip.com/nt9gv.jpg"
},
{
  name:"Puppy Love",
  category:"Cute, Dog",
  url:"http://bit.ly/2ldIcDO"
},
{
  name:"Artist Squirrel",
  category:"Cute, Animals, Squirrel",
  url:"http://bit.ly/2kqPVKw"
},
{
  name:"Thorogh Explanation",
  category:"Cute, Squirrel, Animals",
  url:"https://i.imgflip.com/5totb.jpg"
},
{
  name:"Different Otter",
  category:"Cute, Animals, Otter",
  url:"http://bit.ly/2lIVsNY"
},
{
  name:"Cat self sacrifice",
  category:"Cute, Animals, Cats",
  url:"http://bit.ly/2kNdEby"
},
{
  name:"Interested Cat",
  category:"Cute, Cats, Animals",
  url:"http://bit.ly/2l2fvaR"
},
{
  name:"Denial Cat",
  category:"Cute, Catsm Animals",
  url:"http://bit.ly/2lJ5PB6"
},
{
  name:"Tyrannosaurus Love Challenges",
  category:"Cute, Tyrannousaurus Rex",
  url:"http://bit.ly/2lK6FOY"
},
{
  name:"Operator Lizard",
  category:"Tyrannousaurus Rex",
  url:"http://bit.ly/16GOfql"
},
{
  name:"Wonders of Science",
  category:"Tyrannousaurus Rex, Science",
  url:"http://bit.ly/2lJecgg"
},
{
  name:"Incompetent Maid",
  category:"Tyrannousaurus Rex",
  url:"http://bit.ly/2lJ72IE"
},
{
  name:"Competition Fail",
  category:"Tyrannousaurus Rex",
  url:"http://bit.ly/2l29efi"
},
{
  name:"Project Success",
  category:"Programmer",
  url:"http://bit.ly/24trKeU"
},
{
  name:"Know your Language",
  category:"Programmer",
  url:"http://bit.ly/2kl9sBj"
},
{
  name:"Programmer Love",
  category:"Programmer",
  url:"http://bit.ly/2kl4t3j"
},
{
  name:"GA schedule",
  category:"Programmer",
  url:"http://bit.ly/2lK9waE"
},
{
  name:"Its Fine",
  category:"Programmer",
  url:"http://bit.ly/2l9yzXg"
},
{
  name:"Polar Conspiracy",
  category:"Conspiracy, Bear, Animals, Cute",
  url:"http://bit.ly/2lJjdWO"
}

    ]
  }
];
