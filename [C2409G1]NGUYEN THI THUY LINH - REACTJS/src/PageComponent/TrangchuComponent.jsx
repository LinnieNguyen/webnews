import { useCallback, useState } from "react"
import BaiVietComponent from "../Component/BaiVietComponent"
import NavbarComponent from "../Component/NavbarComponent"
import GenreComponent from "../Component/GenreComponent"


function TrangchuComponent () {
    

    const [genre, setGenre] = useState("")
    const handleGenreId = (stt) => {
        if (stt == "Home"){
            setGenre("");
        }else {
            setGenre(stt);
        }    
    }

    const RenderTrangchu = useCallback(() => {
        if (genre == ""){
            return <BaiVietComponent />
        } else {
            return <GenreComponent genre={genre}/>
        }
    },[genre])


 

    return (
        <>
            <NavbarComponent handleGenreId={handleGenreId} />
            <RenderTrangchu />
        </>
    )
}

export default TrangchuComponent