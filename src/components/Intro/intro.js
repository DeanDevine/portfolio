import React from 'react';
import './intro.css'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Dean Devine</span><br />Junior Software Developer </span>
        <p className="introPara">I'm a beginner fullstack developer based in the Lake District, England.</p>
            </div>
            {/* <img src="" alt="" className="background" /> */}
        </section>
    )
}

export default Intro;
