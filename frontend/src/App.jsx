import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import './pages/Home.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Header from './components/Header'
import CartWishList from './components/CartWishList';
import Footer from './pages/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart'
import ProductDetails from './components/ProductDetails';
//import Data from '../Data.json'
import DataProvider from './features/DataProvider';
import BuyNow from './components/BuyNow';
// Import footer section components
import ContactUs from './pages/ContactUs';
import Delivery from './pages/Delivery';
import ReturnsExchanges from './pages/ReturnsExchanges';
import SizeGuide from './pages/SizeGuide';
import User from './components/User';
import Payment from './components/Payment';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {

  return (
    <DataProvider>
      <Router>

      <div className="blank"   ></div>

        <div className="navHeaderDiv"  > 
        <Navbar />
        <Header />
        </div>

        <div className="nav-container" style={{ border: "10px solid blue" }} >
          
          {/* <NavbarNew/> */}
          <CartWishList />
        </div>

        <div className='appOuterDiv' style={{ border: "10px solid red" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Routings for main menu */}

            <Route path="/women" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} />} />
            <Route path="/men" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} />} />
            <Route path="/workwear" element={<Products selectionType1={'collectionCat'} selectionValue1={'WORKWEAR'} />} />
            <Route path="/linen" element={<Products selectionType1={'collectionCat'} selectionValue1={'LINEN'} />} />
            <Route path="/natural" element={<Products selectionType1={'collectionCat'} selectionValue1={'NATURAL'} />} />
            <Route path="/blends" element={<Products selectionType1={'collectionCat'} selectionValue1={'BLENDS'} />} />
            <Route path="/denim" element={<Products selectionType1={'collectionCat'} selectionValue1={'DENIM'} />} />
            <Route path="/occasion" element={<Products selectionType1={'collectionCat'} selectionValue1={'OCCASION'} />} />
            <Route path="/activeWear" element={<Products selectionType1={'collectionCat'} selectionValue1={'ACTIVE WEAR'} />} />

            {/* Routings for sub menus */}
            {/* Women */}
            <Route path="/women/dresses" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'DRESS'} />} />
            <Route path="/women/tops" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'TOPS'} />} />
            <Route path="/women/jeans" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'JEANS'} />} />
            <Route path="/women/trousers" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'TROUSERS'} />} />
            <Route path="/women/skirts" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'SKIRTS'} />} />
            <Route path="/women/Shorts" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'SHORTS'} />} />
            <Route path="/women/Jumpsuits" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'JUMPSUITS'} />} />
            <Route path="/women/Dungaree" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'DUNGAREE'} />} />
            <Route path="/women/Blazers" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'BLAZERS'} />} />
            <Route path="/women/Cardigans" element={<Products selectionType1={'categoryGender'} selectionValue1={'WOMEN'} selectionType2={'categoryStyle'} selectionValue2={'CARDIGANS'} />} />

            {/* Mens */}
            <Route path="/men/shirts" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} selectionType2={'categoryStyle'} selectionValue2={'SHIRTS'} />} />
            <Route path="/men/trousers" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} selectionType2={'categoryStyle'} selectionValue2={'TROUSERS'} />} />
            <Route path="/men/Shorts" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} selectionType2={'categoryStyle'} selectionValue2={'SHORTS'} />} />
            <Route path="/men/T-Shirts" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} selectionType2={'categoryStyle'} selectionValue2={'T-SHIRTS'} />} />
            <Route path="/men/Denim" element={<Products selectionType1={'categoryGender'} selectionValue1={'MEN'} selectionType2={'categoryStyle'} selectionValue2={'DENIM'} />} />

            {/* Routings for cat and checkout */}

            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/product/:itemCode" element={<ProductDetails />} />
            <Route path="/buy-now/:totalPrice" element={<BuyNow />} />
            <Route path="/pay-now/:total" element={<Payment />} />
          
            {/* Routing for user creattion */}
            <Route path="/user" element={<User />} />


            {/* Routings for footer pages */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          </Routes>
          <Footer />

        </div>

      </Router>
    </DataProvider>
  );
}


export default App;
