import rootReducer from './redux/reducer';
import { createstore } from 'redux';

const store = createstore(rootReducer);

export default store;
