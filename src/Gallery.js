import React, {useState} from  'react';
import CloseIcon from '@mui/icons-material/Close';
import "./gallery.css";
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import img5 from "./img/img5.jpg"
import img6 from "./img/img6.jpg"

const Gallery = () => {


    const [model, setModel] = useState(false)
    const [tempImg, setTempImg] = useState("")



    let data = [
        {
            id: 1, 
            imgSrc: img1,
        },
        {
            id: 2, 
            imgSrc: img2,
        },
        {
            id: 3, 
            imgSrc: img3,
        },
        {
            id: 4, 
            imgSrc: img4,
        },

        {
            id: 5, 
            imgSrc: img5,
        },

        {
            id: 6, 
            imgSrc: img6,
        }

    ]

    const getImage = (imgSrc) => {
        setTempImg(imgSrc)
        setModel(true)

    }

    return (

        <>
        <div className={model? "model open" : "model"}>
            <img src={tempImg}/>
            <CloseIcon onClick={() => setModel(false)}/>
        </div>

        <div className='gallery'>
            {data.map((items, index) =>{
                return (
                    <div className= "pics" key={index} onClick={()=> getImage(items.imgSrc)}>
                        <img src={items.imgSrc} style={{width: "100%"}}/>


                    </div>
                )
            })}

        </div>
        
        </>
    )
}

export default Gallery;