import React from 'react';
import data from './data.js';

// TravelCard component definition
const TravelCard = ({ img, title, country, googleMapsLink, dates, text }) => (
  <div className="travel-card">
    <div className="travel-card__image">
      <img src={img.src} alt={img.alt} className="travel-card__img" />
    </div>
    <div className="travel-card__content">
      <h3 className="travel-card__title">{title}</h3>
      <div className="travel-card__location">
        <i className="fas fa-map-marker-alt travel-card__map-icon"></i>
        <p className="travel-card__country">{country}</p>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="travel-card__link">View on Google Maps</a>
      </div>
      <p className="travel-card__dates">{dates}</p>
      <p className="travel-card__text">{text}</p>
    </div>
  </div>
);

// TravelJournal component definition
const TravelJournal = () => (
  <div className="travel-journal">
    {data.map(item => (
      <TravelCard
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    ))}
  </div>
);

export default TravelJournal;
