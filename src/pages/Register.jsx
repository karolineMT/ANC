import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Register() {
  return (
    <main className='container-fluid justify-content-between'>
      
    <Header />
    <div className = 'row'>

    <h1>Register Women</h1>
    <Sidebar />
    <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="details personal">
              <span className="title">Personal Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" required />
                </div>

                {/* Other personal details inputs */}
              </div>
            </div>

            {/* Personal Details Form Section */}
          </div>

          <div className="col-md-6">
            <div className="details ID">
              <span className="title">Identity Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>ID Type</label>
                  <input type="text" className="form-control" placeholder="Enter ID type" required />
                </div>

                {/* Other identity details inputs */}
              </div>

              <button className="btn btn-primary mt-3">
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>

            {/* Identity Details Form Section */}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="details address">
              <span className="title">Address Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Address Type</label>
                  <input type="text" className="form-control" placeholder="Permanent or Temporary" required />
                </div>

                {/* Other address details inputs */}
              </div>
            </div>

            {/* Address Details Form Section */}
          </div>

          <div className="col-md-6">
            <div className="details family">
              <span className="title">Family Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Father Name</label>
                  <input type="text" className="form-control" placeholder="Enter father name" required />
                </div>

                {/* Other family details inputs */}
              </div>

              <div className="buttons">
                <button className="btn btn-secondary">
                  <span className="btnText">Back</span>
                  <i className="uil uil-navigator"></i>
                </button>
                
                <button className="btn btn-primary">
                  <span className="btnText">Submit</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>

            {/* Family Details Form Section */}
          </div>
        </div>
      </form>   
      
    </div>
    </main>
  )
}

export default Register
