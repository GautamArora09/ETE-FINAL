import React from 'react'
import "./ProUser.css"
export default function ProUser() {
  return (
    <>
        <section class="bg-black becomeProUser">
        <div class="becomeaPro-container">
            <h1 className='h1'>Become a PRO User</h1>
            <p class="becomePro_unlock">And unlock powerful features:</p>
            <div class="becomeFeature_list">
                <div class="becomeFeature_items">
                    <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
                    <p className='p'>Browse W3Schools without ads</p>
                </div>
                <div class="becomeFeature_items">
                    <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
                    <p className='p'>Website hosting (Includes <a href="https://www.w3schools.com/spaces/index.html">Spaces</a> PRO)
                    </p>
                </div>
                <div class="becomeFeature_items">
                    <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
                    <p className='p'>Access to our <a href="https://www.w3schools.com/videos/index.php"> HTML Video Tutorial</a></p>
                </div>
            </div>
            <button class="bg-green btn"><a href="">Learn More</a></button>
        </div>
        </section>
    </>
  )
}
