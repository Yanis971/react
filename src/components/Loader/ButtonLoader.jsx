import React from 'react'
import { Audio } from 'react-loader-spinner'

const ButtonLoader = () => {
    return (
        <Audio
            height="100"
            width="100"
            color="rgba(30, 215, 96, 1)"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    )
}

export default ButtonLoader