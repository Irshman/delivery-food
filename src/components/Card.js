import React from 'react';
import ContentLoader from "react-content-loader";
import { AppContext } from '../App';

function Card({id, title, price, img, onPlus, added = false, loading = false}) {
    const { isItemAdded } = React.useContext(AppContext);

    const onClickPlus = () => {
        onPlus({id, title, price, img})
    };

    return (
        <div className='card'>
            {loading ? <ContentLoader 
                        speed={0}
                        width={280}
                        height={187}
                        viewBox="0 0 280 240"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="1" y="0" rx="10" ry="10" width="280" height="110" /> 
                        <rect x="0" y="130" rx="10" ry="10" width="280" height="20" /> 
                        <rect x="0" y="165" rx="10" ry="10" width="150" height="20" /> 
                        <rect x="0" y="210" rx="10" ry="10" width="100" height="30" /> 
                        <rect x="240" y="195" rx="10" ry="10" width="42" height="42" />
                    </ContentLoader> : <> 
            <img width={133} height={112} src={img} alt='sneakers' />
            <p className='fz-14 mb-15'>{title}</p>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                <span>Ціна:</span>
                <b className='price'>{price} грн</b>
                </div>
                <img className='button' onClick={onClickPlus} src={isItemAdded(id) ? '/img/okaybyu.svg' : '/img/plus.svg'} alt='plus' />

            </div></>}
        </div>
    )
}

export default Card;