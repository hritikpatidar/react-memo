import React, { memo } from 'react'

function ReactMemo(props) {
    console.warn("value update")
    
    return(
        <>
            <h1>{props.value}</h1>
        </>
    );
}

export default memo(ReactMemo)