import React from 'react'
import "../css/Button.css"
import InitialTransition from './animation'
import "../css/PrintArt.css"




const Footer = () => {
    return (
        <>
        <InitialTransition />
       <h1 className= "intro">Who are we ? </h1>
       <h2 className= "intro">We are Click Art & Print, a platform to help you discover and collect art. Our mission is to make art more accesible for everyone. We aspire to make the idea of collecting art attractive for younger generations, make it cool and part of a lifestyle. We want to share the power of art to move, and freely express ourselves. </h2>
        <h1 className= "intro">Our Service</h1>
       <h2 className= "intro">We are a group of art enthusiasts who want to provide a platform for anyone who is searching for inspiration and beauty in their daily life. Each of our photographs is carefully selected by our experts.
 </h2>
 {/* <h1> "We aspire to cultivate an interest in art for younger generations" </h1> */}
        </>
    )
}

export default Footer
