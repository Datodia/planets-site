import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BurgerProps } from "../Interfaces";
import { numbers } from "../Arrays";

export const Navbar = ({ setOverview, setStructure, setSurface, setSurfaceTxt }: {
    setOverview: React.Dispatch<React.SetStateAction<boolean>>;
    setStructure: React.Dispatch<React.SetStateAction<boolean>>;
    setSurface: React.Dispatch<React.SetStateAction<boolean>>;
    setSurfaceTxt: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [show, setShow] = useState<boolean>(false)
    const [active, setActive] = useState<number>(1)

    const handleClick2 = (item: { num: number, name: string }) => {
        setActive(item.num)
        if (item.name === 'OVERVIEW') {
            setOverview(true)
            setStructure(false)
            setSurface(false)
            setSurfaceTxt(false)
        } else if (item.name === 'STRUCTURE') {
            setStructure(true)
            setOverview(false)
            setSurface(false)
            setSurfaceTxt(false)
        } else {
            setOverview(true)
            setSurface(true)
            setStructure(false)
            setSurfaceTxt(true)
        }
    }

    const Owerview = numbers.map((item) => {
        return (
            <OverViewTxt
                style={{ color: active === item.num ? 'white' : 'gray', borderBottom: active === item.num ? '3px solid red' : 'none' }}
                onClick={() => handleClick2(item)}
            >{item.name}</OverViewTxt>
        )
    })

    const handleClick = (): void => {
        setShow(!show)
    }

    const planets: BurgerProps[] = [
        {
            name: 'MERCURY',
            color: '#DEF4FC',
            handleClick: { handleClick },
            to: '/',
        },
        {
            name: 'VENUS',
            color: '#F7CC7F',
            handleClick: { handleClick },
            to: '/venus'
        },
        {
            name: 'EARTH',
            color: '#545BFE',
            handleClick: { handleClick },
            to: '/earth'
        },
        {
            name: 'MARS',
            color: '#FF6A45',
            handleClick: { handleClick },
            to: '/marth'
        },
        {
            name: 'JUPITER',
            color: '#ECAD7A',
            handleClick: { handleClick },
            to: '/jupiter'
        },
        {
            name: 'SATURN',
            color: '#FCCB6B',
            handleClick: { handleClick },
            to: '/saturn'
        },
        {
            name: 'URANUS',
            color: '#65F0D5',
            handleClick: { handleClick },
            to: '/uranus'
        },
        {
            name: 'NEPTUNE',
            color: '#497EFA',
            handleClick: { handleClick },
            to: '/neptune'
        }

    ]

    const BurgerComp = planets.map((item) => {
        return (
            <BurgLink onClick={handleClick} to={item.to}>
                <PlanetDiv>
                    <Planet style={{ backgroundColor: item.color }}></Planet>
                    <PlanetName>{item.name}</PlanetName>
                </PlanetDiv>
                <Img src='assets/icon-chevron.svg' />
            </BurgLink>
        )
    })




    return (
        <>
            <Wrapper>
                <Title>The Planets</Title>
                <Links>
                    <LINK to={"/"}>MERCUR</LINK>
                    <LINK to={"/venus"}>VENUS</LINK>
                    <LINK to={"/earth"}>EARTH</LINK>
                    <LINK to={"/marth"}>MARS</LINK>
                    <LINK to={"/jupiter"}>JUPITER</LINK>
                    <LINK to={"/saturn"}>SATURN</LINK>
                    <LINK to={"/uranus"}>URANUS</LINK>
                    <LINK to={"/neptune"}>NEPRUNE</LINK>
                </Links>
                <Button onClick={handleClick}><Img src="assets/icon-hamburger.svg" /></Button>
                {show ?
                    <Burger>
                        {BurgerComp}
                    </Burger>
                    : null}
            </Wrapper>
            {!show && <Wrapper2>
                {Owerview}
            </Wrapper2>}

        </>
    )
}


const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 16px 0;
    border-bottom: 1px solid white;
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
const Wrapper2 = styled.div`
    height: 52px;
    width: 327px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid white;
    gap: 43px;
    @media screen and (min-width: 700px){
        display: none;
    }
`

const Links = styled.div`
    display: none;
    width: 100%;
    @media screen and (min-width: 700px){
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
    }
`

const LINK = styled(Link)`
    color: red;
    font-size: 11px;
    font-family: 'League Spartan';
    color: #838391;
    font-weight: 700;
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
    margin-top: 53px;
    height: 120vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    padding-top: 24px;
    background-color: #070724;
    @media screen and (min-width: 700px){
        display: none;
    }
`

const BurgLink = styled(Link)`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        text-decoration: none;
        border-bottom: 1px solid #838391;
        margin: 20px 0;
`
const PlanetDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`

const Planet = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
const PlanetName = styled.h1`
    font-size: 15px;
    color: white;
    font-family: 'League Spartan';
    font-weight: 400;
    letter-spacing: 1.36px;
`

const OverViewTxt = styled.h1`
    font-size: 11px;
    height: 15px;
    color: #838391;
    font-family: 'League Spartan';
    font-weight: 700;
    letter-spacing: 2px;
`