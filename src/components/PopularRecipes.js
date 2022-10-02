import { useEffect, useState } from "react";
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

const PopularRecipes = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {

        getPopular();

    },[] )

    const getPopular = async () => {

        const check = localStorage.getItem("popular");
        
        if(check){
            setPopular(JSON.parse(check));
        }else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    };

    return ( 
        <List>
            <Wrapper>
                <h3>Popular Picks:</h3>
                <p>Click or drag to see more:</p>
                <Splide options={{
                    perPage:4,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                    breakpoints: {

                        1410: {
                            perPage: 3,
                        },

                        1026: {
                            perPage: 2,
                            gap: '10px'
                        },

                        755: {
                            perPage: 1,
                            gap: '10px',
                        }

                    }
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })} 
                </Splide>
            </Wrapper>  
        </List>
    );
}

const List = styled.ul`
    list-style: none;

    p {
        font-style: italic;
        margin: 10px 0px;
    }
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;

    h3 {
        @media (max-width: 465px) {
        font-size: 1.25rem;
        margin: 2rem 0rem 1.5rem 0rem;
        }
    }
`;

const Card = styled.div`
    min-height: 225px;
    min-width: 225px;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute; 
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default PopularRecipes