import React, { memo } from 'react'

function ReactMemo(props) {
    debugger
    console.warn("value update")

    return (
        <>
            <h1>{props.value}</h1>
            <h1>calculate with useMemo</h1>
            <button onClick={(e) => { props.calValue(e) }}>+</button>
            {props.calculate}
        </>
    );
}

export default memo(ReactMemo);