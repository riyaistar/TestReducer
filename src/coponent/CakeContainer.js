import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'
function CakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>num of cake {numOfCakes} </h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>

        </div>
    )
}

export default CakeContainer
