import { FC } from 'react';
import './Card.css';
import Character from '../../model/Character';

interface CardProps extends Character { }

const Card: FC<CardProps> = ({
  name,
  title,
  iconUrl
}) => {
  return (
    <div className='card' style={{}}>
      <img src={iconUrl} alt={`${name} icon`} />
      <div className="content">
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Title: </b>
          {title}
        </p>
      </div>
    </div>
  )
};

export default Card;