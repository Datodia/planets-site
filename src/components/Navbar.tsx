import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from 'react'

export const Navbar = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <Wrapper>
            <Title>The Planets</Title>
            <Links>
                <LINK to={"/"}>Mercur</LINK>
                {/* <LINK to={"/venus"}>Vener</LINK>
                <LINK to={"/earth"}>Marth</LINK>
                <LINK to={"/marth"}>Mars</LINK> */}
            </Links>
            <Button onClick={handleClick}><Img src="assets/icon-hamburger.svg" /></Button>
            {show ?
                <Burger>
                    <BurgLink onClick={handleClick} to={"/"}>
                        <div>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'red' }}></div>
                            <h4>Mercury</h4>
                        </div>
                        <div><h1> next</h1></div>
                    </BurgLink>
                </Burger>
                : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media screen and (min-width: 700px){
        width: 665px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (min-width: 1000px){
        width: 900px;
        justify-content: space-between;
        flex-direction: row;
    }
    
`
const Links = styled.div`
    
`

const LINK = styled(Link)`
    color: red;
    font-size: 30px;
    text-decoration: none;
    /* display: none; */
`

const Title = styled.h1`
    font-size: 28px;
    color: white;
    font-family: 'Antonio';
    letter-spacing: -1px;
    font-weight: 400;
`

const Button = styled.button`
    background: none;
    border: none;

    @media screen and (min-width: 700px){
        display: none;
    }
`
const Img = styled.img`
    
`

const Burger = styled.div`
    margin-top: 5vh;
    height: 95vh;
    width: 100%;
    border: 2px solid red;
    position: absolute;
    @media screen and (min-width: 700px){
        display: none;
    }
`

const BurgLink = styled(Link)`
        display: flex;
        justify-content: space-between;
    /* display: none; */
`