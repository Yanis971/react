import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlbumsData } from '../redux/album/albumSelector'
import AlbumCard from './AlbumCard';


const SearchView = () => {

    // recupere les infos du slice
    const { searchAlbum } = useSelector(selectAlbumsData);
    // on recup les infos du slicePlayer pour alimenter le composant albumCard
    const { isPlaying, activeSong } = useSelector(state => state.player)


    const dataAlbum = searchAlbum['hydra:member'];
    console.log(dataAlbum)

    return (
        <>
            {dataAlbum && dataAlbum.length > 0
                ? <h2 className='font-bold text-3xl text-white text-left mt-10 mb4'>Resultat des album</h2>
                : null
            }
            <div className='flex flex-wrap'>
                {dataAlbum && dataAlbum.map((data, index) => (
                    <div className='p-3 m-3'
                        key={`album_${index}`}
                    >
                        <AlbumCard
                            data={data}
                            songs={data?.songs}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            index={0}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchView