import React from 'react';
import './Material.css';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// images
import img from '../../assets/photo.jpg';

function Material() {
  const data = [
    {
      id: 1,
      title: "Salle cardio",
      img: '../../assets/photo.jpg'
    },
    {
      id: 2,
      title: "Salle cardio",
      img: '../../assets/photo.jpg'
    }
  ];

  return (
    <Carousel>
      { data.map((d) => (
        <div key={d.id}>
          <img src={img} width={100} height={200} alt="" />
          <p>{ d.title }</p>
        </div>
      )) }
    </Carousel>
  );
}

export default Material;