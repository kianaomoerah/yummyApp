import { useEffect, useState } from "react";

const PopularRecipes = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {

        getPopular();

    },[] )

    const getPopular = async () => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setPopular(data.recipes)
        // console.log(data.recipes)

    };

    return <ul>
        {popular.map((recipe) => {
            return (
                <li key={recipe.id}>
                    <p>{recipe.title}</p>
                </li>
            )
        })}    
    </ul>

}

export default PopularRecipes