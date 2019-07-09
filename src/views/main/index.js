// get zepto
var $ = require('zepto');
var view = $(require('./template.html'));
require('components/SideBarItem')

// return zepto created DOM object from template
module.exports = view;