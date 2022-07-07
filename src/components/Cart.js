import React from 'react'
import { AppContext } from '../App'

function Cart({onClose, onRemove, items = []}) {

    const { cartItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <div  className='overlay'>
            <div className='rightSidebar'>
            <h2 className='d-flex justify-between align-center mb-30'>
                Кошик<img onClick={onClose} className='closedBtn' src='/img/closed.svg' alt='ClosedCart' />
            </h2>

            {items.length > 0 ? (
                <div>
                    <div className='items'>
                        {items.map((obj, index) => (
                            <div key={index} className='cartItem'>
                                <img width={70} height={70} src={obj.img} alt='Sneakers' />
                                <div className='cartInfo'>
                                    <p>{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className='closedBtn' src='/img/closed.svg' alt='Closed' />
                            </div>
                        ))}
                    </div>

                    <div className='cartTotalblock'>
                        <ul>
                        <li className='d-flex justify-between align-center'>
                            <span>Всього:</span>
                            <div></div>
                            <b>{totalPrice} грн.</b>
                        </li>
                        <li className='d-flex justify-between align-center'>
                            <span>Доставка 3%:</span>
                            <div></div>
                            <b>{Math.floor(totalPrice / 100 * 3)} грн.</b>
                        </li>
                        </ul>
                        <button className='primaryBtn'>Оформити замовлення <span /></button>
                    </div>
                </div>
            ) : (
            <div className='empty'>
                <img src='/img/emptyCart.png' alt='Empty' />
                <h2>Кошик порожній</h2>
                <p className='text'>Додати хоча б одну пару кросівок, щоб зробити замовлення.</p>
                <button onClick={onClose} className='primaryBtn'>Повернутися назад</button>
            </div>)}

            

            

            </div>
        </div>
    )   
}

export default Cart