import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");
    const q = keyword.split(" ").join("")

    q.replace(/test/i,'cool').toLowerCase()

   
    //console.log(q)


    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=1`)
            const { data } = await response.json();

if (data.length>0) {
     setGifUrl(data[0]?.images?.downsized_medium?.url)

} else {
    setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')

}

           
        
        } catch (error) {
            setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')
        }
    }

    useEffect(() => {
       if(keyword) fetchGifs();
    }, [keyword])

    return gifUrl
}

export default useFetch;