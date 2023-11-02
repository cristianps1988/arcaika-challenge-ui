import { createSlice, } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isVideoModalOpen: false,
    },
    reducers: {
        onOpenVideoModal: (state) => {
            state.isVideoModalOpen = true;
        },
        onCloseVideoModal: (state) => {
            state.isVideoModalOpen = false;
        }
    }
});
export const { onOpenVideoModal, onCloseVideoModal } = uiSlice.actions;