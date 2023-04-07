import React from 'react'
import img1 from '../images/3798-slide-visuel-1600x560.jpg'
import img2 from '../images/glass-woman.jpg'
import img3 from '../images/plaza.jpg'

function Home() {
  return (
    <div id="carouselExampleAutoplaying" class=" container carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="slider1" />
            </div>
            <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="slider2" />
            </div>
            <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="slider3" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
   
  )
}

export default Home
