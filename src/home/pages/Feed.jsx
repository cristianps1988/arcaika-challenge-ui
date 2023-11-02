import { useEffect, useState } from 'react'
import { useVideoStore } from '../../hooks'
import { Pagination, VideoCard, VideoModal } from '../components'
import { Link } from 'react-router-dom'
import { text } from '../../content/text'

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
        <>
            <div className='bg-fondo py-14 min-h-screen'>
                <div className='h-full w-11/12 mx-auto'>
                    <Link className='text-xl underline text-violet-400 hover:text-violet-700 pl-6' to='/'>{text.linkBack}</Link>

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
            <VideoModal />
        </>
    )
}
