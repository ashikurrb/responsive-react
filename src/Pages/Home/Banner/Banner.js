import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=1060&t=st=1650287286~exp=1650287886~hmac=292028e701dd3c4cd1d203d4320818e7d325d2b753b3b323e864472d5ab896d1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/marketing-business-banner-template_23-2148990534.jpg?w=1060&t=st=1650287284~exp=1650287884~hmac=27bdcc85a40c1603c454217b27b2b7e0006203e53fbc22d6c7dca7c2c5cdec76"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/real-estate-house-property-web-banner-template_120329-1947.jpg?w=900&t=st=1650287290~exp=1650287890~hmac=4390ccd3b50d9a2f52f7b94eb46956077e65c954c13076bb2ff11b841470dbd3"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;