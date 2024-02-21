import { useContext,useState,useEffect } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";
export default function DataProvider(props){
    const [productsData,setData]=useState([]);
    const dataHandler=(data)=>{
        console.log(data);
        setData(data.products);
    }
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((e)=>{
            dataHandler(e.data);
        }
        )
    },[]);
    let myValues={
        productsData,dataHandler
    };
    return(
        <DataContext.Provider value={myValues}>
            {props.children}
        </DataContext.Provider>
    )
}