import { useDispatch, useSelector } from "react-redux"
import { onLoadVideos, onSetActiveVideo } from "../store"
import arcaikaApi from "../api/arcaikaApi"


export const useVideoStore = () => {

    const dispatch = useDispatch()
    const { videos, activeVideo } = useSelector(state => state.video)

    const startLoadingVideos = async () => {
        try {
            const { data } = await arcaikaApi.get('/video')
            dispatch(onLoadVideos(data))
        } catch (error) {
            console.log(error)
        }
    }

    const setActiveVideo = (videoId) => {
        dispatch(onSetActiveVideo(videoId))
    }

    return {
        // properties
        videos,
        activeVideo,

        //metodos
        startLoadingVideos,
        setActiveVideo
    }
}
