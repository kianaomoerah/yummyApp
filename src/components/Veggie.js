import { useEffect, useState } from "react";
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    useEffect(() => {

        getVeggie();

    },[] )

    const getVeggie = async () => {

        const check = localStorage.getItem("veggie");
        
        if(check){
            setVeggie(JSON.parse(check));
        }else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    return (
        <List>
            <Wrapper>
                <h3>Our Vegetarian Picks:</h3>
                <p>Click or drag to see more:</p>
                <Splide options={{
                    perPage:3,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '5vw',
                    breakpoints: {

                        1015: {
                            perPage: 2,
                        },

                        670: {
                            gap: '15vw',
                            perPage:1,
                        }
                    }
                }}>
                    {veggie.map((recipe) => {
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
        margin: 10px 0px;
        font-style: italic; 
    }
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;

    h3 {
        @media (max-width: 465px) {
            font-size: 1.25rem;
        }
    }
`;

const Card = styled.div`
    min-height: 300px;
    min-width: 300px;
    border-radius: 30px;
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

    @media (max-width: 1675px) {
       min-height: 250px;
       min-width: 250px; 
    }

    @media (max-width: 1200px) {
        min-height: 200px;
        min-width: 200px;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute; 
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Veggie