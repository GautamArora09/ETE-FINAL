import React from 'react'
import "./ExerciseAndQuiz.css"
const ExerciseAndQuiz = () => {
  return (
    <>
        <div class="section_exercise">
        <div class="section_exercise_container">
            <h1>Exercises and Quizzes</h1>
            <p>Test your skills!</p>
            <div class="section_exercise_quiz">
                <a href="https://www.w3schools.com/exercises/index.php" class="bg-green">Exercises</a>
                <a href="https://www.w3schools.com/quiztest/default.asp" class="bg-yellow">Quizzes</a>
            </div>
        </div>
    </div>
    </>
  )
}
export default ExerciseAndQuiz
