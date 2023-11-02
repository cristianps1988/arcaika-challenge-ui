import { useDispatch, useSelector } from "react-redux"
import { onCloseVideoModal, onOpenVideoModal } from "../store"


export const useUiStore = () => {

    const dispatch = useDispatch()

    const { isVideoModalOpen } = useSelector(state => state.ui)

    const openVideoModal = () => {
        dispatch(onOpenVideoModal())
    }

    const closeVideoModal = () => {
        dispatch(onCloseVideoModal())
    }

    return {
        // propiedades
        isVideoModalOpen,

        // metodos
        openVideoModal,
        closeVideoModal
    }
}