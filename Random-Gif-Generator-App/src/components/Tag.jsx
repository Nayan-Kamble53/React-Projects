// import axios from "axios";
import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_medium.url;
    //     setGif(imageSource); 
    //     setLoading(false);
    // }

    // useEffect(() => { //this is the best way to fetch API
    //     fetchData();
    // });

    const {gif, loading, fetchData} = useGif(tag);

    return (
        <div className="flex flex-col items-center gap-y-5 mt-[15px] w-7/12 bg-blue-500 rounded-lg border border-black">
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
                Random {tag} GIF
            </h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} alt="gif" width="450"/>)
            }

            <input 
                type="text"
                onChange={(event) => setTag(event.target.value)} //instead of changeHandler we can write this
                className="w-10/12 text-lg py-2 rounded-lg mb-[13px] text-center"
                value={tag}
            />

            <button onClick={() => fetchData(tag)}
                className="bg-white w-5/12 h-10 uppercase rounded-md mb-[20px] text-slate-900 font-semibold text-[18px] opacity-50"
            >
                Generate
            </button>
        </div>
    )
}