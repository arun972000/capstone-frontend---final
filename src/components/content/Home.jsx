/* eslint-disable react/no-unescaped-entities */

import { Carousel, Container, Row, Col} from "react-bootstrap";
import CardComponent from "./HomepageCards";

const HomePage = () => {
  return (
    <div className="">
     
      <div className="markdown-viewer">
       
      </div>

      
      <Container className="py-5">
        <Row>
          <Col>
            <h2>Welcome to Our Website</h2>
            <p>
              This is the introduction and overview of our website. We provide
              information, services, and more.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Carousel Slider */}
      <Container fluid className="carousel-container mb-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/customer-attraction-marketing-shopping-sale-rewards-scheme-markdown-program-promotional-discount-lowest-price-guarantee-concept-182532817.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37890613.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41691154.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="text-center">
      <h3>Mardown Overview</h3>
<p>In the heart of a bustling city, life unfolds in a symphony of movement and sound. People rush from one place to another, each with a purpose, a destination in mind. The streets are lined with towering buildings that seem to touch the sky, their windows reflecting the vibrant energy of the metropolis.

Amidst the urban chaos, pockets of tranquility can be found hidden parks with lush greenery and serene ponds. Here, the pace of life slows, and the air is filled with the sweet fragrance of blooming flowers.

As the sun sets, the city transforms into a realm of neon lights and bustling nightlife. Restaurants come alive with laughter and clinking glasses, while music spills out of clubs and fills the night.

In this city, dreams are pursued, fortunes made, and stories written. It's a place where cultures blend, and diversity thrives. Each corner holds a story, and every person is a character in the grand narrative of urban life."

I hope you find this content engaging!</p>
      </div>
      
      {/* Content Cards */}
      <Container className="py-5">
      <div className="row">
        <h3 className= "text-center mb-4">Developers</h3>
        <CardComponent image="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"/>
        <CardComponent image="https://mdbootstrap.com/img/Photos/Others/men.webp" />
        <CardComponent image="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"/>
      </div>
      </Container>
    </div>
  );
};

export default HomePage;
