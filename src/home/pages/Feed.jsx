import { useEffect, useState } from 'react'
import { useVideoStore } from '../../hooks'
import { Pagination, VideoCard } from '../components'

export const Feed = () => {
    const { videos, startLoadingVideos } = useVideoStore()
    const [cuantity, setCuantity] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        startLoadingVideos()
    }, [])

    const endIndex = currentPage * cuantity
    const startIndex = endIndex - cuantity
    const totalPages = Math.ceil(videos.length / cuantity)

    const videoShow = videos.slice(startIndex, endIndex)

    return (
        <div className='bg-fondo py-14 min-h-screen'>
            <div className='h-full w-11/12 mx-auto'>
                <div className='h-full flex flex-wrap flex-col sm:flex-row justify-between' id={videos.id}>
                    {
                        videoShow.map(video => (
                            <VideoCard key={video.id} {...video} />
                        ))
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <Pagination
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </div>
    )
}
