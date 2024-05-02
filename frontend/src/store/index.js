'use client'

import { Provider } from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import auth from "./auth/index.js"

const store = configureStore({
    reducer: {
        auth
    }
})

export default store

export const ReduxProvider = ({store, children}) =>  <Provider store={store}>{children}</Provider>