import React from 'react'

import {} from "./styles.css"
import home1 from "../../assets/img/home_1.jpg"
import home2 from "../../assets/img/home_2.jpg"

export const Home = () => {
    return (
        <div>
            <div className="header-contrast">
                <div className="header-background">
                    {
                        //<img src={ contrastImage } className="header-image" />
                    }
                </div>

                <div className="header-content">
                    <h1>Loren Inpulse</h1>

                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque 
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                        vitae dicta sunt explicabo
                    </p>
                </div>
            </div>

            <div className="container">
                <h1>Loren Inpulse</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="container-left">
                    <img src={home1} alt="Jogando Rugby" />
                </div>
                

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="container-right">
                    <img src={home2} alt="Jogando Rugby Denovo" className="right" />
                </div>
            </div>
        </div>
    )
}