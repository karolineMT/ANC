import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Cards() {
    return (
        <main className='container-fluid justify-content-between'>
            <Header />
            <br></br>
            <div className='row'>
                <Sidebar />
                <div className="col-md-8 col-xl-9">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-success order-card text-white">
                                <div className="card-body">
                                    <h6 className="mb-4">Register Woman</h6>
                                    <h2 className="text-end"><i className="fa fa-rocket float-start"></i><span></span></h2>
                                    <p className="mb-0"><span className="float-end"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-success order-card text-white">
                                <div className="card-body">
                                    <h6 className="mb-4">Antenatal Care</h6>
                                    <h2 className="text-end"><i className="fa fa-rocket float-start"></i><span></span></h2>
                                    <p className="mb-0"><span className="float-end"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-success order-card text-white">
                                <div className="card-body">
                                    <h6 className="mb-4">Medical Check</h6>
                                    <h2 className="text-end"><i className="fa fa-rocket float-start"></i><span></span></h2>
                                    <p className="mb-0"><span className="float-end"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-success order-card text-white">
                                <div className="card-body">
                                    <h6 className="mb-4">Reports</h6>
                                    <h2 className="text-end"><i className="fa fa-rocket float-start"></i><span></span></h2>
                                    <p className="mb-0"><span className="float-end"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cards;
