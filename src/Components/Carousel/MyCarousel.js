import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import './carouselStyle.css';
export default function MyCarousel() {
  const {productsData}=useContext(DataContext);
  const [item1,item2,item3]=[productsData[0],productsData[1],productsData[2]];
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src={item1?.thumbnail}></img>
        <Carousel.Caption>
          <h3>{item1?.title}</h3>
          <p>{item1?.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item2?.thumbnail}></img>
        <Carousel.Caption>
          <h3>{item2?.title}</h3>
          <p>{item2?.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item3?.thumbnail}></img>
        <Carousel.Caption>
          <h3>{item3?.title}</h3>
          <p>
            {item3?.description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
