import React  from 'react';

export default function Shops({ foods }) {

  const [ activeItem, setActiveItem ] = React.useState(0);
  const [ category, setCategory ] = React.useState('');

  return (
    <div>
      <ul className='shops mt-40 text-uppercase d-flex justify-around align-center'>
          {foods.map((food, index) => {
            return <li onClick={() => {
              setActiveItem(index);
              setCategory(food)
            }} className={activeItem === index ? "active" : ""} key={index}>{food}</li>
          })}
        </ul>
    </div>
  )
}
