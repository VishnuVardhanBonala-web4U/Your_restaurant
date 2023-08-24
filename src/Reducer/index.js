import {combineReducers} from "redux"
import tablereducer from "./tableReducer";
import Filterreducer from "./Filterreducer"
import orderreducer from "./orderReducer";

const reducer=combineReducers({
    tablereducer:tablereducer,
    Filterreducer:Filterreducer,
    orderreducer:orderreducer
})

export default reducer;