import storeEnums from './enums';
const $ = require('zepto')

const subscribers = []
let state = {
  traces: [{
    title: 'Trace One'
  },{
    title: 'Trace Two'
  }]
}

class ComponentStore {
  subscribe(fn) {
    return subscribers.push(fn)
  }
  dispatch(action, payload) {
    subscribers.forEach(fn => {
      fn(this.reduce(payload))
    })
  }
  reduce(payload) {
    state = $.extend(state, payload)
    return state
  }
  getState() {
    return state
  }
}

export default new ComponentStore();