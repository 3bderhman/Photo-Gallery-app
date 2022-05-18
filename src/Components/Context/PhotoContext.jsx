import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PhotoContext = createContext([]);

export default function PhotoContextProvider(props) {
    const [photo, setPhoto] = useState([]);
    async function getPhoto(){
        let {data} = await axios.get(`https://pixabay.com/api/?key=27468515-5c9189dff12f41b0f9ace183c&q=yellow+flowers&image_type=photo`)
        setPhoto(data.hits)
    }
    useEffect(() =>{
        getPhoto();
    }, []);

    return (
        <PhotoContext.Provider value={{photo}}>
            {props.children}
        </PhotoContext.Provider>
    )
}