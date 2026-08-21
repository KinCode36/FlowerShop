import React from "react";
import Add_productTop from "./Add_productTop";
import Add_productForm from "./Add_productForm";
import GalleryForm from "./GalleryForm";

const AddProduct = {
  titleFirst: "Add",
  titleLast: " Products",
};

const Gallery = {
  titleFirst: "Add",
  titleLast: " Gallery",
};

const Add_Products = ({ setProducts }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5 w-full">
      
      {/* Product Form */}
      <div className="bg-white rounded-2xl py-4 px-5 w-full max-w-3xl">
        <Add_productTop AddProduct={AddProduct} />

        <Add_productForm setProducts={setProducts} />
      </div>

      {/* Gallery Form */}
      <div className="bg-white rounded-2xl py-4 px-5 w-full max-w-3xl">
        <Add_productTop AddProduct={Gallery} />

        <GalleryForm />
      </div>

    </div>
  );
};

export default Add_Products;