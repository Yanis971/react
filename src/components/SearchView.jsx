import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlbumsData } from '../redux/album/albumSelector'

const SearchView = () => {

    // states :


    // recupere les infos du slice
    const [searchAlbum] = useSelector(selectAlbumsData);











    return (
        <>

            <SearchBar />
            <SearchView />


        </>
    )
}

export default SearchView