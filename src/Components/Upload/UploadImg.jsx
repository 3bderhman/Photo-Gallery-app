import React, { useState } from 'react'
function UploadImg() {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }
  return (
    <>
      <div className='text-center'>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div>
          { error && <div className="text-danger">{ error }</div>}
          { file && <div>{ file.name }</div> }
        </div>
      </div>
    </>
  )
}

export default UploadImg