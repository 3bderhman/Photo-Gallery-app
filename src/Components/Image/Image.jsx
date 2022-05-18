import React, { useContext, useState} from 'react';
import { PhotoContext } from '../Context/PhotoContext';
import $ from 'jquery';
import Search from '../Search/Search';

function Image() {
    
    const {photo} = useContext(PhotoContext)
    const [image, setImage] = useState(null);
    const [data, setData] = useState(null);

    const openModal = (e)=> {
        $(".portfolio-modal").slideToggle(500);
        if(data){
            let sourceData = data.filter((i) => i.id == e.target.id );
            setImage(sourceData[0]);  
        }
        else{
            let sourcephoto = photo.filter((i) => i.id == e.target.id );
            setImage(sourcephoto[0]);
        }
    }  
    const closeModal = ()=>{
        $(".portfolio-modal").slideToggle(500);
        setImage(null);
    }
    const getData = (info)=>{
        setData(info);
    }
    return (
        <>
            <Search onChange={getData}/>
            <div className="portfolio">
            {data ? <>
                <div div className="row py-5">
                    {data.map((pic, index) => 
                        <div key={index} className="col-md-3">
                            <div className="portfolio-img">
                                <img src={pic.webformatURL} alt={pic.tags} />
                                <div id={pic.id} className="protfolio-item" onClick={openModal}>
                                    <i id={pic.id} className="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                </> :<>
                    <div div className="row py-5">
                        {photo.map((pic, index) => 
                            <div key={index} className="col-md-3">
                                <div className="portfolio-img">
                                    <img src={pic.webformatURL} alt={pic.tags} />
                                    <div id={pic.id} className="protfolio-item" onClick={openModal}>
                                        <i id={pic.id} className="fas fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>}
                <div className="portfolio-modal">
                    <div className="portfolio-modal-icon">
                        <div className='container'>
                            <i className="fas fa-times" onClick={closeModal}></i>
                        </div>
                    </div>  
                    <div className="modal-body"> 
                        {image && <img src={image.largeImageURL} className="modal-img" alt={image.tags} />}
                    </div>   
                </div>
            </div>
        </>
    )
}

export default Image