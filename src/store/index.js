import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';
import storeEnums from './enums';

const DefaultDispatcher =  new Dispatcher();
class ComponentStore extends ReduceStore {
  constructor() {
    super(DefaultDispatcher);
  }

  getInitialState() {
    return {
      processes: [{},{},{},{}]
    }
  }

  reduce(state, action) {
    switch (action.type) {
      case storeEnums.ADD_TRACE_DATA:
        alert('do something here')
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new ComponentStore();