import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Ingredients from '../Ingredients/Ingredients';

const MealDetails = () => {
    const { MealID } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
                .then(res => res.json())
                .then(data => setMeal(data.meals[0]));
        }
        fetchData();
    }, [MealID]);
    console.log(meal);
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        let tmp = `strIngredient${i}`;
        let tmp2 = `strMeasure${i}`;
        const tmpObj = { key: i, ingredientImg: meal[tmp], ingredientAmout: meal[tmp2] };
        if (meal[tmp] && meal[tmp2]) {
            ingredients.push(tmpObj);
        }
    }
    console.log(ingredients);
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10">
            <div className="md:col-span-full text-center content-center">
                <strong className="text-4xl py-5">{meal.strMeal}</strong>
            </div>
            <div className="col-span-2">
                <img className="rounded-xl w-full" src={meal.strMealThumb} alt="" />
                <p>

                </p>
            </div>
            <div className="grid md:grid-cols-4 md:gap-10 col-span-2">
                {
                    ingredients.map(ingr => <Ingredients key={ingr.key} ingredients={ingr}></Ingredients>)
                }
            </div>
        </div>
    );
};

export default MealDetails;