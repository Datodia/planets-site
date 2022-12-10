import { useState } from "react";
import styled from "styled-components"
import data from '../../data.json'

export const Mercur = ({ overview, structure, surface, surfaceTxt, setOverview, setStructure, setSurface, setSurfaceTxt }: {
    overview: boolean;
    structure: boolean;
    surface: boolean;
    surfaceTxt: boolean;
    setSurfaceTxt: React.Dispatch<React.SetStateAction<boolean>>;
    setOverview: React.Dispatch<React.SetStateAction<boolean>>;
    setStructure: React.Dispatch<React.SetStateAction<boolean>>;
    setSurface: React.Dispatch<React.SetStateAction<boolean>>;

}) => {
    const Data = data[0]


    // const [active, setActive] = useState<boolean>(false)

    const handleClick = () => {
        setOverview(true)
        setStructure(false)
        setSurface(false)
        setSurfaceTxt(false)
    }
    const handleClick2 = () => {
        setStructure(true)
        setOverview(false)
        setSurface(false)
        setSurfaceTxt(false)
    }
    const handleClick3 = () => {
        setOverview(true)
        setSurface(true)
        setStructure(false)
        setSurfaceTxt(true)
    }

    return (
        <Container>
            <Wrapper>
                <ImgDiv>
                    {overview && <Img src={Data.images.planet} />}
                    {structure && <Img src={Data.images.internal} />}
                    {surface && <Img style={{ width: '30px', position: 'absolute', top: '90px' }} src={Data.images.geology} />}
                </ImgDiv>
                <Info>
                    <InfoDiv>
                        <Name>{Data.name}</Name>
                        {overview && !surfaceTxt && <Desc>{Data.overview.content}</Desc>}
                        {structure && <Desc>{Data.structure.content}</Desc>}
                        {surfaceTxt && <Desc>{Data.geology.content}</Desc>}

                        <SourceDiv>
                            <SrcText>Sourse :</SrcText>
                            {overview && !surfaceTxt && < Link href={Data.overview.source} target="_blank">Wikipedia</Link>}
                            {structure && <Link href={Data.structure.source} target="_blank">Wikipedia</Link>}
                            {surfaceTxt && <Link href={Data.geology.source} target="_blank">Wikipedia</Link>}
                            <SrcImg src="assets/icon-source.svg" />
                        </SourceDiv>
                    </InfoDiv>
                    <Overview>
                        <OverviewBox onClick={handleClick} style={{ backgroundColor: overview && !surfaceTxt ? '#2D68F0' : 'transparent' }} >
                            <OverviewNum>01</OverviewNum>
                            <OverviewTxt>OVERVIEW</OverviewTxt>
                        </OverviewBox>
                        <OverviewBox onClick={handleClick2} style={{ backgroundColor: structure ? '#2D68F0' : 'transparent' }}>
                            <OverviewNum>02</OverviewNum>
                            <OverviewTxt>INTERNAL STRUCTURE</OverviewTxt>
                        </OverviewBox>
                        <OverviewBox onClick={handleClick3} style={{ backgroundColor: surfaceTxt ? '#2D68F0' : 'transparent' }}>
                            <OverviewNum>03</OverviewNum>
                            <OverviewTxt>SURFACE GEOLOGY</OverviewTxt>
                        </OverviewBox>
                    </Overview>
                </Info>
            </Wrapper>
            <Details>
                <Box>
                    <BoxTitle>ROTATION TIME</BoxTitle>
                    <BoxResult>{Data.rotation}</BoxResult>
                </Box>
                <Box>
                    <BoxTitle>REVOLUTION TIME</BoxTitle>
                    <BoxResult>{Data.revolution}</BoxResult>
                </Box>
                <Box>
                    <BoxTitle>RADIUS</BoxTitle>
                    <BoxResult>{Data.radius}</BoxResult>
                </Box>
                <Box>
                    <BoxTitle>AVERAGE TEMP.</BoxTitle>
                    <BoxResult>{Data.temperature}</BoxResult>
                </Box>

            </Details>
        </Container >
    )
}



const Container = styled.div`
    width: 327px;
    margin: auto; 
    @media screen and (min-width: 700px){
       width: 665px;
    }
`
const Wrapper = styled.div`
    
`
const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 90px;
`
const Img = styled.img`
    width: 111px;
`

const InfoDiv = styled.div`
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 700px){
       width: 339px;
       align-items: flex-start;
    }
`

const Info = styled.div`
    @media screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
       align-items: flex-end
    }
`

const Overview = styled.div`
    display: none;
    @media screen and (min-width: 700px){
       display: flex;
       flex-direction: column;
       width: 281px;
    }
`
const OverviewBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #838391;
    height: 40px;
    gap: 15px;
    padding-left: 20px;
    margin-bottom: 16px;
    &:hover{
        background-color: #38384F;
    }
`
const OverviewNum = styled.p`
    font-size: 9px;
    font-family: 'League Spartan';
    color:#838391;
    font-weight: 700;
    letter-spacing: 2px;
`

const OverviewTxt = styled.p`
    font-size: 12px;
    font-family: 'League Spartan';
    color:white;
    font-weight: 700;
    letter-spacing: 1.9px;
`


const Name = styled.h1`
    font-size: 40px;
    font-family: 'Antonio';
    font-weight: 400;
    color: white;
`

const Desc = styled.p`
    margin-top: 16px;
    font-size: 11px;
    font-family: 'League Spartan';
    font-weight: 400;
    color: white;
    text-align: justify;
    line-height: 179%;
`
const SourceDiv = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

const SrcText = styled.p`
    font-size: 12px;
    font-family: 'League Spartan';
    font-weight: 400;
    color: white;
`
const Link = styled.a`
    font-size: 12px;
    font-family: 'League Spartan';
    font-weight: 700;
    color: white;
`

const SrcImg = styled.img`
    
`

const Details = styled.div`
    margin-top: 28px;
    margin-bottom: 40px;
    @media screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
    }
`
const Box = styled.div`
    height: 48px;
    border: 1px solid #838391;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 8px;
    @media screen and (min-width: 700px){
       height: 88px;
       width: 164px;
       flex-direction: column;
       justify-content: center;
        gap: 4px;
       align-items: flex-start;
    }
`
const BoxTitle = styled.h1`
    font-size: 8px;
    font-family: 'League Spartan';
    font-weight: 700;
    color: #838391;
`
const BoxResult = styled.h1`
    font-size: 20px;
    font-family: 'Antonio';
    font-weight: 400;
    color: white;
`