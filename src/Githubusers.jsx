import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Githubusers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user : {},
             input:'AlaaAlissa',
             repos:[],
             error:null,
        }
    }
    componentDidMount =() => {
        this.onClick()
    }
    onClick = ()=>{
        const { input } = this.state
        if(input !== ''){
            //******** make one axios requist for two Api's***********
            const one= `https://api.github.com/users/${input}?client_id=************&client_secret=**********&sort=created`;
            const two = `https://api.github.com/users/${input}/repos`;

            const requestOne = axios.get(one);
            const requestTwo = axios.get(two);
            axios
                .all([requestOne, requestTwo])
                .then(
                    axios.spread((...responses) => {
                    const responseOne = responses[0];
                    const responseTwo = responses[1];
                    console.log(responseOne)
                    console.log(responseTwo)
                    this.setState({
                        user : responseOne.data
                    })
                    this.setState({
                        repos : responseTwo.data,
                        input:'',
                    })
                  })
                )
                .catch(
                    error =>
                            this.setState({
                                error : 'This user does not exist',
                                input:'',
                            }),
                            err => console.log(err.responseTwo)
                        
                )
         // ********* make two axios requist for two Api's********
        // axios.get(`https://api.github.com/users/${input}?client_id=cddb030db81bcd9034db&client_secret=6c1a2b01755947083e29f779f8acaca3f87b7971&sort=created`)
        // .then( res => 
        //     this.setState({ 
        //         user : res.data,
        //     }))
        // .catch(error => {
        //     console.log(error.response)
        //     this.setState({
        //         error : 'This user does not exist',
        //         input:'',
        //     })
        // })
        // axios.get(`https://api.github.com/users/${input}/repos`)
        // .then( res =>
        //     this.setState({    
        //         repos : res.data,
        //         input:'',
        //     }))
        // .catch(err => console.log(err.response))
       }else {
        this.setState({error : 'Plase enter user name '})
       }
    }

    onChange=(e)=>{
        this.setState({input : e.target.value})
    }
    
        render() {
            const { user , input, repos } = this.state
            // console.log(repos)
        return (
            <div>
                <label> Searsh For New User </label><br/>
                <p className="errormesage" >{ this.state.error }</p>
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
                              <div className="card" id="reposCard" style={{width: "100%"}} key={value.id}>
                                    <div className="card-header">
                                        <a href={ value.clone_url }>{ value.clone_url }</a>
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





