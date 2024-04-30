'use client'

import { Provider } from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import user from "./user/index.js"

const store = configureStore({
    reducer: {
        user
    }
})

export default store

export const ReduxProvider = ({store, children}) =>  <Provider store={store}>{children}</Provider>