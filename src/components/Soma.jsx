import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'

export default props => {
    const {min, max} = useSelector(state => state.numeros)
    return (
        <Card title='Soma dos números' blue>
            <div>
                <span>
                    <span>Resultado: </span>
                   <strong>{min + max}</strong>
                </span>
            </div>
        </Card>    
    )
}
