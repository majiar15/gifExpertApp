import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// import { getGif } from '../helper/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const { data:images, loading } = useFetchGif(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading..</p>}
            <div className="card-grid animate__animated animate__fadeIn">
                
                { images.map((img) => <GifGridItem key={img.id} { ...img }/> ) }              

            </div>
        </>
    );
}
