import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Githubusers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user : {},
             input:'AlaaAlissa',
             repos:[],
        }
    }
    componentDidMount =() => {
        this.onClick()
    }
    onClick = ()=>{
        const { input } = this.state
        axios.get(`https://api.github.com/users/${input}?client_id=xxxxxxxxx&client_secret=xxxxxxxxxxxxxxxxx&sort=created`)
        .then( res => 
            this.setState({ 
                user : res.data,
               
            }))
        .catch(err => console.log(err))
        axios.get(`https://api.github.com/users/${input}/repos`)
        .then( res =>
            this.setState({    
                repos : res.data,
                input:'',
            }))
        .catch(err => console.log(err))
    }

    onChange=(e)=>{
        this.setState({input : e.target.value})
    }
    
        render() {
            const { user , input, repos } = this.state
            console.log(repos)
        return (
            <div>
                <label> Searsh For New User </label><br/>
                <input name='input' value={input} onChange={ this.onChange} /> {' '}
                <button type="button" onClick={this.onClick}  className="btn btn-primary">
                    Searsh For User
                    </button><br/>
                <div className="card" style={{width: "100%"}} key={user.id}>
                        <div className='div-card1 '>
                            <img src={user.avatar_url } className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{ user.name } </h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">User : { user.login }</li>
                                <li className="list-group-item">User Location : { user.location}</li>
                                <li className="list-group-item">User email : {user.email}</li>
                                <li className="list-group-item">Start with GitHub  : {user.created_at}</li>
                                <li className="list-group-item">Company  : {user.company}</li>
                            </ul>
                        </div>
                        <div className="div-card2 card-body">
                            <h4 style={{textAlign: 'center'}}>User Repositories</h4>
                            {repos.map(value => { return (
                              <div className="card" id="reposCard" style={{width: "100%"}}>
                                    <div className="card-header">
                                        <Link>{ value.clone_url }</Link>
                                    </div>
                                    <ul className="list-group list-group-flush" >
                                        <li className="list-group-item">Name of project : {value.name}</li>
                                        <li className="list-group-item">Description : { value.description }</li>
                                        <li className="list-group-item">language :  {value.language}</li>
                                        <li className="list-group-item">Created At :  {value.created_at}</li>
                                    </ul>
                                </div>
                                )})}
                        </div>
                        
                  </div>
            </div>
            
     
        )
    }
}







