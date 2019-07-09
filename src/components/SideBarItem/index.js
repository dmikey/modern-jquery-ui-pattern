var xtag = require('x-tag');
var $ = require('zepto');

module.exports = module.exports = xtag.register('x-side-bar-item', {
  content: require('./template.html'),
  lifecycle: {
    inserted: function () {
      const title = $(this).attr('title')
      $('.title.value', this).text(title)
    }
  },
});