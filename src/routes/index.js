var grapnel = require('grapnel');
var router = new grapnel();

//setup routes for app
router.get('', function(req) {
  // default
  var view = require('views/main');
  view.appendTo('#app');
});

module.exports = router;
