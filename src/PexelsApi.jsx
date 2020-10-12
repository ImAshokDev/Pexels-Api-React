import React, { useState } from 'react';
// import { createClient } from 'pexels';
import './App.css';



export default function PexelsApi() {
const [searchInput, setSearchInput]=useState('');
const [data, setData]=useState('');

const onSubmit= async()=>{
    // console.log("text value :", seachInput)

   

    // const client = createClient('563492ad6f917000010000015d4ab16e4e3c4f35a0bc6ca621a416f2');
  // const query = seachInput;

    // client.photos.search({ query, per_page: 12 }).then(res => {
    // // console.log("response data: ", res.photos)
    // setData(res.photos);
    // });

    //  const pexelUrl="https://api.pexels.com/v1/search?query=nature&per_page=1"
  
//  headers:{
//             'Authorization':'563492ad6f917000010000015d4ab16e4e3c4f35a0bc6ca621a416f2',
//         }


   const datas = await fetch(`https://api.pexels.com/v1/search?query=${searchInput}`,{
       headers:{
        'Authorization':'563492ad6f917000010000015d4ab16e4e3c4f35a0bc6ca621a416f2',
       }
   })

   const objData =await datas.json();
   console.table([
                    {
                        id: "1",
                        key: "value",
                        count: 2,
                        },
                     {
                         id: "2",
                         key: "value2",
                             count: 22,
                       },
                       {
                            id: "3",
                            key: "value3",
                                count: 5,
                               },
                     ])

    if(objData){
        //    console.log("dataaaaa", objData.photos[0].src)
           setData(objData)

        }
   
}

    return (
        <div className="App">
            <h1>Photo get from Pexels api</h1>
            <input type="text" name="seachInput" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
            <button type="button" onClick={onSubmit}>Get Image</button>
            <div className="gallery">
             {data.length>0 ? (
                   data.photos.map((pic, index)=>(
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
