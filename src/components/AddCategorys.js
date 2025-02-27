import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategorys = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cat => [inputValue, ...cat ] );
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategorys.propTypes = {
    setCategories: PropTypes.func.isRequired
};