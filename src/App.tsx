import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Mercur } from './Pages/Mercury/Mercur'
import { Venus } from './Pages/Venus/Venus'
import { Earth } from './Pages/Earth/Earth'
import { Marth } from './Pages/Marth/Marth'
import { Jupert } from './Pages/Jupeter/Jupert'
import { Saturn } from './Pages/Saturn/Saturn'
import { Uran } from './Pages/Uran/Uran'
import { Neptun } from './Pages/Neptune/Neptun'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'


function App() {

  const [overview, setOverview] = useState<boolean>(true)
  const [strucrute, setStrucrute] = useState<boolean>(false)
  const [surface, setSurface] = useState<boolean>(false)
  const [surfaceTxt, setSurfaceTxt] = useState<boolean>(false)

  return (
    <Container>
      <Router>
        <Navbar
          setOverview={setOverview}
          setStructure={setStrucrute}
          setSurface={setSurface}
          setSurfaceTxt={setSurfaceTxt}
        />
        <Routes>
          <Route path='/' element={
            <Mercur
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/venus' element={
            <Venus
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/earth' element={
            <Earth
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/marth' element={
            <Marth
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/jupiter' element={
            <Jupert
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/saturn' element={
            <Saturn
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/uranus' element={
            <Uran
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/neptune' element={
            <Neptun
              overview={overview}
              structure={strucrute}
              surface={surface}
              surfaceTxt={surfaceTxt}
              setOverview={setOverview}
              setStructure={setStrucrute}
              setSurface={setSurface}
              setSurfaceTxt={setSurfaceTxt}
            />}
          />
          <Route path='/*' element={<h1>404</h1>} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App


const Container = styled.div`
`