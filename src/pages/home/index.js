import React from 'react'

import {} from "./styles.css"
import contrastImage from "../../assets/img/contrast.jpg"

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
        </div>
    )
}