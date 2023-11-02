import { createSlice, } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        isLoadingVideos: true,
        videos: [],
        activeVideo: null,
    },
    reducers: {
        onLoadVideos: (state, { payload = [] }) => {
            state.isLoadingVideos = false
            state.videos = payload.videos
            // todo: agregar verificación para adicionar videos nuevos al state cuando se ingrese a la db uno nuevo
        },



        // onSetActiveEvent: (state, { payload }) => {
        //     state.activeEvent = payload;
        // },
        // onAddNewEvent: (state, { payload }) => {
        //     state.events.push(payload);
        //     state.activeEvent = null;
        // },
        // onUpdateEvent: (state, { payload }) => {
        //     state.events = state.events.map(event => {
        //         if (event.id === payload.id) {
        //             return payload;
        //         }
        //         return event
        //     })
        // },
        // onDeleteEvent: (state) => {
        //     if (state.activeEvent) {
        //         state.events = state.events.filter(event => event.id !== state.activeEvent.id);
        //         state.activeEvent = null;
        //     }
        // },

        // onLogoutCalendar: (state) => {
        //     state.isLoadingEvents = true,
        //         state.events = [],
        //         state.activeEvent = null
        // }
    }
});
export const { onLoadVideos } = videoSlice.actions;