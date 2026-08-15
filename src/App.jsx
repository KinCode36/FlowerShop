import React, { useState } from 'react'
import Admin from './Admin/Admin'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/RightSide/Dashboard/Dashboard'
import Products from './Components/RightSide/Products/Products'
import Orders from './Components/RightSide/Orders/Orders'
import Bookings from './Components/RightSide/Bookings/Bookings'
import Analytics from './Components/RightSide/Analytics/Analytics'
import Add_Products from './Components/RightSide/Add_Products/Add_Products'
import Account_Settings from './Components/RightSide/Account_Settings/Account_Settings'
import UserInformation from './UserInformation/UserInformation'


function App() {
  const [products, setProducts] = useState([])

  // Update Function
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    )
  }
  // Delete Function
  const deleteProduct = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route
            path="products"
            element={<Products
              products={products}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="add_Products" element={<Add_Products setProducts={setProducts} />} />
          <Route path="settings" element={<Account_Settings />} />
          <Route path="userinformation" element={<UserInformation />} />
        </Route>
      </Routes>
      {/* <Gallary/> */}
    </div>
  )
}

export default App
