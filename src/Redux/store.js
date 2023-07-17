import {configureStore} from '@reduxjs/toolkit'
import UniversiteReducer from "./Reducer/Universitereducers"  
import SignReducer from "./Reducer/Siginreducer"


const Store = configureStore({
    reducer: {
        ListUniversite: UniversiteReducer,
        LSignin : SignReducer

    }
})
export default Store