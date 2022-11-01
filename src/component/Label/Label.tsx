import {FC} from 'react'

export const Title2White : FC<{title:string}> = ({title}) => {
    return (
        <div className='title-2-white'>{title}</div>
    )
}