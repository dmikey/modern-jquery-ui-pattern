// get zepto
var $ = require('zepto');
var view = $(require('./template.html'));

require('components/SideBarItem')

$.extend(view, {
  update: function(data) {
    const fragment = $('<fragment/>')
    const sideBar = $('.side-bar', this)
    data.traces.forEach(trace => {
      fragment.append($(`<x-side-bar-item title="${trace.title}" />`))
    });
    sideBar.append(fragment)
  }
})

module.exports = view;