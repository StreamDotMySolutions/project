import React from 'react';
import { Placeholder,Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const PlaceholderImage = ({ width, height }) => {
  const placeholderUrl = `https://via.placeholder.com/${width}x${height}`;
  
  return (
    <Placeholder as="div" className="w-100">
      <Image src={placeholderUrl} className="w-100" />
    </Placeholder>
  );
};

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <PlaceholderImage width={800} height={400} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage width={800} height={400} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage width={800} height={400} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
