import React from 'react';

import Card from '../components/Card';
import Shops from '../components/Shops';

export default function Home({ items, cartItems, searchValue, setSearchValue, onChangeInputValue, addToFavorite, addToCard, isLoading, category }) {

    const renderItem = () => {
        return (isLoading ? [...Array(10)] :  items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card key={index} onPlus={(obj) => addToCard(obj)} loading={isLoading}  {...item}  />
            )) )
    }

    return (
        <>
        <Shops foods={["All", "MCdony", "KFK", "Pizza", "Sushi", "Salat"]} />

        <div className="content p-40">
                <div className='mb-40 d-flex justify-between align-center'>
                <h1 className=''>Їжа</h1>
                <div className='search'>
                    <img src='/img/search.svg' alt='Search' />
                    <input onChange={onChangeInputValue} placeholder='Пошук ...' />
                </div>
                </div>

                <div className='d-flex flex-wrap justify-center'>{
                    renderItem()
                }</div>

            </div>
        </>
    )
}
