import React from 'react'
import { useParams } from 'react-router-dom';

export default function All() {
    const { param } = useParams();
    console.log(param);

    return <div>All {param}</div>;
}
