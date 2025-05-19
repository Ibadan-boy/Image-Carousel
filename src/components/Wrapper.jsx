import { useState } from "react";
import { MY_DATA } from "../image-data";

export default function Wrapper({ image, title, description }){
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const currentItem = MY_DATA[currentIndex];

    function handleNext(){
       setCurrentIndex((prevItem) => {
        if(prevItem < MY_DATA.length-1){
            return prevItem+1;
        }else{
            return 0
        }
       });
    }

    function handlePrev(){
        setCurrentIndex((prevItem)=>{
            if(prevItem>0){
                return prevItem-1;
            }else{
                return MY_DATA.length -1;
            }
        })
    }


    return(
        <div className="wrapper">
        <div className="image">
         <img src= {currentItem.image} alt="an image is here" />
        </div>

        <p>
            <button onClick={handlePrev}>Previous</button>
            <button>Full-screen</button>
            <button onClick={handleNext}>Next</button>
         </p>
        
        <div className="main">
            <h2>{currentItem.title}</h2>
            <p>{currentItem.description}</p>
        </div>
    </div>
    )
    
}