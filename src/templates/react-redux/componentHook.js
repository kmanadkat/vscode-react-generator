const getComponentHookTemplate = (ComponentName, sliceName) => {
    const SliceName = sliceName[0].toUpperCase() + sliceName.slice(1)
    return `import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { load${SliceName}, loaded${SliceName} } from "../redux/slice"

const use${ComponentName} = (initialData) => {
    const [${sliceName}, set${SliceName}] = useState(initialData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load${SliceName}())
    }, [dispatch])

    const increment = () => {
        dispatch(loaded${SliceName}(${sliceName} + 1))
        set${SliceName}(${sliceName} + 1)
    }

    const decrement = () => {
        dispatch(loaded${SliceName}(${sliceName} - 1))
        set${SliceName}(${sliceName} - 1)
    }

    return {increment, decrement}
}

export default use${ComponentName}
`
}

module.exports = getComponentHookTemplate
