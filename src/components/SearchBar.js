import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [ input, setInput ] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input 
                onChange={(e)=> setInput(e.target.value)}
                type="text" 
                value={input}/>
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0 auto;
    display: flex;
    justify-content: center;

    div {
        max-width: 600px;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        padding: 5px 40px;
        margin: 5px auto;
        font-size: 1.5rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: relative;
        top: 64%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`


export default SearchBar;