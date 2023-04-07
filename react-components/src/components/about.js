import React from 'react';



function About() {
    return (
        <div className="container mt-4 bg-dark p-5 " id='about'>
            <div className="row">
            
                <div className="col m-5">
                    <div className="card bg-transparent text-white border-0">
                        <div className="card-body infos">
                            <h3 className="card-title mb-3">About  <span className='text-info-emphasis'> Our</span></h3>
                            <h1 className="card-subtitle mb-3">Lorem, ipsum dolor sit amet</h1>
                            <h3 className="card-title fs-4 mb-3">Lorem, ipsum dolor sit amet</h3>
                            <p className="card-text fs-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias alias aspernatur
                                odio veniam exercitationem ratione et! Animi ipsam rerum natus neque ex, voluptatem incidunt vero, 
                                itaque cum odio ea.
                            </p>
                            <button type="button" class="btn btn-info btn-lg text-white fs-4">Read more</button>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
   
  
    );
}
  export default About;