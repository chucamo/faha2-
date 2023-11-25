import React, { useContext,useState,useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdow_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import all_product from "../Components/Assets/all_product";

const ShopMen = (props) => {
    const [dataKids,setDataKids]=useState([]);
    useEffect(() => {
        setDataKids(all_product.filter(person => person.category==="men"));
      }, [all_product]); 
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdow_icon } alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
            
            {dataKids.map((item)=>{
                return(
                    <div className="new_collections" key={item.id}>
                    <div className="new_collections1">
                    <img src={item.image} alt=""  className="img_new_collections"/>
                       <p className="name_produtcs"> {item.name}</p>
                      
                    </div>
                     <div className="new_collections_price">
                     <p className="item_price_News" >{item.new_price}<strong>VNĐ</strong> </p>
                       <p className="item_sale_price">{item.old_price}<strong>VNĐ</strong> </p>
                     </div>
                       </div>
                )
            })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopMen