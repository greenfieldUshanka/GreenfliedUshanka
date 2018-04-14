const router = require('express').Router();
const friends = require('../controllers/friends.js');
const LoginController = require('../controllers/LoginController');
const posts = require('../controllers/posts.js');
const comments = require('../controllers/comments.js');
const session = require ('../controllers/session');
const PersonalInfoController = require('../controllers/personalInfoController');

router.get('/friends', friends.searchFriends);
router.post('/togglefriend', friends.toggleFriend);

router.post('/postFeed', posts.savePosts);
router.get('/postFeed/:id', posts.fetchPosts);

router.post('/comments', comments.saveComments);

router.get('/userSession', session.getSession);
router.get('/logout', session.logout);

router.route('/newAccount')
  .post(LoginController.createAccount);

router.route('/Login/:username/:password')
  .get(LoginController.Login);

router.route('/userProfileInfo/:id')
  .get(PersonalInfoController.GetProfileInformation);

router.route('/editprofile')
  .post(PersonalInfoController.SaveUpdatedProfile);

module.exports = router; 
