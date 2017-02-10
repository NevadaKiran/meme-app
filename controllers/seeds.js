//REQUIREMENTS
var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var MemeSchema = new Schema({
  name: String,
  favorite: {type: Boolean, default: false},
  category: String,
  url: String,
  created_at: Date,
  updated_at: Date
});

MemeSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var MemeModel = mongoose.model('MemeModel', MemeSchema);

seeder.connect('mongodb://localhost/meme-app', function(){
  //load model
  seeder.loadModels(['controllers/seeds.js']);

  //clear meme collection
  seeder.clearModels(['MemeModel'], function(){
    //pupulates data to meme collection
    seeder.populateModels(memeData, function(){
      console.log('data seed success');
    });
  });
});

var memeData = [
  { 'model': 'MemeModel',
    'documents':[
      {
      name:"pesos",
      category:"Spanish",
      url:"https://www.memesitos.com/wp-content/uploads/2015/11/Memes-en-espa%C3%B1ol.jpg"
      },

      {
      name:"chistoso",
      category:"Spanish",
      url:"https://www.memesitos.com/wp-content/uploads/2015/11/wg0qe0.jpg"
      },

      {
      name:"bieber",
      category:"Spanish",
      url:"https://www.memesitos.com/wp-content/uploads/2015/11/5295.jpg"
      },

      {
      name:"juicio",
      category:"Spanish",
      url:"https://www.memesitos.com/wp-content/uploads/2015/11/hqdefault-15.jpg"
      },

      {
      name:"Eyebrows",
      category:"none-of-my-business-meme",
      url:"http://www.dumpaday.com/wp-content/uploads/2015/08/none-of-my-business-meme.jpg"
      },

      {
        name:"gym",
        category:"none-of-my-business-meme",
        url:"https://s-media-cache-ak0.pinimg.com/564x/ba/a9/6b/baa96b70d2a27db87066fa2587f02bdd.jpg"
      },

      {
      name:"drama",
      category:"none-of-my-business-meme",
      url:"https://i.imgflip.com/gxx8r.jpg"
      },

      {
      name:"sign",
      category:"none-of-my-business-meme",
      url:"https://i.imgflip.com/ackdo.jpg"
      },

      {
      name:"like a boss",
      category:"none-of-my-business-meme",
      url:"https://i.imgflip.com/aqq52.jpg"
      },

      {
      name:"we did",
      category:"walk-into-mordor",
      url:"http://cdn.smosh.com/sites/default/files/bloguploads/meme-simply-4.jpg"
      },

      {
      name:"argue with a woman",
      category:"walk-into-mordor",
      url:"http://cdn.smosh.com/sites/default/files/bloguploads/meme-simply-2.jpg"
      },

      {
      name:"build an army",
      category:"walk-into-mordor",
      url:"http://s2.quickmeme.com/img/39/399aabaa6b7cb2eddb4dc216dc3c7dc33ed35252484eb4f2d183e59aad0b1f44.jpg"
      },

      {
      name:"fabulous",
      category:"walk-into-mordor",
      url:"http://www.vitamin-ha.com/wp-content/uploads/2012/03/one-does-not-simply-walk-into-mordor.jpg"
      },

      {
      name:"warp",
      category:"walk-into-mordor",
      url:"http://www.vitamin-ha.com/wp-content/uploads/2012/03/funny-captions-star-trek-one-does-not-simply-warp-into-mordor.jpg"
      },

      {
      name:"is skeptical",
      category:"skeptical-hippo",
      url:"http://img.memecdn.com/skeptical-hippo_o_575409.jpg"
      },

      {
      name:"not skeptical",
      category:"skeptical-hippo",
      url:"http://manlycurls.com/blog_new/wp-content/uploads/2011/10/skeptical.hippo_-550x396.jpg"
      },

      {
      name:"incontrovertible lion",
      category:"skeptical-hippo",
      url:"http://www.pwnfitness.com/wp-content/uploads/2013/06/take-that-skeptical-hippo.jpg"
      },

      {
        name:"easy",
        category:"skeptical-hippo",
        url:"https://cdn.meme.am/cache/instances/folder996/250x250/27344996.jpg"
      },

      {
        name:"check source",
        category:"skeptical-hippo",
        url:"https://image.slidesharecdn.com/spiritanimalsofageneration-130904215754-/95/spirit-animals-of-a-generation-why-millennials-need-memes-25-638.jpg?cb=1378937586"
      },

      {
        name:"midget",
        category:"skeptical-hippo",
        url:"http://www.relatably.com/m/img/tiny-hippo-memes/every-little-hippo-amp-039-s-dream_o_1704361.jpg"
      },

      {
        name:"harley",
        category:"batman",
        url:"http://weknowmemes.com/wp-content/uploads/2015/05/batman-harley-meme.jpeg"
      },

      {
        name:"illegal-alien",
        category:"batman",
        url:"https://s-media-cache-ak0.pinimg.com/originals/2a/73/71/2a737117de6721799328e4a8917c4d3d.jpg"
      },

      {
        name:"jobs",
        category:"batman",
        url:"https://s-media-cache-ak0.pinimg.com/736x/00/2c/2e/002c2ecb11d0362a3bce8b1e4f14a01d.jpg"
      },

      {
        name:"sad-batman",
        category:"batman",
        url:"http://picsmine.com/wp-content/uploads/2017/01/Your-Comment-Made-Batman-Sad-Batman-Memes.jpg"
      },

      {
        name:"the-club",
        category:"batman",
        url:"https://images.moviepilot.com/images/c_limit,q_auto,w_710/auy3bgxcxkn21afb7d4j/the-20-funniest-batman-memes-on-the-internet-that-show-off-the-dark-knights-light-side.jpg"
      },

      {
        name:"heroes",
        category:"harambe",
        url:"http://i.imgur.com/Jod1Yvjl.jpg"
      },

      {
        name:"cesar-revenge",
        category:"harambe",
        url:"https://i.ytimg.com/vi/RomBIQnj0Wc/0.jpg"
      },

      {
        name:"plenty-kids",
        category:"harambe",
        url:"http://www.funniestmemes.com/wp-content/uploads/2016/06/Funniest_Memes_karl-pilkington-on-gorilla-shooting_6352.jpeg"
      },

      {
        name:"granpa",
        category:"harambe",
        url:"http://i0.kym-cdn.com/photos/images/original/001/162/680/0d2.jpg"
      },

      {
        name:"cool-vader",
        category:"star-wars",
        url:"https://s-media-cache-ak0.pinimg.com/736x/d1/02/ce/d102ce58cc118e7e0115ff8b5fe1db7c.jpg"
      },

      {
        name:"workaholic",
        category:"star-wars",
        url:"https://s-media-cache-ak0.pinimg.com/736x/39/37/4f/39374f12f15460818026667b6658b2e0.jpg"
      },

      {
        name:"coffee-fail",
        category:"star-wars",
        url:"https://s-media-cache-ak0.pinimg.com/originals/eb/ef/ac/ebefacae6374dfbbb17bbc3ed0b03465.jpg"
      },

      {
        name:"skepticism",
        category:"star-wars",
        url:"https://pbs.twimg.com/media/CE9D64AWEAAPXKd.jpg"
      },

      {
        name:"philosophy",
        category:"star-wars",
        url:"http://cdn.smosh.com/sites/default/files/bloguploads/star-wars-meme-raptor.jpg"
      },

      {
        name:"missing-dad",
        category:"star-wars",
        url:"http://68.media.tumblr.com/d26e530ec208148517052e409b6cf69b/tumblr_o9frcc5sKF1un8pvuo1_500.jpg"
      },

      {
        name:"missing-you",
        category:"star-wars",
        url:"https://s-media-cache-ak0.pinimg.com/564x/f3/11/2d/f3112dbed2fd3e5305675a3787cd9d73.jpg"
      },

      {
        name:"avp",
        category:"philosoraptor",
        url:"http://i0.kym-cdn.com/photos/images/facebook/000/591/959/bf6.jpg"
      },

      {
        name:"hipsters",
        category:"philosoraptor",
        url:"https://sites.google.com/a/umich.edu/the-rhetoric-of-memes/_/rsrc/1386350972056/home/philosoraptor/dino3.png"
      },

      {
        name:"pondering",
        category:"philosoraptor",
        url:"http://blog.memes.com/wp-content/uploads/2016/04/Philosoraptor-meme-7.jpg"
      },

      {
        name:"short-arms",
        category:"philosoraptor",
        url:"http://hotphotosfree.com/sites/default/files/styles/medium/public/field/image/beb180e31157af6f76b1d1634517f6d4.jpg?itok=WIQ2Hfny"
      },

      {
        name:"sex-yes?",
        category:"philosoraptor",
        url:"http://img.memecdn.com/if-i-asked-you_o_378669.jpg"
      },

      {
        name:"shut-up",
        category:"grumpy-cat",
        url:"http://i0.kym-cdn.com/photos/images/facebook/000/919/578/c2f.jpg"
      },

      {
        name:"ray",
        category:"grumpy-cat",
        url:"https://s-media-cache-ak0.pinimg.com/236x/2f/59/f0/2f59f03c1191249a7503aababa36f668.jpg"
      },

      {
        name:"zoo",
        category:"grumpy-cat",
        url:"http://images1.tickld.com/live/411479.jpg"
      },

      {
        name:"dreams",
        category:"grumpy-cat",
        url:"https://s-media-cache-ak0.pinimg.com/736x/f1/a3/ba/f1a3ba5063af52ebf2d6792bbbce8f0b.jpg"
      },

      {
        name:"try-again",
        category:"grumpy-cat",
        url:"http://cdn.skinnyms.com/wp-content/uploads/2015/03/9-Best-Grumpy-Cat-Memes-2.jpg"
      },

      {
        name:"love",
        category:"grumpy-cat",
        url:"https://s-media-cache-ak0.pinimg.com/originals/55/6f/e2/556fe2a9bf387905dbc4d3b189ea953a.png"
      },

      {
        name:"coffee-monkey",
        category:"coffee",
        url:"http://68.media.tumblr.com/0a4f1b36e8b7c75bdbbf7ff40646e4d2/tumblr_o38da0cHxL1v9vblso1_500.png"
      },

      {
        name:"psycho",
        category:"coffee",
        url:"https://s-media-cache-ak0.pinimg.com/564x/6f/d5/1f/6fd51fd5346daaff43221b4c5c84a0f5.jpg"
      },

      {
        name:"ride-or-die",
        category:"questions",
        url:"https://s-media-cache-ak0.pinimg.com/236x/aa/47/e8/aa47e86d11197098751502ba21dde9e5.jpg"
      },

      {
        name:"stupid-question",
        category:"questions",
        url:"http://img.memecdn.com/There-are-no-stupid-questions_o_140476.jpg"
      },

      {
        name:"g-o-t-questions",
        category:"questions",
        url:"https://mandmhorsemanship.files.wordpress.com/2015/09/brace-yourselves-for-a-few-questions-meme-7859.jpg"
      },

      {
        name:"axe",
        category:"questions",
        url:"http://s2.quickmeme.com/img/42/4262c9cc7ee6ba55ace5ff403f2fbee6e5bd9bdd6f29f679de7c5fc58ddb9fe0.jpg"
      },

      {
        name:"me-at-GA",
        category:"questions",
        url:"http://img.memecdn.com/this-is-me-asking-question-during-lecture_o_2887341.jpg"
      },

      {
        name:"escalation",
        category:"questions",
        url:"https://s-media-cache-ak0.pinimg.com/564x/1e/34/41/1e344196b07a4540bef874277840a0f3.jpg"
      },

      {
        name:"bear-arms",
        category:"questions",
        url:"https://www.askideas.com/media/08/These-Bear-Arms-They-Coming-From-Funny-Question-Meme.jpg"
      },

      {
        name:"too-many-questions",
        category:"questions",
        url:"http://s.quickmeme.com/img/0e/0ee1833745f41ce6bbccfecf68a3db80a650db11ffd346bca32c89dac5bacd45.jpg"
      },

      {
        name:"suprised",
        category:"coffee",
        url:"http://imworld.aufeminin.com/story/20150401/coffee-meme-630521_w600h600.jpg"
      },

      {
        name:"no-speaky",
        category:"coffee",
        url:"http://www.fullredneck.com/wp-content/uploads/2016/10/Funny-Coffee-Meme-21.jpg"
      },

      {
        name:"mordor-coffee",
        category:"coffee",
        url:"http://www.fullredneck.com/wp-content/uploads/2016/10/Funny-Coffee-Meme-26.jpg"
      },

      {
        name:"life-is-coffee",
        category:"coffee",
        url:"http://www.relatably.com/m/img/adequate-memes/Coffee-holic.jpg"
      },

      {
        name:"accomplishments",
        category:"coffee",
        url:"https://lolzthatswim.files.wordpress.com/2015/09/drink-coffee-meme.png"
      },

      {
        name:"summons",
        category:"coffee",
        url:"https://img.buzzfeed.com/buzzfeed-static/static/2016-06/10/12/asset/buzzfeed-prod-web13/sub-buzz-29502-1465575753-1.png"
      },

      {
        name:"monday-batman",
        category:"batman",
        url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZ32vY08-i_VlCG4DuJ0WsCdJWuLOkKxW7k63lUzh2eec0NVIjaA"
      },

      {
        name:"friendly-cat",
        category:"animals",
        url:"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-30-Funny-animal-memes-and-quotes-Funniest-jokes.jpg"
      },

      {
        name:"lets-talk",
        category:"animals",
        url:"https://s-media-cache-ak0.pinimg.com/originals/4a/41/9f/4a419f5b0a3254697a344f98b6d66bc0.jpg"
      },

      {
        name:"valid-complaint",
        category:"animals",
        url:"http://2.media.dorkly.cvcdn.com/31/31/8defe9107b2d13845bb71b916ef83f4d.jpg"
      },

      {
        name:"creepy-sloth",
        category:"animals",
        url:"http://thumbpress.com/wp-content/uploads/2012/07/Suspiciously-Evil-Sloth.jpg"
      },

      {
        name:"jealous-dog",
        category:"animals",
        url:"https://moshiqa.files.wordpress.com/2016/01/silly-animal-memes-17.jpg"
      },

      {
        name:"capable-bear",
        category:"animals",
        url:"https://amazinganimalphotos.com/wp-content/uploads/2014/11/chill-out-i-got-this-funny-animal-memes.jpg"
      },

      {
        name:"get-in",
        category:"creepy-sloth",
        url:"http://s2.quickmeme.com/img/a7/a7ffbe4f3f0b8454ced1bd2faccbd4540a4cab8f67c3f8a0d363744bd458895e.jpg"
      },

      {
        name:"challenges",
        category:"creepy-sloth",
        url:"https://s-media-cache-ak0.pinimg.com/236x/5f/40/8f/5f408f11d5d3d943e3f2ebde9d3b2b35.jpg"
      },

      {
        name:"creepy-family",
        category:"creepy-sloth",
        url:"http://img.memecdn.com/sloths-know-how-to-party_o_2311877.jpg"
      },

      {
        name:"red-light",
        category:"creepy-sloth",
        url:"http://images2.memedroid.com/images/UPLOADED24/517f5e5d62da3.jpeg"
      }
    ]
  }
];
