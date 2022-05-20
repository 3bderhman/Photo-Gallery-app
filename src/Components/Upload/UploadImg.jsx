import React, { useState } from 'react'
function UploadImg() {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  
  const imageHandler = (img) => {
    const types = ['image/png', 'image/jpeg'];
    let selected = img;
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }
  const changeHandler = (e) => {
    const photo = e.target.files[0]
    imageHandler(photo)
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setSelectedImg(reader.result)
      }
    }
    reader.readAsDataURL(photo)
  };

  return (
    <>
      <div className='text-center'>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div>
          { error && <div className="text-danger">{ error }</div>}
        </div>
      </div>
      { selectedImg && <div>
          <p className='h4 border-bottom'>uploaded Img</p>
          <img src={selectedImg} alt={ file.name } className='selectedImg' />
      </div>}
    </>
  )
}
export default UploadImg