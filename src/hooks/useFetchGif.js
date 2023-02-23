import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async () => {
        const newImage = await getGifs(category);
        setimages(newImage);
        setIsLoading(false)
    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return {
        images,
        isLoading
    }
}
