import React, { useState } from 'react'

const Add_productForm = ({ setProducts }) => {
    const [Name, setName] = useState('')
    const [Cate, setCate] = useState('')
    const [Price, setPrice] = useState('')
    const [Status, setStatus] = useState('')
    const [Stock, setStock] = useState('')

    // Submit Function
    const submithandler = (e) => {
        e.preventDefault()

        const newProduct = {
            id: crypto.randomUUID(),
            Name,
            Cate,
            Price,
            Stock,
            Status,
        }

        setProducts((prevProducts) => [
            ...prevProducts,
            newProduct
        ])

        setName('')
        setCate('')
        setPrice('')
        setStatus('')
        setStock('')
    }

    return (
        <div>
            <form
                className="flex flex-col justify-center px-5 pb-5 gap-4"
                onSubmit={submithandler}
            >

                {/* Product Name */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="productName"
                        className="text-sm font-medium text-[#4A4A47]"
                    >
                        Product Name <em className='text-red-600'>*</em>
                    </label>

                    <input
                        id="productName"
                        type="text"
                        placeholder="Enter Product Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                        required
                    />
                </div>


                <div className="flex justify-between items-end gap-2">

                    {/* Category */}
                    <div className="w-1/2 flex flex-col gap-1.5">
                        <label
                            htmlFor="category"
                            className="text-sm font-medium text-[#4A4A47]"
                        >
                            Category <em className='text-red-600'>*</em>
                        </label>

                        <select
                            id="category"
                            value={Cate}
                            onChange={(e) => setCate(e.target.value)}
                            className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none bg-white focus:border-blue-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Bouquets">Bouquets</option>
                            <option value="Single Stems">Single Stems</option>
                            <option value="Seasonal">Seasonal</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>


                    {/* Price */}
                    <div className="w-1/2 flex flex-col gap-1.5">
                        <label
                            htmlFor="price"
                            className="text-sm font-medium text-[#4A4A47]"
                        >
                            Price <em className='text-red-600'>*</em>
                        </label>

                        <input
                            id="price"
                            type="number"
                            placeholder="Enter Price"
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                </div>


                <div className="flex justify-between items-end gap-2">

                    {/* Stock */}
                    <div className="w-1/2 flex flex-col gap-1.5">
                        <label
                            htmlFor="stock"
                            className="text-sm font-medium text-[#4A4A47]"
                        >
                            Stock <em className='text-red-600'>*</em>
                        </label>

                        <input
                            id="stock"
                            type="number"
                            placeholder="Enter Stock"
                            value={Stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                            required
                        />
                    </div>


                    {/* Status */}
                    <div className="w-1/2 flex flex-col gap-1.5">
                        <label
                            htmlFor="status"
                            className="text-sm font-medium text-[#4A4A47]"
                        >
                            Status <em className='text-red-600'>*</em>
                        </label>

                        <select
                            id="status"
                            value={Status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none bg-white focus:border-blue-500"
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Out-Of-Stock</option>
                        </select>
                    </div>

                </div>


                {/* Submit */}
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="w-[97%] active:scale-95 px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-150 font-semibold cursor-pointer"
                    >
                        Save Item 
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Add_productForm