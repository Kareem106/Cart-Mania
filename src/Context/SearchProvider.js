import { useState,useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { DataContext } from "./DataContext";
export default function SearchProvider(props){
    const {productsData}=useContext(DataContext);
    const [searchData,setSearchData]=useState(productsData);
    useEffect(()=>{
        setSearchData(productsData);
    },[productsData])
    const searchHandler=(searchItem)=>{
        const trimmed=searchItem.trim();
        if(trimmed.length>=1){
            const matched=productsData.filter((item)=>{
                return item.title.toLowerCase().includes(trimmed.toLowerCase());
            })
            setSearchData(matched.length>=1?matched:productsData);
        }
    }
    let myValues={
        searchData,searchHandler
    }
    return (
        <SearchContext.Provider value={myValues}>
            {props.children}
        </SearchContext.Provider>
    )
}