import React, { useEffect, useState } from 'react'

const EditProduct = ({ product, onClose, onSave }) => {

    const [Name, setName] = useState('')
    const [Cate, setCate] = useState('')
    const [Price, setPrice] = useState('')
    const [Stock, setStock] = useState('')
    const [Status, setStatus] = useState('')

    useEffect(() => {
        if (product) {
            setName(product.Name || '')
            setCate(product.Cate || '')
            setPrice(product.Price || '')
            setStock(product.Stock || '')
            setStatus(product.Status || '')
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedProduct = {
            ...product,
            Name,
            Cate,
            Price,
            Stock: Number(Stock),
            Status: Status
        }

        onSave(updatedProduct)

        onClose()
    }

    if (!product) return null

    return (
        <div className="fixed inset-0 z-50 flex justify-end">

            {/* Background */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/30"
            />

            {/* Panel */}
            <div className="relative z-10 h-full w-full max-w-md bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E0DDD6] px-6 py-5">

                    <div>
                        <h2 className="text-xl font-bold text-[#171717]">
                            Edit Product
                        </h2>

                        <p className="mt-1 text-sm text-[#777770]">
                            Update product information
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex size-9 items-center justify-center rounded-lg text-xl text-[#666] hover:bg-[#F4F3EF]"
                    >
                        ×
                    </button>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex h-[calc(100%-89px)] flex-col"
                >

                    <div className="flex-1 space-y-5 overflow-y-auto p-6">

                        {/* Product Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#333]">
                                Product Name
                            </label>

                            <input
                                type="text"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-[#D8D5CE] px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#333]">
                                Category
                            </label>

                            <select
                                value={Cate}
                                onChange={(e) => setCate(e.target.value)}
                                className="w-full rounded-lg border border-[#D8D5CE] bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
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
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#333]">
                                Price
                            </label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#777]">
                                    ₹
                                </span>

                                <input
                                    type="number"
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full rounded-lg border border-[#D8D5CE] py-2.5 pl-8 pr-3 text-sm outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#333]">
                                Stock
                            </label>

                            <input
                                type="number"
                                min="0"
                                value={Stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="w-full rounded-lg border border-[#D8D5CE] px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#333]">
                                Status
                            </label>

                            <select
                                value={Status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full rounded-lg border border-[#D8D5CE] bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Out-of-stock</option>
                            </select>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 border-t border-[#E0DDD6] p-5">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-[#D8D5CE] px-5 py-2.5 text-sm font-medium text-[#333] hover:bg-[#F5F4F0]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-95"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditProduct