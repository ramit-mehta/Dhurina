import React from "react";
import { ExploreProducts } from "../common/Helper";

const Products = () => {
  return (
    <div className="custom_container container py-5">
      <h2 className="ff_inter fw-bold fs_9xl color_dark_blue">
        Explore By <span className="text_gradient"> Product </span>
      </h2>
      <div className="row mt-3">
        {ExploreProducts.map((item, index) => {
          return (
            <div key={index} className="col-lg-4 col-sm-6 mt-4">
              <div className="product_box d-flex align-items-center px-3">
                <div>
                  <p className="color_dark_blue ff_inter fw-semibold fs_md mb-0">
                    {item.title}
                  </p>
                  <p className="ff_inter fw-bold color_dark_blue fs_xxl mb-0">
                    {item.description}
                  </p>
                  <button className="ff_inter fw-semibold text-white fs_xsm bg_gradient border-0 mt-2 py-2 px-3">
                    Explore
                  </button>
                </div>
                <img className="w-50" src={item.image} alt={item.description} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
