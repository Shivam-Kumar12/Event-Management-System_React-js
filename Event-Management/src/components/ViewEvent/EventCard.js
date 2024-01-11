import React, { useState, useEffect, useRef} from 'react';
import './EventCard.css';
import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCard = ({ title, description }) => {
  const [imageUrls, setImageUrls] = useState([]);
  
  const cardRef = useRef(null);
  useEffect(() => {
   
      const newImageUrls = [
        `https://picsum.photos/400/300?random=${uuidv4()}`,
        `https://picsum.photos/400/300?random=${uuidv4()}`,
        `https://picsum.photos/400/300?random=${uuidv4()}`,
        // Add more image URLs here
      ];
      setImageUrls(newImageUrls);
  }, []);

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault()
    setShowMore(!showMore);
  };
  useEffect(()=>{
    if(showMore){
      cardRef.current.classList.add('show')
      cardRef.current.style.zIndex = '99';
      console.log('😀' + cardRef.current.classList);
      
    }
    else{
      cardRef.current.classList.remove('show')
      cardRef.current.style.zIndex = '0';
      console.log('xxxxx' +cardRef.current.classList);
    }
  },[showMore])
  const handleCardClick = (e) => {
    e.preventDefault();
    console.log(title+'\n'+description);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
  <div className="card" ref={cardRef}>
    <div className="card__image-holder">
    <Slider {...settings}>
    {imageUrls.map((url) => (
        <img src={url} alt="Event" onClick={handleCardClick}  className="event-image" key={url} />
        ))}
     </Slider>
    </div>
    <div className="card-title">
      <a href="/" className="toggle-info btncard" onClick={toggleShowMore}>
        <span className="left"></span>
        <span className="right"></span>
      </a>
      <h2>
          {title}
          <small>These are the mainly Active events</small>
      </h2>
    </div>
   
        <div className="card-flap flap1">
          <div className="card-description">
            {description}
          </div>
          <div className="card-flap flap2">
            <div className="card-actions">
              <a href="/events" onClick={(e)=>e.preventDefault} className="btncard">Read more</a>
            </div>
          </div>
        </div>
        
  </div>

  );
};

export default EventCard;

