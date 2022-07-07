import React  from 'react';
import 'macro-css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';

export const AppContext = React.createContext({});


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const responsCart = await axios.get('https://62bf5f7ebe8ba3a10d68d9b1.mockapi.io/cart');
      const responsItems = await  axios.get('https://62bf5f7ebe8ba3a10d68d9b1.mockapi.io/items');
   
      setIsLoading(false)
      setCartItems(responsCart.data);
      setItems(responsItems.data);
    }
    fetchData()
  }, []);

  const addToCard = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62bf5f7ebe8ba3a10d68d9b1.mockapi.io/cart/${obj.id}`);
      setCartItems((prew) => prew.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62bf5f7ebe8ba3a10d68d9b1.mockapi.io/cart', obj);
      setCartItems((prew) => [...prew, obj]);
    }
  };

  const onRemoveItemCart = (id) => {
    axios.delete(`https://62bf5f7ebe8ba3a10d68d9b1.mockapi.io/cart/${id}`);
    setCartItems((prew) => prew.filter(item => item.id !== id));
  };


  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value)
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, isItemAdded }}>
      <div className="wrapper clear">

      {cartOpened ? <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItemCart} /> : null}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route index path='/' element={
          <Home 
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            cartItems={cartItems}
            onChangeInputValue={onChangeInputValue} 
            addToCard={addToCard}
            isLoading={isLoading} />} 
        />
      </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
