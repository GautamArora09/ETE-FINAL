import React from 'react'
import About from './Components/Homepage/About'
import Footer from './Components/Footer'
import KickStart from './Components/KickStart'
import WebTemplate from './Components/WebTemplate'
import ExerciseAndQuiz from './Components/ExerciseAndQuiz'
import CodeGame from './Components/CodeGame'
import ColorPicker from './Components/ColorPicker'
import ProUser from './Components/ProUser'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <ProUser />
      <ColorPicker />
      <CodeGame />
      <ExerciseAndQuiz />
      <WebTemplate />
      <KickStart />
      <Footer />
    </>
  )
}

export default App
