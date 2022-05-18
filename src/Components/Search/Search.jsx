import React, { useState } from 'react';
import axios from 'axios';

function Search(props) {
    const [text, setText] = useState();
    const [photo, setPhoto] = useState([]);

    async function getPhoto(){
        let {data} = await axios.get(`https://pixabay.com/api/?key=27468515-5c9189dff12f41b0f9ace183c&q=${text}&image_type=photo`)
        setPhoto(data.hits)
    }
    
    const searchPhoto = async (e) => {
        setText(e.target.value);
        await getPhoto();
        props.onChange(photo)
    }
  return (
    <>
        <div className='my-4'>
            <div>
                <input type="search" className='form-control' placeholder="Search..." onChange={searchPhoto}></input>
            </div>
        </div>
    </>
  )
}

export default Search