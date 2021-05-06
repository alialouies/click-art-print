import React from 'react'
import ThankYou from '../ThankYou'

function Purchase(props) {
    const { state } = props;

    return (
        <>
        <ThankYou state={state}/>
        </>
    )
}

export default Purchase
