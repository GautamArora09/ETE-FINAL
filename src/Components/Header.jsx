import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
        <header>
        <div class="header-left">
            <a href="#" class="menu-btn">
                <div class="w3schools-logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png" />
                </div>
            </a>
            <a href="https://www.w3schools.com/videos/index.php" class="menu-btn " id="Tutorial-btn">
                Tutorials
                <i className="fa-solid fa-caret-down"></i>
            </a>
            <a href="https://www.w3schools.com/videos/index.php" class="menu-btn " id="references-btn">
                References
                <i className="fa-solid fa-caret-down "></i>
            </a>
            <a href="https://www.w3schools.com/videos/index.php" class="menu-btn " id="exercises-btn">
                Exercises
                <i class="fa-solid fa-caret-down" className="menu-btn"></i>
            </a>
            <a href="https://www.w3schools.com/videos/index.php" class="menu-btn" id="video-btn">
                Videos
            </a>
            <div class="menu-btn" id="Menu-btn-Mobile">
                Menu
                <i class="fa-solid fa-caret-down" className="menu-btn"></i>
            </div>
        </div>
        <div class="header-right">
            <div class="toggleLightDark btn">
                <i class="fa-solid fa-circle-half-stroke"></i>
            </div>
            <div class="toggleTranslate">
                <i class="fa-solid fa-earth-europe"></i>
            </div>
            <div class="toggle_Search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <a href="https://www.w3schools.com/pro/index.php" class="btn btn-link bg-black" id="upgrade-btn">
                Upgrade
            </a>
            <a href="https://campus.w3schools.com/collections/course-catalog" class="btn btn-link bg-pink"
                id="getCertified">
                Get Certified
            </a>
            <a href="https://www.w3schools.com/spaces/" class="btn btn-link bg-yellow" id="freeWebsite">
                Free Website
            </a>
            <a href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com"
                class="btn btn-link bg-green" id="login-btn">
                Log in
            </a>
        </div>
        </header>
    </>
  )
}
