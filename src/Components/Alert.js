import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower=word.toLowerCase();
        // taking substring of lower word from index 1
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
         {/* props.alert will first tried to evaluate props.alert if it's false then further thing will not be evaluated else it will be evaluated */}
        {/* {props.alert.type} = null initially */}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
       )
}

