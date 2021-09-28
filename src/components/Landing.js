import React from 'react';

//importing styled componetns
import { BackGroundContainer, HeroButton, Paragraph } from './LandingStyled';
import { HeroInformationContainer } from './LandingStyled';
import {Link} from 'react-router-dom'; //Extra


//import background image to ne used
import bgImage from '../images/bg-image.webp';


// This component will render the landing page contents in container.
const Landing = ()=>{
    return(
    <BackGroundContainer img={bgImage}>
        <HeroInformationContainer>
          <Paragraph>Welcome to the Company Goals Room </Paragraph>
           <Link to="/goals">
               <HeroButton aria-label='Hero button'>Join Room</HeroButton>
           </Link>
        </HeroInformationContainer>
    </BackGroundContainer>

    )
}
export default Landing