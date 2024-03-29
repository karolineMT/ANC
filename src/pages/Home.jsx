import React from 'react';
import Header from '../components/Header';
import Herosection from '../components/Herosection';
import './Home.css';


function Home() {
    return (
        <div className="home d-flex flex-column">
            <div>
                <Header />
                <Herosection />
            
                
                
            </div>
            
           
        </div>
    );
}

export default Home;
