var express = require('express');
var router = express.Router();

//const messagediv = document.querySelector('#messagediv');

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
router.get('/', function(req, res, next) {

  res.render('index', { title: "Mini Messageboard", messages: messages })
});


router.get('/new', function(req, res, next) {

  res.render('form')
});
router.post('/new', function(req, res, next) {

  let messageText = req.body.title1
  let messageUser = req.body.title2
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')

});

module.exports = router;
