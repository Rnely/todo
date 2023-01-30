import { useState, useEffect } from 'react'

const getSavedValue = () => {
    const savedValue = JSON.parse(local.Storage.getItem(kye))
    if (savedValue) return savedValue

    if (initalValue instanceof Function) return initalValue()
    return initalValue
}

const LocalStorage = (key, initalValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initalValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default LocalStorage;