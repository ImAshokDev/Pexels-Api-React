import React, { useState } from 'react';
import { createClient } from 'pexels';
import './App.css';



export default function PexelsApi() {
const [seachInput, setSearchInput]=useState('');
const [data, setData]=useState('');


const onSubmit= async()=>{
    // console.log("text value :", seachInput)

    const client = createClient('563492ad6f917000010000015d4ab16e4e3c4f35a0bc6ca621a416f2');
    const query = seachInput;

    client.photos.search({ query, per_page: 12 }).then(res => {
    console.log("response data: ", res.photos)
    setData(res.photos)
    });
}

    return (
        <div className="App">
            <h1>Photo get from Pexels api</h1>
            <input type="text" name="seachInput" value={seachInput} onChange={(e)=>setSearchInput(e.target.value)} />
            <button type="button" onClick={onSubmit}>Get Image</button>
            <div className="gallery">
             {data ? (
                   data.map((pic, index)=>(
                    //    console.log("pinnnnn", pic.src.original)
                <div className="gallery-card"  key={index}>
                        <h1>image card</h1>
                   <p>{pic.photographer}</p>
                    <img src={pic.src.tiny} alt="no img" width={200} height={200}  />
                </div>
                   ))
             ):(
            <h1>No images</h1>
             )}
            </div>

        </div>
    )
}
