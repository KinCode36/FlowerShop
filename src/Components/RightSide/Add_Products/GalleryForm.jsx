import React from 'react'

const GalleryForm = () => {
    return (
        <form action="">
            {/* gallery Category  */}
            <label className="block mb-2 font-semibold">
                Gallery Category{" "}
                <span className="text-red-500">*</span>
            </label>
            {/* Select Category */}
            <select className='w-full border border-gray-300 rounded-lg p-3 mb-5' required>
                <option value="">Select Category</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Corporate Event">Corporate Event</option>
            </select>

            <label className='block mb-2 font-semibold'>
                Upload Images{" "}
                <span className='text-red-500'>*</span>
            </label>
            {/* Images */}
            <input type="file" accept="image/*" multiple className='w-full border border-gary-300 rounded-lg p-3' />
            {/* Submit Button */}
            <button className='w-[97%] active:scale-95 px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-150 font-semibold cursor-pointer mt-5'>Upload Images</button>
        </form>
    )
}

export default GalleryForm
