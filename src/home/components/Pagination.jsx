import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {

    const onPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
    }

    return (
        <div className="flex">
            <button onClick={onPrevPage} className="mr-6 text-slate-900 font-bold py-2 px-4 rounded disabled:text-slate-400 disabled:cursor-not-allowed" disabled={currentPage == 1}><FaChevronLeft className="inline text-4xl" /></button>
            <h3 className="text-2xl self-center ">{currentPage} / {totalPages}</h3>
            <button onClick={onNextPage} className="ml-6 text-slate-900 font-bold py-2 px-4 rounded disabled:text-slate-400 disabled:cursor-not-allowed" disabled={currentPage == totalPages} ><FaChevronRight className="inline text-4xl" /></button>
        </div>
    )
}
