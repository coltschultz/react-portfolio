import React, { useState } from 'react';
import './PhotoList.css';

const PhotoList = ({ category }) => {
  const [photos] = useState([
      {
      url: "https://ancient-tor-23586.herokuapp.com/",
      git: "https://github.com/jen2ags/Med-Portal",
      category: "commercial",
      name: "MedPortal",
      description: "A collaborative full stack appointment scheduling portal.",
      photo: "https://coltschultz.github.io/portfolio/assets/img/medportal.png",
      
      },
      {
      url: "https://www.southernstarmga.com",
      git: "#",
      category: "commercial",
      name: "Southern Star MGA",
      description: "A landing page designed for an insurance managing general agency that I maintain as a part of my current job duties.",
      photo: "https://coltschultz.github.io/portfolio/assets/img/ssmga.jpg",
      
      },
      {
      url: "https://www.liconainsurance.com",
      git: "#",
      category: "commercial",
      name: "Licona Insurance Group",
      description: "A landing page designed for a retail insurance agency that I maintain as a part of my current job duties.",
      photo: "https://coltschultz.github.io/portfolio/assets/img/licona.jpg",
      
      },
      {
      url: "#",
      git: "https://github.com/coltschultz/charge-on-the-run",
      category: "commercial",
      name: "Charge On the Run",
      description: "An MVP web app that allows utilized Google Maps SDK to allow users to find charging stations nearby or in any given city.",
      photo: "https://coltschultz.github.io/portfolio/assets/img/charge.png",
      
      },
      {
        url: "#",
        git: "https://github.com/coltschultz/pro-readme-gen-node",
        category: "commercial",
        name: "README Generator",
        description: "Simple node CLI to generate a README.md file that includes licensing options.",
        photo: "https://github.com/coltschultz/pro-readme-gen-node/raw/main/screenshot.png",
        
      },
      {
        url: "#",
        git: "https://github.com/coltschultz/easy-express-employee-tracker",
        category: "commercial",
        name: "Employee Manager",
        description: "Simple CLI to manage employees and managers.",
        photo: "https://github.com/coltschultz/easy-express-employee-tracker/raw/main/screenshot.png",
        
      }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const postURL =  function (image) {
    if (image.url != '#') {
    return <button href={image.url} variant="primary" style={{marginRight: 10}}>View Deployed</button>  
    }
  }

  const postGit =  function (image) {
    if (image.git != '#') {
    return <button href={image.git} variant="primary">View Github</button>  
    }
  }

  const classes = `card`;

  return (
    <div>
      <div className="flex-row">

        {currentPhotos.map((image, i) => (

          <div className="cardz" style={{padding: 5, margin: 5}}>
              <a href="https://ancient-tor-23586.herokuapp.com/">
              <img className="cardz-img-top" src={image.photo} alt="Screenshot of Application" />
              </a>

              <article className="card-body">
                <h1 className="card-title">{image.name}</h1>
                <p className="card-text">{image.description}</p>

                {postURL(image)}
                {postGit(image)}
              </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
