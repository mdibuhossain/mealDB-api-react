import React, { useEffect } from 'react';

const Ingredients = (props) => {
    const { ingredientAmout, ingredientImg } = props.ingredients;
    console.log(ingredientAmout, ingredientImg);
    const imgUrl = `https://www.themealdb.com/images/ingredients/${ingredientImg}.png`;
    return (
        <div className="rounded-b-md overflow-hidden">
            <div className="p-3">
                <img className="w-full h-auto object-cover" src={imgUrl} alt="ingradients" />
            </div>
            <div className="border-t border-blue-600 text-dark w-full text-center">
                <strong>{ingredientAmout}</strong>
            </div>
        </div>
    );
};

export default Ingredients;