import { Outlet } from "react-router-dom"
import NavbarComponent from "./NavbarComponent"
import { useCallback, useState } from "react";
import BaiVietComponent from "./BaiVietComponent";
import GenreComponent from "./GenreComponent"

function LayoutComponent () {
    const [genre, setGenre] = useState("")
    const handleGenreId = (stt) => {
        if (stt !="Home"){
            setGenre("stt");
        }
    }

    const RenderTrangchu = useCallback(() => {
        if (genre != ""){
            return <GenreComponent genre={genre}/>
        }
    },[genre])

    return (
        <>
            <NavbarComponent handleGenreId={handleGenreId} />
            <RenderTrangchu />
            <Outlet />

        footer
        </>
    )
}
export default LayoutComponent