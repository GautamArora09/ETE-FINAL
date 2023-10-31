import React from 'react'
import "./CodeGame.css"
const CodeGame = () => {
  return (
    <>
        <section class="codeGame_container">
        <h1>Code Game</h1>
        <p>Help the Lynx collect pine cones!</p>
        <img src="https://www.w3schools.com/images/w3lynx_200.png" />
        <div class="codeGameBtn_container">
            <button class="bg-black"><a href="https://www.w3schools.com/codegame/index.html">Play Game</a></button>
        </div>
        </section>
    </>
  )
}
export default CodeGame