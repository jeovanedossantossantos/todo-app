import React, { Component} from "react";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { api } from "./server";

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {description:'', list:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone =  this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.refresh()
    }
    refresh(description='') {
        const search = description ? `&description__regex=/${description}/` : ''
        api.get("/todos?sort=-createdAt"+search ).then(
            res => this.setState({...this.state, description,list: res.data})
        )

    }
    handleChange(e){
        this.setState({...this.state, description:e.target.value})
    }
    handleSearch(){
        this.refresh(this.state.description)
    }
    handleAdd(){
       
        const description = this.state.description
        api.post("/todos", {description})
        .then(resp =>this.refresh())
    }
    handleRemove(todo){
        api.delete("/todos/"+todo._id).then(res => this.refresh())
    }
    handleMarkAsDone(todo){
        
        api.put('/todos/'+todo._id, {...todo, done:true}).then(res=>this.refresh(this.state.description))

    }
    handleMarkAsPending(todo){
        
        api.put('/todos/'+todo._id, {...todo, done: false}).then(res=>this.refresh(this.state.description))
    }
    handleClose(){
        this.refresh()
    }
    render() {

        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro'/>
               <TodoForm 
               description={this.state.description}
               handleSearch={this.handleSearch}
               handleChange={this.handleChange}
               handleAdd={this.handleAdd}
               handleClose={this.handleClose} />
               <TodoList 
               list={this.state.list}
               handleMarkAsDone={this.handleMarkAsDone}
               handleMarkAsPending={this.handleMarkAsPending}
               handleRemove={this.handleRemove}
               

               />
            </div>
        )
    }
}