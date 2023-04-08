import { FC } from 'react';
import './Card.css';

interface CardProps {
  name: string;
  title: string;
  imgUrl: string;
}

const Card: FC<CardProps> = ({
  name,
  title,
  imgUrl
}) => {
  return (
    <div className='card' style={{}}>
      <img src={imgUrl} alt={`${name} icon`} />
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Title: </b>
        {title}
      </p>
    </div>
  )
};

export default Card;