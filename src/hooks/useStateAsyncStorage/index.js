import React, { useEffect, useRef, useState } from 'react'
import { getData, storeData } from '../../utils/async-storage';

const useStateAsyncStorage = ({
    key,
    defaultValue
}) => {
    const [data, setData] = useState(defaultValue);
    const callbackRef = useRef();

    useEffect(() => {
        const setDataState = async () => {
            const data = (await getData(key))|| defaultValue;
            setData(data);
        };
      
        setDataState();

        return setDataState
    }, [])

    useEffect(() => {
        storeData(key, data, callbackRef.current);
    }, [data]);


    return {
        data,
        setData,
        callbackRef
    }
}

export default useStateAsyncStorage
