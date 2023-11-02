import { useDispatch, useSelector } from "react-redux"
import { onLoadVideos } from "../store"
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

    // const setActiveEvent = (calendarEvent) => {
    //     dispatch(onSetActiveEvent(calendarEvent))
    // }

    // const startSavingEvent = async (calendarEvent) => {
    //     try {
    //         if (calendarEvent.id) {
    //             //actualizar
    //             await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
    //             dispatch(onUpdateEvent({ ...calendarEvent }))
    //             return
    //         }
    //         //crear
    //         const { data } = await calendarApi.post('/events', calendarEvent)
    //         dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }))
    //     } catch (error) {
    //         Swal.fire('Ups... something went wrong', error.response.data?.msg, 'error')
    //     }
    // }

    // const startDeletingEvent = async () => {

    //     try {
    //         await calendarApi.delete(`/events/${activeEvent.id}`)
    //         dispatch(onDeleteEvent())
    //     } catch (error) {
    //         console.log(error)
    //         Swal.fire('Ups... something went wrong', error.response.data?.msg, 'error')
    //     }
    // }

    return {
        // properties
        videos,
        activeVideo,

        //metodos
        // setActiveEvent,
        // startSavingEvent,
        // startDeletingEvent,
        startLoadingVideos,
    }
}
