import React from 'react'
import '../styles/Home.sass';
import news_one from "../media/news_one.png"
import news_two from "../media/news_two.png"

function Body() {

    return (
    <body>
        
            <div class="hero">
            <h1>FEATURED NEWS & UPDATES</h1>
                <div class="news">
                
                <div class="card">
                <img src={news_one} class="card-img-top" alt="..."/>
                    <div class="card-body" >
                    <h5 class="card-title">Rocking Revamp Patch Notes</h5>
                    v.235 - Rocking Revamp is now live on August 31. Click here to read the patch notes!
                    
                    </div>
                <a href="#" class="button">READ MORE</a>
                </div>
                <div class="card">
                <img src={news_two} class="card-img-top" alt="..."/>
                    <div class="card-body" >
                    <h5 class="card-title">v.235 - Rocking Revamp Update Preview</h5>
                    Step into Maple World as a pop star and participate in a series of events designed around character growth.
                    </div>
                <a href="#" class="button">READ MORE</a>
                </div>
                </div>
            </div>
            
    </body>

    )
}
 
export default Body