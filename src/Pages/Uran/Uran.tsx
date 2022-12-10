import styled from "styled-components"
import data from '../../data.json'

export const Uran = ({ overview, structure, surface, surfaceTxt }: {
    overview: boolean;
    structure: boolean;
    surface: boolean;
    surfaceTxt: boolean;
}) => {
    const Data = data[7]
    return (
        <Container>
            <Wrapper>
                <ImgDiv>
                    {overview && <Img src={Data.images.planet} />}
                    {structure && <Img src={Data.images.internal} />}
                    {surface && <Img style={{ width: '30px', position: 'absolute', top: '90px' }} src={Data.images.geology} />}
                </ImgDiv>
                <Info>
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
const Info = styled.div`
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

`
const Box = styled.div`
    height: 48px;
    border: 1px solid #838391;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 8px;
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