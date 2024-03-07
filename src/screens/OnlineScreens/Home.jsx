import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../../redux/album/albumSlice'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/Loader/PageLoader'
import { AiFillAlert } from "react-icons/ai";
import AlbumCarl from '../../components/AlbumCarl'

const Home = () => {
  //on récupère le hook useDispatch de react-redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums()) //permet de mettre à jour les states albums et loading de albumSlice
  }, [dispatch])

  //on récupère notre selector pour avoir accès au données
  const { albums, loading } = useSelector(selectAlbumsData);
  const dataAlbum = albums['hydra:member']
  console.log('data albums', loading);

  return (
    loading ? <PageLoader /> :
      <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
          Tous les albums
        </h2>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
          {/* mapper dataAlbums: va parcourir chaque album */}
          {dataAlbum && dataAlbum.map((data, index) => {
            return (
              <AlbumCarl
                // on passe key en parametre pour que chaque enfant soit unique
                key={index}
                // on lui passe data comme props de l'album
                data={data}
              />
            )
          })}
        </div>
      </div>
  )
}

export default Home