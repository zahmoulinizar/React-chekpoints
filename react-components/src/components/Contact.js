import React from 'react'

function Contact() {
  return (
   
        <div className="container  bg-dark p-5" id='contact'>
        <div className="row ">
            <div className="col-3">
            </div>
            <div className="col-5 m-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="user name" />
            </div>
        </div>
        <div className="row">
            <div className="col-3">
           
            </div>
            <div className="col-5 m-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        </div>
        <div className="row">
            <div className="col-3">
             
            </div>
            <div className="col-5 m-3">
                <input type="section" className="form-control" id="exampleFormControlInput1" placeholder="sujet" />
            </div>
        </div>
        <div className="row">
            <div  className="col-3 text-white fs-5 ">
            </div>
            <div className="col-5 m-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="message" ></textarea>
            </div>
        </div>
        <div className="row">
            <div  className="col-5 text-white fs-5 ">
            </div>
            <div className="col-5 m-3">
                <button type="button" class="btn btn-success">Success</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
