import React, { useState } from 'react'

const GalleryForm = () => {
    const [category, setCategory] = useState('')
    const [images, setImages] = useState([])
    const [previews, setPreviews] = useState([])

    const hangleImage = (e) => {
        const files = Array.from(e.target.files);
        setImages(files)

        const previewUrls = files.map((file) =>
            URL.createObjectURL(file) // Craetes a temporary URL for each image
        );
        setPreviews(previewUrls)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(category);
        console.log(images);

        if (!category) {
            alert("Please select a category");
            return;
        }
        if (images.length === 0) {
            alert("Please select at least one image");
            return;
        }

        setCategory('');
        setImages([]);
        setPreviews([]);

        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* gallery Category  */}
            <label className="block mb-2 font-semibold">
                Gallery Category{" "}
                <span className="text-red-500">*</span>
            </label>
            {/* Select Category */}
            <select
                className='w-full border border-gray-300 rounded-lg p-3 mb-5'
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
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
            <input
                type="file"
                accept="image/*"
                multiple
                className='w-full border border-gary-300 rounded-lg p-3'
                onChange={hangleImage}
            />

            {previews.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-5">
                    {previews.map((preview, index) => (
                        <img
                            key={index}
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            width="150"
                        />
                    ))}
                </div>
            )}


            {/* Submit Button */}
            <button className='w-[97%] active:scale-95 px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-150 font-semibold cursor-pointer mt-5'>Upload Images</button>
        </form>
    )
}

export default GalleryForm
