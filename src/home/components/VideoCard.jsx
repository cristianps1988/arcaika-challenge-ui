import { FaHeart, FaComment, FaShare, FaTiktok } from "react-icons/fa";
import { numRounder } from '../../helpers'
import { useUiStore, useVideoStore } from "../../hooks";

export const VideoCard = ({ author, title, video, videoStats, videoId }) => {
    const { likes, comments, shares } = videoStats;
    const { setActiveVideo } = useVideoStore()
    const { openVideoModal } = useUiStore()

    const onShowVideo = () => {
        setActiveVideo(videoId)
        openVideoModal()
    }

    return (
        <div className=" bg-white h-full rounded-lg sm:w-[44%] xl:w-[23%] m-3 hover:cursor-pointer" onClick={onShowVideo}>
            <div className="p-4">
                <h2 className="font-bold mb-3 align-middle"><FaTiktok className="inline text-2xl" /> @{author.uniqueId}</h2>
                <p className="text-sm line-clamp-2	">{title}</p>
            </div>
            <img src={video.cover} alt="Imagen" />
            <div className="flex flex-row gap-4 justify-center p-6">
                <p className="align-middle p-0 m-0"><FaHeart className="text-orange-400 inline m-0 p-0" /> {numRounder(likes)}</p>
                <p className="align-middle p-0 m-0"><FaComment className="text-purple-400 inline m-0 p-0" /> {numRounder(comments)}</p>
                <p className="align-middle p-0 m-0"><FaShare className="text-slate-700 inline m-0 p-0" /> {numRounder(shares)}</p>
            </div>
        </div>
    )
}
