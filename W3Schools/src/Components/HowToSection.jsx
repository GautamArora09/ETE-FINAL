import React from 'react'
import "./HowToSection.css"

const HowToSection = () => {
  return (
    <>
        <section class="howtosection_section">
        <div class="howtoSection_container">
            <h1>How To Section</h1>
            <p>Code snippets for HTML, CSS and JavaScript</p>
            <p>For example, how to create a slideshow:</p>

            <div class="codeEditor_part_container">
                <div class="codeEditor_part_Container_Top">
                    <div class="codeEditor_part_left">
                        <div class="codeEditor_dot " style="background: red;"></div>
                        <div class="codeEditor_dot" style="background: yellow;"></div>
                        <div class="codeEditor_dot" style="background: green;"></div>
                    </div>
                    <div class="codeEditor_part_right">
                        www.w3schools.com/howto/
                    </div>
                </div>
                <div class="howtosection_ImageSlider">
                    <div class="howtoSection_button">
                        <button class="" id="imageSlidePreve"><i class="fa-solid fa-angle-left"></i></button>
                        <button class="" id="imageSlideNext"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                    <div class="howtosection_list">
                        <div class="howtoSecton_item">
                            <p>1/3</p>
                            <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
                            <p>Caption Text</p>
                        </div>
                        <div class="howtoSecton_item">
                            <p>2/3</p>
                            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
                            <p>Caption Two</p>
                        </div>
                        <div class="howtoSecton_item">
                            <p>3/3</p>
                            <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
                            <p>Caption Three</p>
                        </div>
                    </div>
                    <div class="howtosection_active_image">
                        <div class="imageSlideActive" id="imageSlideActive1"></div>
                        <div class="imageSlideActive" id="imageSlideActive2"></div>
                        <div class="imageSlideActive" id="imageSlideActive3"></div>
                    </div>
                </div>

            </div>
            <div class="howtosection_bottom">
                <div class="verticalBox"></div>
                <a href="https://www.w3schools.com/howto/default.asp">
                    Learn How To
                </a>
            </div>
        </div>
    </section>
    </>
  )
}
export default HowToSection