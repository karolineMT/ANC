import React from 'react'

function Card(props = {title}) {
  return (
    <div>
      <div className="card bg-success order-card text-white">
        <div className="card-body">
          <h6 className="mb-4">{title}</h6>
          <h2 className="text-end"><i className="fa fa-rocket float-start"></i><span></span></h2>
          <p className="mb-0"><span className="float-end"></span></p>
        </div>
      </div>
    </div>
  )
}

export default Card
