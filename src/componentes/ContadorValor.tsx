import React from 'react'

interface IContadorValorProps {
    contador: number
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props: IContadorValorProps) => {
    return (
        <p>{props.contador}</p>
    )
}