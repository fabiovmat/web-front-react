import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

import './styles.css'

function Landing(){

return (

<div id="page-landing">

<div id="page-landing-content" className="container">

<div id="logo-container">

<img src={logoImg} alt="Proffy" id="scr"/>
<h2>Sua plataforma de estudos Online .</h2>

<img 
    src={landingImg} 
    alt="Plataforma de estudos" 
    className="hero-image"
/>

<div className="buttons-container">
    <a href="" className="study">
        <img src={studyIcon} alt="Estudar" />
        Estudar
        </a>


        <a href="" className="give-classes">
        <img src={giveClassesIcon} alt="Estudar"/>
        Estudar

    </a>


</div>

<span className="total-connections">

Total de 200 conexões ja realizadas<img src={purpleHeartIcon} alt="Coração roxo"/>

</span>




</div>

</div>


</div>


)

}

export default Landing;