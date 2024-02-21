import { useState,useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
export default function CartProvider(props){
    const [cartData,setCartData]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
        let total=0;
        cartData.forEach((e)=>{
            total+=(e.quantity*e.price);
        });
        setTotalPrice(total);
    },[cartData])
    const quantityHandler=(item,counter)=>{
            item.quantity=counter;
            const temp=[...cartData];
            setCartData([]);
            setCartData([...temp]);
    }
    const cartHandler=(item)=>{
        const i=checkContain(item);
        if(i){ 
            quantityHandler(i,i.quantity+1)
        }else{
            item.quantity=1;
            setCartData([...cartData,item]);
        }
    }
    const resetCart=()=>{
        setCartData([]);
    }
    const deleteHandler=(item)=>{
        setCartData(
            cartData.filter((e)=>{
                return e.id!==item.id;
            })
        )
    }
    function checkContain(item){
        for(let i of cartData){
            if(i.id===item.id){
                return i;
            }
        }
        return false;
    }
    let myValues={
        cartData,cartHandler,deleteHandler,totalPrice,quantityHandler,resetCart
    }
    return(
        <CartContext.Provider value={myValues}>
            {props.children}
        </CartContext.Provider>
    )
}