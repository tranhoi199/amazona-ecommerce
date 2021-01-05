import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'inf'}`}>
            {props.children}
        </div>
    )
}
