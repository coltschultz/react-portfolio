import React from 'react'
import coverImage from "../../assets/cover/colt.png";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <div className="my-2">
        <p>
        I graduated in 2017 with a BA in Finance from Texas A&M University - San Antonio. After a couple of years
        of entrepreneurship, I decided to formalize my experience with web development and learn more by taking 
        a coding bootcamp. 
        </p>
        <p>
          Currently, I am employed as a full stack developer for an insurance company in San Antonio, Texas.
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

    </section>
  )
}

export default About