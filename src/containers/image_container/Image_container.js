import React, {useState} from 'react'
import Imagen from '../imagen/Imagen'
import './image_container.css'
import back from '../../static/navbar/back.jpg'

//TODO el objeto images contendra source

function Image_container({images}){

    const [totalImages, setTotalImages] = useState(images.length);
    const [firstImage, setFirstImage] = useState(0);
    const [middleImage, setMiddleImage] = useState(1);
    const [lastImage, setLastImage] = useState(2);
    const [array, setArray] = useState([]);

    const prevImage = () => {
        if(firstImage == 0) return;
        setMiddleImage(firstImage);
        setLastImage(middleImage)
        setFirstImage(firstImage - 1)

    }

    const nextImage = () => {
        if(lastImage == totalImages-1) return;
        setFirstImage(middleImage);
        setMiddleImage(lastImage);
        setLastImage(lastImage + 1);
    }

    if(totalImages > 0 && totalImages <= 3)
        return <div className="image-container">{images.map((image, i) => <Imagen key={i} source={image.src} />)}</div>;
    else 
        return  <div className="carousel">
                    <img id="prev" src={back} onClick={prevImage}></img>
                    <div className="image-container">
                        <Imagen source={images[firstImage].src} />
                        <Imagen source={images[middleImage].src} />
                        <Imagen source={images[lastImage].src} />
                    </div>
                    <img id="next"src={back} onClick={nextImage}></img>
                </div>
}

export default Image_container;