import React from 'react'
import { useForm } from 'react-hook-form';
import Prize from './Prize'
import prizes from '../data/prizes'
export default function WindowWithPrizes() {
    return (
        <>
        {prizes.map(item=>{
            return <Prize {...item} key={item.id} />
        })}
        </>

    )
}
