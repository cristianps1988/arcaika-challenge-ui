import { createSlice, } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isVideoModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isVideoModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isVideoModalOpen = false;
        }
    }
});
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;