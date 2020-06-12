import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import {alterarNumeroMinimo, 
    alterarNumeroMaximo} from '../store/actions/numeros'

export default props => {
    const dispatch = useDispatch();
    
    function alterarMaximo(e) {
        dispatch(alterarNumeroMaximo(+e.target.value))
    }

    function alterarMinimo (e) {
        dispatch(alterarNumeroMinimo(+e.target.value))
    }

    const {min, max} = useSelector(state => state.numeros)
    return (
        <Card title='Intervalo de números' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" 
                    onChange={e => alterarMinimo(e)}
                    value={min}>
                    </input>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" 
                    onChange={e => alterarMaximo(e)}
                    value={max}>    
                    </input>
                </span>
            </div>
        </Card>    
    )
}

