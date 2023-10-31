import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <footer class="footer">
        <div class="footer-top">
            <div class="menu">
                <a href="https://www.w3schools.com/quiztest/default.asp" id="topFooterMenu1">Quizzes</a>
                <a href="https://www.w3schools.com/exercises/index.php" id="topFooterMenu2">Exercises</a>
                <a href="https://shop.w3schools.com/collections/course-catalog" id="topFooterMenu3">Certificates</a>
                <a href="https://www.w3schools.com/pro/index.php">Upgrade</a>
                <a href="https://www.w3schools.com/spaces/index.html">Space</a>
                <a href="https://support.w3schools.com/">Support</a>
                <a href="https://campus.w3schools.com/pages/newsletter">Newsletter</a>
            </div>
            {/* <div class="forumandAbout">
                <a href="https://www.w3schools.com/forum/default.asp">Forum</a>
                <a href="https://www.w3schools.com/about/default.asp">About</a>
            </div> */}
        </div>
        <div class="socialMedia">
            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-discord"></i></a>
        </div>
        <div class="footer_des">
            <p>W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve
                reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid
                errors, but we cannot warrant full correctness of all content. While using this site, you agree to have
                read and accepted our <a href="https://www.w3schools.com/about/about_copyright.asp">terms of use</a> <a href="https://www.w3schools.com/about/about_privacy.asp">cookie and privacy policy</a>
                <a href="https://www.w3schools.com/about/about_copyright.asp">Copyright 1999-2022</a> by Refsnes Data. All Rights Reserved.</p>
        </div>
        <div class="footer_like">
            <i class="fa-solid fa-thumbs-up"></i>
        </div>
    </footer>
    </>
  )
}

export default Footer
