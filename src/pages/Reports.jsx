import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Reports() {
  return (
    <main className='container-fluid justify-content-between'>
        <Header/>
   
      <div className='row'>

      <h1>Reports</h1>
      <Sidebar/>
      
    </div>
    </main>
 
  )
}

export default Reports
