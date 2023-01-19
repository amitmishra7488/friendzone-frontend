
export const userAction=(data,dispatch)=>{
    dispatch({
        type: 'ADD_USER',
        payload: data
    })
}

export const fetchAction = (data,dispatch)=>{
    dispatch({type: 'FETCH', payload: data});
}
export const sortbyname =(dispatch)=>{
    dispatch({type: 'SORTBYNAME'})
}

export const toggleLogin=(data,dispatch)=>{
    dispatch({
        type: 'TOGGLE',
        payload: data
    })
}