import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

export default props => {
    const {min, max} = useSelector(state => state.numeros)
    return (
        <Card title='Média dos números' green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min+max)/2}</strong>
                </span>
            </div>
        </Card>    
    )
}
