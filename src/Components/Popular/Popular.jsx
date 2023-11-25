import React from "react";
import './Popular.css'
import data_product from '../Assets/data'

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item) => {
                    return (
                        <div className="popular-item1" key={item.id}>
                            <div className="popular_item2">
                                <img src={item.image} alt="" className="image_popular_item" />
                                <p className="name_itemPopular"> {item.name}</p>
                                {item.category}

                            </div>
                            <div className="price_popular">
                                <p className="item_new_pricePopular">{item.new_price}<strong>VNĐ</strong></p>
                                <p className="item_priceOld">{item.old_price}VNĐ </p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Popular