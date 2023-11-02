import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVideoStore } from '../../hooks'
import { Title, VideoCard } from '../components'
import { text } from '../../content/text'



export const HomePage = () => {
    const { startLoadingVideos, videos } = useVideoStore()

    useEffect(() => {
        startLoadingVideos()
    }, [])

    return (
        <div className='bg-fondo py-14 min-h-screen'>
            <div className='h-full w-11/12 mx-auto'>
                <div className='mb-6'>
                    <Title title={text.title} />
                    <Link className='text-xl underline text-violet-400 hover:text-violet-700 pl-6' to='/feed'>{text.link}</Link>
                </div>

                <div className='h-full flex flex-wrap flex-col sm:flex-row justify-between'>
                    {
                        videos.filter(item => item.favorite === true).map(video => (
                            <VideoCard key={video.id} {...video} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
