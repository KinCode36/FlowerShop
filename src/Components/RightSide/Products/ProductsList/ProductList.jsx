import React from 'react'

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-[#E0DDD6] bg-white">

            {/* Table */}
            <table className="w-full min-w-[900px] border-collapse">

                {/* Header */}
                <thead>
                    <tr className="h-12 border-b border-[#E0DDD6] bg-[#F7F6F2]">

                        <th className="w-16 px-4 text-left">
                            <input
                                type="checkbox"
                                className="size-4 cursor-pointer accent-blue-600"
                            />
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Product
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Category
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Price
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Stock
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Status
                        </th>

                        <th className="px-4 text-left text-[12px] font-medium uppercase tracking-wider text-[#686863]">
                            Actions
                        </th>

                    </tr>
                </thead>

                {/* Body */}
                <tbody>

                    {products.map((product, index) => (

                        <tr
                            key={product.id || index}
                            className="h-[90px] border-b border-[#E0DDD6] last:border-b-0 hover:bg-[#FAFAF8]"
                        >

                            {/* Checkbox */}
                            <td className="px-4">
                                <input
                                    type="checkbox"
                                    className="size-4 cursor-pointer accent-blue-600"
                                />
                            </td>

                            {/* Product */}
                            <td className="px-4">
                                <div className="flex items-center gap-3">

                                    <div className="flex size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#F8EEEE]">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.Name}
                                                className="size-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl">🌹</span>
                                        )}
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-[#171717]">
                                            {product.Name}
                                        </h2>

                                        <p className="mt-1 text-[12px] text-[#777770]">
                                            ID: {product.id || `FL-P-${String(index + 1).padStart(3, '0')}`}
                                        </p>
                                    </div>

                                </div>
                            </td>

                            {/* Category */}
                            <td className="px-4 text-[15px] text-[#333330]">
                                {product.Cate}
                            </td>

                            {/* Price */}
                            <td className="px-4 text-[15px] font-semibold text-[#252522]">
                                ₹{Number(product.Price).toLocaleString('en-IN')}
                            </td>

                            {/* Stock */}
                            <td className="px-4">
                                <span
                                    className={`text-[15px] font-semibold ${product.stock === 0
                                        ? 'text-red-600'
                                        : product.Stock <= 5
                                            ? 'text-red-600'
                                            : 'text-green-600'
                                        }`}
                                >
                                    {product.Stock === 0
                                        ? 'Out of Stock'
                                        : `${product.Stock} units`}
                                </span>
                            </td>

                            {/* Status */}
                            <td className="px-4">

                                {product.Status === 'active' ? (
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E7F1E9] px-3 py-1.5 text-[12px] font-semibold text-[#356B45]">
                                        <span className="size-1.5 rounded-full bg-[#356B45]" />
                                        active
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCEAEA] px-3 py-1.5 text-[12px] font-semibold text-[#C83A3A]">
                                        <span className="size-1.5 rounded-full bg-[#C83A3A]" />
                                        out-of-stock
                                    </span>
                                )}

                            </td>

                            {/* Actions */}
                            <td className="px-4">

                                <div className="flex items-center gap-2">

                                    <button
                                        type="button"
                                        onClick={() => onEdit(product)}
                                        className="rounded-lg border border-[#DDD9D0] px-4 py-2 text-[13px] font-medium hover:bg-[#F5F4F0]"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onDelete(product.id)}
                                        className="rounded-lg border border-[#DDD9D0] px-4 py-2 text-[13px] font-medium text-[#292927] hover:bg-[#FCEAEA] hover:text-red-600"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default ProductList