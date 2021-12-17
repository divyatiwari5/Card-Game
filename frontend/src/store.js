import rootReducer from './redux/reducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default store;
