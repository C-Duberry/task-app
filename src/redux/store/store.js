import { configureStore } from '@reduxjs/toolkit'
import entryReducer from "../entries"


export default configureStore({
    reducer: {
        entry: entryReducer
    },
})