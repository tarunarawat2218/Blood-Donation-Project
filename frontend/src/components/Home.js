import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation.

export default function Home(){
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1400x350/?blood,donation" className="d-block w-100" alt="" />
                    </div>
                </div>
            </div>

        
            <div className="home">
                <a href="https://en.wikipedia.org/wiki/Blood_donation">
                    <h1 className="donate">Donate Blood</h1>
                </a>
                <p className="blood">
                You need a big heart and free mind for blood donation and not money and strength"
        "Every drop of blood is like a breath for someone! Donate blood"
       "Never refuse to donate blood if u can, as you may be the next needy"
        "Blood donation never asks to be rich or poor, any healthy person can donate blood”
       
         A life may depend on a gesture from you, you can save many lives with a bottle of blood.
                </p>
                {/* Additional content */}
            </div>
            
            
        </div>
    );
};


