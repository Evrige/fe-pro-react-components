import React from 'react';
import MainList from "./MainList";
import {mainText} from "./mainText";


const Section = () =>{
    return (
        <section className="posts">
            <div className="container">
                <h1>
                    Posts
                </h1>
                <MainList items={mainText}/>
            </div>

        </section>
    )
}
export default Section;