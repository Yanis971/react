import React from 'react'
import { albumUrl, apiRoot } from '../constants/apiConstant'
import { Link } from 'react-router-dom'

const AlbumCarl = ({ data }) => {

    // constant qui recupre l'image de l'album
    const imgPath = `${albumUrl}/${data.imagePath}`

    return (
        <div
            className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all 
            ease-out duration-500 animate-slideup rounded-lg cursor-pointer'>
            <div className='relative w-full h-56 flex flex-col'>
                <Link to='/' state={{ params: data }}>
                    <img
                        src={imgPath}
                        alt={data.tile}
                        className='card-sh rounded-lg object-cover'
                    />
                </Link>
                <div className='mt-4 flex flex-col'>
                    <p className='text-white text-xl truncate font-bold'>{data.tile}</p>
                    <p className='text-sm text-white truncate '>{data.artist.name}</p>

                </div>


            </div>
        </div >
    )
}

export default AlbumCarl