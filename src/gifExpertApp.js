import React, { useState } from 'react'
import { AddCategorys } from './components/AddCategorys'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategorys setCategories={ setCategories } />           
            <ol>
                {
                    categories.map( category => {
                      return <GifGrid 
                                    key={category}
                                    category={ category }
                                />
                    })
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp