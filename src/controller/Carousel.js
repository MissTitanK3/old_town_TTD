import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselWrapper } from '../style/Wrapper';
import CarouselCard from '../model/CarouselCard';

class OldeCarousel extends Component {
  render() {
    return (
      <CarouselWrapper>
        <Carousel showThumbs={false}>
          {/* <div> */}
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
            <p className="legend">Legend 1</p>
          </div>
          <div> */}
          <CarouselCard
            title='Open Streets'
            desc='See how the City of Arvada and the Olde Town Arvada BID are working to keep our streets vibrant and open for pedestrians.'
            img='https://oldetownarvada.org/wp-content/uploads/2020/06/9Z0A7144-scaled.jpg'
            link='/events'
          />
          <CarouselCard
            title='New Olde Town Merch'
            desc="Want to show your Olde Town love? We've got you covered"
            img='https://oldetownarvada.org/wp-content/uploads/2018/08/OTA3747.jpg'
            link='/events'
          />
          <CarouselCard
            title='Art Drop Arvada'
            desc='Join us every first friday of the month for a free art scavenger hunt.'
            img='https://oldetownarvada.org/wp-content/uploads/2021/04/Art-Drop-Aravda-Story-Image.jpg'
            link='/events'
          />
        </Carousel>
      </CarouselWrapper>
    );
  }
};

export default OldeCarousel