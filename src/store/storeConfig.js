import { createStore, combineReducers} from 'redux'
import numeroReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: numeroReducer
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;