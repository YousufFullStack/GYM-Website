import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from "../assets/images/1.svg"
import fimage2 from "../assets/images/2.svg"
import fimage3 from "../assets/images/3.svg"
import fimage4 from "../assets/images/4.svg"

const Feature = () => {
  return (
    <div id='features'>
<h1>FEATURES</h1>
<div className='a-container'>
    <Featurebox image={fimage1} title="WeightLifting" description="The clock is ticking. Are you becoming the person you want to be?"/>
    <Featurebox image={fimage2} title="Specific Muscle" description="One Specifeic Muscle can greatly impact your body"/>
    <Featurebox image={fimage3} title="Flex Your Muscle" description="Those amateur umpires are certainly flexing their fangs tonight.."/>
    <Featurebox image={fimage4} title="Cardio Exercise" description="For me, training is my meditation, my yoga, biking all rolled into one."/>




</div>

    </div>
    
  )
}

export default Feature