import React from 'react'

function test(props) {
    return <h6 className="card-subtitle mb-2" onClick={() => props.fun(5)}>{props.country}</h6>;
}
export default test;