import React from 'react'
import { useParams } from 'react-router-dom';

const DetailArtist = () => {

    //on récupère l'id de l'artiste (depuis l'url)
    const params = useParams();
    const id = params.id;
    console.log(id);

    return (
        <div>DetailArtist</div>
    )
}

export default DetailArtist