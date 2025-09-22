import React from "react";
import {useEffect,useState} from "react";
import './Shopping.css'

function Shopping(){
    let [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData(){
            let res = await fetch('https://dummyjson.com/products');
            let data = await res.json();
            setItems(data.products)
        }
        fetchData();
    }, []) //empty dependencies

    console.log(items);

    return(
        <>
        <div className="shopping">
            {items.map((item) =>{
                return(
                    <React.Fragment>
                        <div className="items">
                            <div className="thumbnail">
                                <img src={item.thumbnail} alt=""/>
                            </div>
                            <div className="details">
                                <p><b>{item.title.toUpperCase()}</b> || <b>{item.brand}</b> || <b>{item.category.toUpperCase()}</b></p>
                                <p>M.R.P : <strike>{item.price}$</strike></p>
                                <p>OfferPrice : {item.price - item.price*.5}$ (50% Discount)</p>
                                <span>Rating: {item.ratiing}</span>
                                <p>{item.description}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
        </>
    )
}
export default Shopping
