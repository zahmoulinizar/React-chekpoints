import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/m_5df488ca15281296b1962725.jpg';
import img2 from '../images/3.jpg'
import img3 from '../images/3798-slide-visuel-1600x560.jpg'
import img4 from '../images/1.jpg';
import img5 from '../images/5.jpg'
import img6 from '../images/3798-slide-visuel-1600x560.jpg'


function Gallerie(){
    return (

        <div className="container text-center" id='portfolio'>
            <h2 className="card-title mb-3 text-center text-white fs-1"> Images <span className='text-info-emphasis'>Gallerie</span></h2>

            <div className="row">

                <div className="col">
                    <img src={img1} width="90%" height="90%" className='rounded m-4'/>

                </div>
                <div className="col">
                    <img src={img2} width="90%" height="90%" className='rounded m-4'/>
                </div>
                <div className="col">
                    <img src={img3} width="90%" height="90%" className='rounded m-4'/>
                </div>
            </div>
            <div className="row">

                <div className="col">
                    <img src={img4} width="90%" height="90%" className='rounded m-4'/>
                </div>
                <div className="col">
                    <img src={img5} width="90%" height="90%" className='rounded m-4'/>
                </div>
                <div className="col">
                    <img src={img6} width="90%" height="90%" className='rounded m-4'/>
                </div>
            </div>
         </div>


        
    );

}
export default Gallerie;
