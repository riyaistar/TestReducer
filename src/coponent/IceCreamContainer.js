import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/icecream/icecreamAction'

function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>num of ice cream {numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>buy ice cream</button>
        </div>
    )
}

export default IceCreamContainer
