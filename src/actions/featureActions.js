
export const toggleAdd = (id) => {
    return {type: 'TOGGLE_ADD', payload: id};
}

export const toggleRemove = (id) => {
    return {type: 'TOGGLE_REMOVE', payload: id};
}