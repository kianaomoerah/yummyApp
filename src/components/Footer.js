import styled from 'styled-components';
const Footer = () => {

    return (

        <FooterWrapper>
            <p>Developed by Kiana, Bon Appétit! </p>
        </FooterWrapper>
    )

}


const FooterWrapper = styled.footer`

display: flex; 
align-items: center;
flex-direction: column;

    p {
        font-family: "Lobster Two", cursive;
        align-text: center;
        color: purple;
        font-size: 20px; 
    }
`;

export default Footer;