import React from 'react'
import "./About.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
  <Header />
    <main className="about-container">
      <div className="pg-header">
        <div className="container">
          <h1>About</h1>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-4">
            <h2>Why Choose Us.</h2>
            <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
          </div>
          <div className="col-lg-4">
            <h2>Our Mission.</h2>
            <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
          </div>
          <div className="col-lg-4">
            <h2>What We Do.</h2>
            <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
          </div>
        </div>
      </div>
    </main>
   <Footer />
    </>
  )
}




export default About