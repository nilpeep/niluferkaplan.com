import {configureStore} from "@reduxjs/toolkit"
import user from "./user/index.js"

const store = configureStore({
    reducer: {
        user
    }
})

export default store