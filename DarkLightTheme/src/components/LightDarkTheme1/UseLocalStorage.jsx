//use custom hook for changing theme and stored in localstorage
import React, { useEffect, useState } from 'react'
export const UseLocalStorage = (key,defaultValue) => {
 const [value,setValue] = useState(() => {
    let currentValue;
    try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        
    } catch (error) {
    console.log(error);
    currentValue = defaultValue        
    }
    return currentValue;
 });

//set theme type in localstorage
 useEffect(() => {
 localStorage.setItem(key,JSON.stringify(value))
 },[key,value])
 return [value,setValue]
}
