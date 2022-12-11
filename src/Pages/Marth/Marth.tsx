import styled from "styled-components"
import data from '../../data.json'
import { Props } from "../../Interfaces";

export const Marth = ({ overview, structure, surface, surfaceTxt, setOverview, setStructure, setSurface, setSurfaceTxt }: Props) => {
    const Data = data[3]

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
                    {surface && <ImgGeology src={Data.images.geology} />}
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
                        <OverviewBox overview={overview} surfaceTxt={surfaceTxt} onClick={handleClick}  >
                            <OverviewNum>01</OverviewNum>
                            <OverviewTxt>OVERVIEW</OverviewTxt>
                        </OverviewBox>
                        <OverviewBox2 structure={structure} onClick={handleClick2} >
                            <OverviewNum>02</OverviewNum>
                            <OverviewTxt>INTERNAL STRUCTURE</OverviewTxt>
                        </OverviewBox2>
                        <OverviewBox3 surfaceTxt={surfaceTxt} onClick={handleClick3} >
                            <OverviewNum>03</OverviewNum>
                            <OverviewTxt>SURFACE GEOLOGY</OverviewTxt>
                        </OverviewBox3>
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
    @media screen and (min-width: 920px){
        width: 910px; 
    }
`
const Wrapper = styled.div`
 @media screen and (min-width: 920px){
        display: flex;
        justify-content: space-between;
    }
    
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
    @media screen and (min-width: 700px){
        width: 180px;
    }
    @media screen and (min-width: 920px){
        width: 290px;
    }
`

const ImgGeology = styled.img`
    width: 30px;
    position: absolute;
    top: 90px;
    @media screen and (min-width: 700px){
        width: 100px;
        top: 130px;
    }

    @media screen and (min-width: 920px){
        width: 150px;
        top: 310px;
    }
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
    @media screen and (min-width: 920px){
        width: 350px;
    }
`

const Info = styled.div`
    @media screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
       align-items: flex-end
    }
    @media screen and (min-width: 920px){
        flex-direction: column;
        gap: 40px;
    }
`

const Overview = styled.div`
    display: none;
    @media screen and (min-width: 700px){
       display: flex;
       flex-direction: column;
       width: 281px;
    }
    @media screen and (min-width: 920px){
        width: 350px;
    }
`
const OverviewBox = styled.div <Props | any>`
    display: flex;
    align-items: center;
    border: 1px solid #838391;
    height: 40px;
    gap: 15px;
    padding-left: 20px;
    margin-bottom: 16px;
    background-color: ${props => props.overview && !props.surfaceTxt ? '#2d68f0' : 'none'};
    &:hover{
        background-color: #38384F;
    }
`
const OverviewBox2 = styled.div <Props | any>`
    display: flex;
    align-items: center;
    border: 1px solid #838391;
    height: 40px;
    gap: 15px;
    padding-left: 20px;
    margin-bottom: 16px;
    background-color: ${props => props.structure ? '#2d68f0' : 'none'};
    &:hover{
        background-color: #38384F;
    }
`
const OverviewBox3 = styled.div <Props | any>`
    display: flex;
    align-items: center;
    border: 1px solid #838391;
    height: 40px;
    gap: 15px;
    padding-left: 20px;
    margin-bottom: 16px;
    background-color: ${props => props.surfaceTxt ? '#2d68f0' : 'none'};
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
    @media screen and (min-width: 700px){
        font-size: 14px;
    }
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
    @media screen and (min-width: 700px){
        font-size: 70px;
    }
`

const Desc = styled.p`
    margin-top: 16px;
    font-size: 11px;
    font-family: 'League Spartan';
    font-weight: 400;
    color: white;
    text-align: justify;
    line-height: 179%;
    @media screen and (min-width: 700px){
        font-size: 14px;
    }
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
    @media screen and (min-width: 700px){
        font-size: 14px;
    }
`
const Link = styled.a`
    font-size: 12px;
    font-family: 'League Spartan';
    font-weight: 700;
    color: white;
    @media screen and (min-width: 700px){
        font-size: 14px;
    }
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
    @media screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
    }
    @media screen and (min-width: 920px){
       margin-top: 60px;
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
    @media screen and (min-width: 920px){
        width: 210px;
        height: 128px;
    }
`
const BoxTitle = styled.h1`
    font-size: 8px;
    font-family: 'League Spartan';
    font-weight: 700;
    color: #838391;
    @media screen and (min-width: 920px){
        font-size: 11px;
    }
`
const BoxResult = styled.h1`
    font-size: 20px;
    font-family: 'Antonio';
    font-weight: 400;
    color: white;
    @media screen and (min-width: 920px){
       font-size: 35px;
    }
`