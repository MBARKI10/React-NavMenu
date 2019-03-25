import React,{Component} from 'react';
import './router.css'
import {Route,Link} from 'react-router-dom';


class Routers extends Component {
    Home = ()=>(
        <div>
         <h2>paga d'acceuil</h2>
            </div>
        )
        
        Service = ()=>(
        <div>
            
         
            <Link to="/For-Entrepreneur" className="use-l">For Entrepreneur</Link>
            <Link to="/For-Student" className="use-l">For Student</Link>
            <Link to="/For-Hobbyists" className="use-l">For Hobbyists</Link>
        
            <div>
        <Route  path='/sevice/For-Entrepreneur' />
        <Route  path='/service/For-Student' />
        <Route  path='/service/Hobbyists'/>
        </div>
            </div>
        )
        Contact =()=>
        (<div>
            
            </div>
        )
    render() {
      return (
        <div>
        <Route  path='/home' component={this.Home} />
        <Route  path='/service' component={this.Service} />
        <Route  path='/contact' component={this.Contact}/>
        </div>
      );
    }
  }
export default Routers