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
 </div>
    );
};


