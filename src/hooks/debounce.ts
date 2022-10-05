import { debug } from "console";
import { useEffect, useState } from "react";

export function useDebounce(value:string, delay=300):string{
    
    const [debounce, setDebounce] = useState(value)
    useEffect(()=>{
        
        const handler = setTimeout(()=>{setDebounce(value);console.log({debounce})}, delay)
        return ()=>{clearTimeout(handler); console.log("clearTimeout")}
    },[value, delay])
    console.log({debounce})
    return debounce
}