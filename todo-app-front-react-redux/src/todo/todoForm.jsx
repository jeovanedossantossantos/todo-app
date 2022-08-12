import React  from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {add, changeDescription, search, clear} from "./todoActions"


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() {
        this.props.search()
    }
    keyHandler = (e)=>{
        const {add, search, description, clear} = this.props
        if(e.key === "Enter"){
            e.shiftKey ? search() : add(description)
        }else if(e.key === "Escape"){
            clear()
        }
    }

    render() {
        const {add, search, description, clear} = this.props
        return (
            <div role='form' className='todoForm' >
            <Grid cols="12 9 10" >
            <input  style={{marginBottom:10}} id='description' className='form-control'
                placeholder='Adicionar uma tarefa'
                onChange={this.props.changeDescription}
                onKeyUp={this.keyHandler}
                value={this.props.description}
                ></input>
            </Grid>
            
            <Grid cols="12 3 2">
                <IconButton 
                style='primary' 
                icon='plus' 
                onClick={()=>add(description)} 
                ></IconButton>
                 <IconButton 
                style='info' 
                icon='search' 
                onClick={search} 
                ></IconButton>
                 <IconButton 
                style='default' 
                icon='close' 
                onClick={()=>clear()} 
                ></IconButton>
            </Grid>
        </div>
        )
    }
    }

// const TodoForm = (props) =>{
//     const keyHandler = (e)=>{
//         if(e.key === "Enter"){
//             e.shiftKey ? props.handleSearch() : props.handleAdd()
//         }else if(e.key === "Escape"){
//             props.handleClear()
//         }
//     }
   
//     return (
//         <div role='form' className='todoForm' >
//         <Grid cols="12 9 10" >
//         <input  style={{marginBottom:10}} id='description' className='form-control'
//             placeholder='Adicionar uma tarefa'
//             onChange={props.changeDescription}
//             onKeyUp={keyHandler}
//             value={props.description}
//             ></input>
//         </Grid>
        
//         <Grid cols="12 3 2">
//             <IconButton 
//             style='primary' 
//             icon='plus' 
//             onClick={props.handleAdd} 
//             ></IconButton>
//              <IconButton 
//             style='info' 
//             icon='search' 
//             onClick={props.handleSearch} 
//             ></IconButton>
//              <IconButton 
//             style='default' 
//             icon='close' 
//             onClick={props.handleClose} 
//             ></IconButton>
//         </Grid>
//     </div>
//     )
// }

const mapStateToProps = (state)=>({
    description:state.todo.description
})
const mapDispatchToProps = (dispatch)=>bindActionCreators({add,changeDescription, search,clear}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)