import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [searchValue]);
    const searchHandler = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }
    return (
        <div className="">
            <div className="py-6">
                <input onChange={searchHandler} className="border border-gray-200 block mx-auto rounded md:w-3/5 w-full px-4 py-2 text-xl" placeholder="Search Meal" />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 justify-items-center">
                {
                    foods.map(food => <Meal key={food.idMeal} food={food}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;