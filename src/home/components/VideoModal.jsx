import Modal from 'react-modal'
import { useUiStore, useVideoStore } from '../../hooks';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(5px)',
    },
    content: {
        top: '0',
        //height: '100%',
    },
};

Modal.setAppElement('#root');

export const VideoModal = () => {
    const { isVideoModalOpen, closeVideoModal } = useUiStore()
    const { setActiveVideo, activeVideo } = useVideoStore()

    const onCloseModal = () => {
        closeVideoModal()
        setActiveVideo(null)
    }

    return (
        <Modal
            isOpen={isVideoModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='flex justify-center py-auto h-full'
            closeTimeoutMS={200}
        >
            <iframe src={`https://www.tiktok.com/embed/${activeVideo?.videoId}`} className="h-full" title="Tiktok video"></iframe>
            <button onClick={onCloseModal} className="absolute top-0 right-0 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </Modal>
    )
}
