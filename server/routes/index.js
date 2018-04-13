const router = require('express').Router();
const friends = require('../controllers/friends.js');
const LoginController = require('../controllers/LoginController');
const posts = require('../controllers/posts.js');
const comments = require('../controllers/comments.js');

router.get('/friends', friends.searchFriends);
router.post('/togglefriend', friends.toggleFriend);

router.post('/postFeed', posts.savePosts);
router.get('/postFeed', posts.fetchPosts);

router.post('/comments', comments.saveComments);
router.get('/comments', comments.fetchComments);

router.route('/newAccount')
  .post(LoginController.createAccount);

router.route('/Login/:username/:password')
  .get(LoginController.Login);

module.exports = router;