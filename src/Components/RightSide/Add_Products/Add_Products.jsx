import React from 'react'
import Add_productTop from './Add_productTop'
import Add_productForm from './Add_productForm'

const Add_Products = ({ setProducts }) => {

  return (
    <div className='bg-white rounded-2xl py-4 px-5 w-full max-w-3xl'>

      <Add_productTop />

      <Add_productForm setProducts={setProducts} />

    </div>
  )
}

export default Add_Products