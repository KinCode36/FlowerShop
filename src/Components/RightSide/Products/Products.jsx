import React, { useState } from 'react'
import RightTop from '../RightTop'
import ProductsList from './ProductsList/ProductList'
import EditProduct from './EditProduct'

const Products = ({ products, deleteProduct, updateProduct }) => {

  const [editingProduct, setEditingProduct] = useState(null)

  const rightTop = {
    titleFirst: "Products",
    titleLast: "Catalogue",
    button: "+ Add Products",
  }

  return (
    <div>

      <RightTop rightTop={rightTop} />

      <ProductsList
        products={products}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />

      {editingProduct && (
        <EditProduct
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={updateProduct}
        />
      )}

    </div>
  )
}

export default Products