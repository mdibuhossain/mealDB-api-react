import React from 'react';
import { useHistory } from 'react-router';

const Meal = (props) => {
    const { idMeal, strMealThumb, strMeal } = props.food;
    const history = useHistory();
    const visitFoodHandler = () => {
        console.log('bal');
        history.push(`/${idMeal}`);
    }
    return (
        <div className="w-85 rounded-md overflow-hidden relative flex justify-center items-center">
            <div onClick={visitFoodHandler} className="bg-gray-900 w-full h-full absolute z-10 opacity-0 hover:bg-gray-900 hover:opacity-70 duration-300 ease-in-out flex justify-center items-center cursor-pointer">
                <h1 className="text-3xl text-white">{strMeal}</h1>
            </div>
            <img src={strMealThumb} alt="meal" />
        </div >
    );
};

export default Meal;