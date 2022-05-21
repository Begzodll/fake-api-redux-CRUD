import { useState, useEffect} from "react";

export function UseWindow(){

    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(()=>{
        const handlerResize = () => {
            setSize([ window.innerWidth, window.innerHeight ]);
        };
        window.addEventListener('resize', handlerResize);
        return () => {
            window.removeEventListener('resize',handlerResize);
        }
    },[]);
    return size;
}
