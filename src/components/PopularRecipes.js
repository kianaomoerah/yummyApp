import { useEffect, useState } from "react";
import styled from "styled-components"

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

    return <List>

        <h3>Popular Picks</h3>

            <Wrapper>

            {popular.map((recipe) => {
                return (

                    <li key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                        </Card>
                    {/* <li key={recipe.id}> */}
                        {/* <p>{recipe.title}</p> */}
                    </li>
                // </Wrapper>
                )
            })} 

            </Wrapper>  
    </List>

    // return <ul>

    //     <h3>Popular Picks</h3>

    //     <Wrapper>
    //         {popular.map((recipe) => {
    //             <li key={recipe.id}>
    //                 <Card>
    //                     <p>{recipe.title}</p>
    //                 </Card>

    //             </li>
    //         })
    //         }
    //     </Wrapper>

    // </ul>

}

const List = styled.ul`
    list-style: none;
`

const Wrapper = styled.div`
    margin: 4rem 0rem;

`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img{
        border-radius: 2rem;

    }
`

export default PopularRecipes