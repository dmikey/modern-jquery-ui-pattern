var grapnel = require('grapnel');
var router = new grapnel();

import store from 'store';

//setup routes for app
router.get('', function(req) {
  // default
  console.log(store)
  var view = require('views/main')
  view.update(store.getState())
  view.appendTo('#app')
});

module.exports = router
