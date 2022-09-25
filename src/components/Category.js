import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {

    return (
        <nav>
            <ul>
                <li>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </li>
                <li>
                    <FaHamburger />
                    <h4>American</h4>
                </li>
                <li>
                    <GiNoodles />
                    <h4>Thai</h4>
                </li>
                <li>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </li>
            </ul>
        </nav>
    )
};

export default Category