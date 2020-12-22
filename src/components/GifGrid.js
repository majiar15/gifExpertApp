import React, { useEffect } from 'react'

export const GifGrid = ({category}) => {
    // useEffect hace que se ejecute un metodo solo una vez en el compoente
    useEffect( ()=>{
        getGif();
    },[]);
    const getGif =  async()=>{
        let url ="https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=OzJy6pHWqXx0KDYhqKGXTlnsYLn2IPKe";
        const resp = await fetch(url);
        const  {data}  = await resp.json();
        
        const gifs = data.map( img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });
        console.log(gifs)

    };
    
    
    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
