import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, videoSlice } from "./";

export const store = configureStore({
    reducer: {
        video: videoSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})