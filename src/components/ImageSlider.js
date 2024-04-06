import { useEffect, useState } from "react";
import {data} from "../utils/ImageData"
const ImageSlider=()=>{
    const [imageIndex,setImageIndex]=useState(0);
    const handleNext=()=>{
        setImageIndex((imageIndex+1)%data.length);
    }
    const handlePrevious=()=>{
        setImageIndex(imageIndex===0?data.length-1:imageIndex-1);
    }
    useEffect(()=>{
        const timer =setTimeout(()=>{
            handleNext();
            
        },150)
        return ()=> (
            clearTimeout(timer)
        )
    },[imageIndex]);
    return(
        <div className="flex flex-wrap justify-center font-sans px-10">
            <span className="px-5 flex items-center justify-center cursor-pointer" onClick={handlePrevious}>Previous</span>
            {data.map((image,i)=>(
            <img src={image} 
            key={i} 
            
            className={"w-[300px] h-[500px] object-contain " + (imageIndex==i ? "block" : "hidden")} alt="wallpaper"/>))}
            <span className="px-5  flex items-center justify-center cursor-pointer" onClick={handleNext}>Next</span>
        </div>
    )
}

export default ImageSlider;