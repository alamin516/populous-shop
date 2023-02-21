import React from "react";
import FilterSection from "../../Components/Products/FilterSection";
import ProductLists from "../../Components/Products/ProductLists";
import Sort from "../../Components/Products/Sort";

const Products = () => {

  return (
    <div className="lg:w-10/12 mx-auto lg:py-20 py-2">
      <div className="lg:flex gap-1">
        <div className="lg:w-3/12">
          <FilterSection></FilterSection>
        </div>
        <div className="flex-1 lg:px-4 px-2 lg:py-0 py-3">
          <div>
            <Sort></Sort>
          </div>
          <div>
            <ProductLists></ProductLists>
          </div>
        </div>
      </div>
    </div>
  )
};


export default Products;
