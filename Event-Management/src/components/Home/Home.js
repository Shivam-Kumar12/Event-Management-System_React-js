import './Home.css';
import React, { useState } from 'react'
import { getProfileData } from '../../FirebaseMethods'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [userProfileData,setUserProfileData] = useState(getProfileData);
  console.log('=============>'+userProfileData);
  const event = {
    image:"/image.png",
    title: 'Connecting Talent, Colleges, and Recruiters',
    description:
      'Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company. Whatever your interest, from hiking and reading to networking and skill sharing, Events are happening every day—log in to join the fun.',
  };
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="event-content">
          <h1 className="event-title">
            Con<span className="title-highlight">necting</span> T<span className="title-highlight">alent</span>, Ev<span className="title-highlight">ents</span>, and Volu<span className="title-highlight">nteers</span>
          </h1>
          <span className='line'></span>
          <p className="event-description">{event.description}</p>
        </div>
        <img className="event-image" src={event.image} alt="Event" />
      </div>
   
      <div className="slider-container">
     
        <div className="slider">
          <div className="slide"><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64367cf595844_ipl-cluekeepers-treasure-hunt-1__1_.jpg?d=750x393" alt="Slide 1" /></div>
          <div className="slide"><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e078090bb44_Rotating-Banner.jpeg?d=750x393" alt="Slide 2" /></div>
          <div className="slide"><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6446565bb11d5_HP-Banner.jpg?d=750x393" alt="Slide 3" /></div>
          <div className="slide"><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/642ff9f1160a8_hp.jpg?d=750x393" alt="Slide 4" /></div>
          <div className="slide"><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/644651b87f985_Var-1.png?d=750x393" alt="Slide 5" /></div>
          <div className='slide'><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/644a726d9e695_unstop-banners-rotating-banner__1_.jpg?d=750x393" alt='slide 6' /></div>
          <div className='slide'><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6449fbf2e7110_banner.png?d=750x393" alt='slide 7' /></div>
          <div className='slide'><img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/648eb4fd340fd_HackRx_Homepage_Banner.jpeg?d=750x394" alt='slide 7' /></div>
        </div>
    
      </div>
    </div>
  );
}

export default Home;

// import React from 'react';
// import './Home.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const event = {
//   image: 'https://media.istockphoto.com/id/1253922154/vector/blog-authors-writing-articles.jpg?s=612x612&w=0&k=20&c=rfl7LAg3NoD2fYlPXTBvnXexaq2cFTZLxt7ronsBsWk=',
//   title: 'Connecting Talent, Colleges, and Recruiters',
//   description:
//     'Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company. Whatever your interest, from hiking and reading to networking and skill sharing, Events are happening every day—log in to join the fun.',
// };

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

// const slideImages = [
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/64367cf595844_ipl-cluekeepers-treasure-hunt-1__1_.jpg?d=750x393',
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e078090bb44_Rotating-Banner.jpeg?d=750x393',
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6446565bb11d5_HP-Banner.jpg?d=750x393',
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/642ff9f1160a8_hp.jpg?d=750x393',
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/644651b87f985_Var-1.png?d=750x393',
//   'https://d8it4huxumps7.cloudfront.net/images/home-page-banner/644a726d9e695_unstop-banners-rotating-banner__1_.jpg?d=750x393'
// ];

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="image-container">
//         <div className="event-content">
//           <h1 className="event-title">
//             Con<span className="title-highlight">necting</span> T<span className="title-highlight">alent</span>, Ev<span className="title-highlight">ents</span>, and Volu<span className="title-highlight">nteers</span>
//           </h1>
//           <span className='line'></span>
//           <p className="event-description">{event.description}</p>
//         </div>
//         <img className="event-image" src={event.image} alt="Event" />
//       </div>

//       <div className="slider-container">
//         <Slider {...settings}>
//           {slideImages.map((image, index) => (
//             <div key={index} className="slide"><img src={image} alt={`Slide ${index + 1}`} /></div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Home;
