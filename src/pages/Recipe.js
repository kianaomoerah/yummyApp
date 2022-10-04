import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {

    let params = useParams();

    const [ details, setDetails ] = useState({});
    const [ activeTab, setActiveTab ] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailsData = await data.json();
        setDetails(detailsData);
    }

    useEffect(()=> {
        fetchDetails()
        // eslint-disable-next-line 
    }, [params.name])

    return (
        <DetailWrapper>
            <RecipeInfo>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title}/>
            </RecipeInfo>
            <Info>
                <ButtonWrapper>
                    <Button className={activeTab === "instructions" ? "active" : ""}onClick={()=> setActiveTab("instructions")}>Instructions</Button>
                    <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
                </ButtonWrapper>

                {activeTab === "instructions" && (
                <RecipeDetails>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </RecipeDetails>
                )}

                {activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => {
                        return (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    })}
                </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
        text-align: center;
    }

    ul {
        margin-top: 2rem;
    }

    @media (max-width: 1590px) {
        flex-direction: column;
        align-items: center;
    }
`

const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 20px;
        max-width: 400px;
    }
`

const RecipeDetails = styled.div`
    p {
        margin: 15px 0px;
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    margin: 10px 4px;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;

    @media (max-width: 720px) {
        padding: .75rem 1rem;
    }

    @media (min-width: 1590px) {
        margin-right: 2rem;
        margin-bottom: 4rem;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
`

const Info = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        line-height: 1.5rem;
    }

    li {
        font-size: 1rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }

    @media (min-width: 1590px) {
        margin-left: 10rem;
    }
`

export default Recipe; 