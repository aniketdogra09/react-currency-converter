import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    //a prop to hold data - just like we declare a variable in js
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json()).then((data)=>setData(data[currency]));
    },[currency]);
    return data;
}

export default useCurrencyInfo;