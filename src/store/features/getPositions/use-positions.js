import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPositions, selectPositions, selectPositionsInfo } from "./positions-slice"

export const usePositions = () => {
    const dispatch = useDispatch()

    const positions = useSelector(selectPositions)
    const {qty, status, error} = useSelector(selectPositionsInfo)

    useEffect(() => {
        if (!qty) {
         dispatch(loadPositions())
        }
    }, [qty, dispatch])

    return [positions, {status, error, qty}]
}