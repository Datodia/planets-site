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
    const [active2, setActive2] = useState<string>("MERCURY")

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

    const handleClick3 = (item: { name: string }) => {
        setActive2(item.name)
    }

    const Owerview = numbers.map((item) => {
        return (
            <OverViewTxt
                style={{ color: active === item.num ? 'white' : 'gray', borderBottom: active === item.num ? '3px solid #2D68F0' : 'none' }}
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
            <Line></Line>
            {!show && <Line2></Line2>}

            <Wrapper>
                <Title>The Planets</Title>
                <Links>
                    {planets.map((item) => {
                        return (
                            <LINK
                                to={item.to}
                                style={{ color: active2 === item.name ? 'white' : '', borderTop: active2 === item.name ? `4px solid ${item.color}` : '' }}
                                onClick={() => { handleClick3(item) }}
                            >{item.name}</LINK>)
                    })}
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

const Line = styled.div`
    height: 1px;
    transform: translateY(64px);
    width: 100%;
    background-color: #838391;
    @media screen and (min-width: 700px){
        transform: translateY(124px);
    }
    @media screen and (min-width: 920px){
        transform: translateY(68px);
    }
`

const Line2 = styled.div`
    height: 1px;
    transform: translateY(124px);
    width: 100%;
    background-color: #838391;
    @media screen and (min-width: 700px){
        display: none;
    }
`

const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 16px 0;
    @media screen and (min-width: 700px){
        width: 665px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (min-width: 920px){
        width: 910px;
        flex-direction: row;
        justify-content: space-between;
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
    @media screen and (min-width: 920px){
        width: 665px;
        align-items: center;
        margin: 0;
    }
`

const LINK = styled(Link)`
    color: red;
    font-size: 11px;
    font-family: 'League Spartan';
    color: #838391;
    font-weight: 700;
    text-decoration: none;
    border-top: 4px solid transparent;
    @media screen and (min-width: 700px){
        height: 25px;
        margin-top: -25px;
        padding-top: 20px;
        letter-spacing: 1.5px;
    }
    @media screen and (min-width: 920px){
        height: 35px;
        margin-top: -32px;
        padding-top: 27px;
        letter-spacing: 1.5px;
    }

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