
export function alterarNumeroMinimo (novoNumero) {
    return {
        type: 'MIN_NUM_CHANGE',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo (novoNumero) {
    return {
        type: 'MAX_NUM_CHANGE',
        payload: novoNumero
    }
}