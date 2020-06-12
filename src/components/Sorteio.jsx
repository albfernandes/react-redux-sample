import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'

export default props => {
    const {min, max} = useSelector(state => state.numeros)

    const random = parseInt(Math.random() * (max - min) + min)
    return (
        <Card title='Sorteio de um número' purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>
                    {random}
                    </strong>
                </span>
            </div>
        </Card>    
    )
}
