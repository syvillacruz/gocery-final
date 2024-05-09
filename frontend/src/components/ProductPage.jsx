import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const images = [
    'https://www.nestleprofessional.ph/sites/default/files/styles/np_product_detail/public/2023-01/NESTL%C3%89%C2%AE%20Fresh%20Milk%201L.png?itok=L6Ey2VqZ',
    'https://ph-test-11.slatic.net/p/4642ebf6e36393b9e4c5d9346f15062b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NQGzRmsnzUPHufZfcMtvrfWT5rpa4RbF0TRgFQe5eg&s',
    'https://m.media-amazon.com/images/I/81TWeuyzk3L._SL1500_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0o1U8F5HtYYzHBNcF8C5HU3jdUA_odTnzXK5BySeo0SMW7ZC3e3NqmmilcpP19WDwHU&usqp=CAU',
    'https://cdn.store-assets.com/s/377840/i/16608062.jpeg',
    'https://d2t3trus7wwxyy.cloudfront.net/catalog/product/l/a/lays-swiss-cheese-flavor-50g_2.jpg',
    'https://m.media-amazon.com/images/I/41OUn7oUGkL._AC_UF1000,1000_QL80_.jpg',
    'https://lh6.googleusercontent.com/proxy/tZXH7k6IrQTvlUm1gozuZ3MDCiYLfIl_xsvP8rgEXgoBqWfGKxI9Iwv9UGEg43M-Qs5t2FySJPHk72fwgHoMxT8eJG41ifWUQ2MCH2yF8f5m1_2NMxJ-dy1khVmw29vT0pVm7g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJNz5rwS8RYCO_q7ubxfS54rvyuBarJ9q-AuCuHCpEQ&s',
    'https://thegreengrocermanila.com/wp-content/uploads/2018/06/watermelon-seedless-1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjd4uN5oRtKgz1KC03F8SAWc9nRQOoTNPlquJQMXxyA&s',
    'https://safeselect.ph/cdn/shop/products/Pineapplerevised_345x@2x.jpg?v=1641873638',
    'https://www.justbarefoods.com/wp-content/uploads/2023/02/58615_JB_BSB__36oz_Front-reize11.webp',
    'https://i5.walmartimages.com/seo/Great-Value-All-Natural-Chicken-Wing-Sections-4-lb-Frozen_566c4713-d023-4ccf-a6dc-5504b62b31c3.7a0b253eea5de44861a5a80fbb328e3f.jpeg',
    'https://thebarebird.com.au/wp-content/uploads/2021/09/The-Bare-Bird-Premium-Free-Range-Chicken-Whole.jpg',
    'https://storage.googleapis.com/images-sof-prd-9fa6b8b.sof.prd.v8.commerce.mi9cloud.com/product-images/detail/00212593000002.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLcPwSbyit5X1j9rgSW-N1w6vkH9QrZp3ebxoguuOTg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5h_3kLr-Me625FieGTkd_sNAaCCOBUJwaBMjbPykxQ&s',
    'https://img.lazcdn.com/g/p/f73bbbb128c829b6ec77bf8776de243b.png_960x960q80.png_.webp'
  ];

  const productNames = [
    'Nestle Fresh Milk',
    'Cowhead Straberry',
    'Cowhead Chocolate',
    'Lays original',
    'Lays Salted',
    'Lays Barbecue',
    'Lays Cheese',
    'Mango',
    'Strawberries',
    'Kiwis',
    'Watermelon',
    'Melon',
    'Pineapple',
    'Chicken Breasts',
    'Chicken Wings',
    'Whole Chicken',
    'Steak',
    'Coca cola ',
    'Sprite',
    'Royal'
  ];

  const prices = [
    '₱115',
    '₱125',
    '₱125',
    '₱123',
    '₱150',
    '₱150',
    '₱150',
    '₱40',
    '₱100',
    '₱88',
    '₱280',
    '₱200',
    '₱150',
    '₱388',
    '₱400',
    '₱600',
    '₱1,120',
    '₱80',
    '₱70',
    '₱100'
  ];

  const handleBack = () => {
    navigate('/home');
  };

  const addToCart = (itemName, imageUrl, price) => {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex === -1) {
      // Item not in cart, add it
      setCartItems([...cartItems, { name: itemName, image: imageUrl, price: price }]);
    } else {
      // Item already in cart, remove it
      const newCartItems = [...cartItems];
      newCartItems.splice(itemIndex, 1);
      setCartItems(newCartItems);
    }
  };

  const filteredProducts = productNames.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      <div style={{ backgroundColor: '#00b106', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="page-header">
        <button onClick={handleBack} className="btn btn-light back-button no-border">Back</button>
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          // removed className="search-input"
        />
        <button onClick={() => navigate('/cart', { state: { cartItems } })} className="btn btn-light cart-button no-border">Cart ({cartItems.length})
        </button>
      </div>
      <div className="green-line"></div>
      <div className="product-grid">
        {filteredProducts.map((productName, index) => (
          <div key={index} className="product-box">
            <img src={images[productNames.indexOf(productName)]} alt={`Product ${index + 1}`} className={index === 0 ? "product-image-small" : "product-image"} />
            <button style={{ width: '100px' }} className="btn btn-primary add-to-cart" onClick={() => addToCart(productName, images[productNames.indexOf(productName)], prices[productNames.indexOf(productName)])}>
              Add to Cart
            </button>
            <div className="product-details">
              <p className="product-name">{productName}</p>
              {cartItems.find(item => item.name === productName) && (
                <button style={{ width: '100px' }} className="btn btn-danger cancel-button" onClick={() => addToCart(productName, images[productNames.indexOf(productName)], prices[productNames.indexOf(productName)])}>
                  Cancel
                </button>
              )}
            </div>
            <p className="product-price">{prices[productNames.indexOf(productName)]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;