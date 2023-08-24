import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducer';


 

const Store=createStore (
     reducer,
     composeWithDevTools(applyMiddleware(thunk))
)

export default Store;
