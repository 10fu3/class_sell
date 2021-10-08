import {useEffect, useRef} from "react";

export const useInterval = (callback:()=>void,delay:number)=>{
    const savedCallback = useRef<()=>void>();

    useEffect(()=>{
        savedCallback.current = callback
    },[callback]);

    useEffect(()=>{
        const tick = ()=>{
            if(savedCallback.current){
                savedCallback.current();
            }
        }
        if(delay){
            const id = setInterval(callback,delay);
            return ()=>{
                clearInterval(id);
            };
        }
    },[callback,delay])
}