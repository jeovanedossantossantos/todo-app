import { api } from "./server"

export const changeDescription = (event) =>({
    type:'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search= ()=>{
    return(dispatch, getState)=>{
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request =  api.get('/todos?sort=-createdAt'+search)
        .then(resp=>dispatch({
            type:'TODO_SEARCHED', payload: resp.data
        }))
    }
    
}


export const add =(description)=>{
  return dispatch=>{
    api.post('/todos',{description})
    .then(resp=>dispatch(clear()))
    .then(resp=>dispatch(search()))
  }
}

export const markAsDone = (todo)=>{
    return dispatch=>{
        api.put('/todos/'+todo._id,{...todo, done:true})
        .then(resp=>dispatch(search()))
    }

}

export const markAsPending = (todo)=>{
    return dispatch=>{
        api.put('/todos/'+todo._id,{...todo, done:false})
        .then(resp=>dispatch(search()))
    }

}

export const remove = (todo)=>{
    return dispatch=>{
        api.delete("/todos/"+todo._id)
        .then(resp=>dispatch(search()))
    }
}
// O multi entende esse esquema de passaar suas acções
export const clear=()=>{
    return [{

        type:"TODO_CLEAR",

    },search()]
}