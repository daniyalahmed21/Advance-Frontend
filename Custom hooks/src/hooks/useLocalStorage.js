import {useState,useEffect} from "react"

export const useLocalStorage = (key, initialValue) => {

    const [storedValue,setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log("Error reading localStorage",error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key,storedValue)
        } catch (error) {
            console.log("Error writing to localStorage",error)
        }
    }, [key,storedValue])
    

    return [storedValue,setStoredValue] ;
}
