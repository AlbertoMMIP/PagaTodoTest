import React, {Component} from 'react';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            item:{
                first_name: "",
                last_name: 0,
                avatar: "https://i.imgur.com/eTmWoAN.png"
            }
        }
    }

    componentWillAmount(){

    }

    render(){
        return(
            <div>
                <div className="columns" >
                    <div className="column"></div>
                    <div className="column"><h1 className="title">PagaTodo</h1></div>
                    <div className="column"></div>
                </div>
                <div>
                    <input type="text" className="input" style={{margin: "30px 0px"}} name="search" placeholder="Search" value=""/>
                </div>
            </div>
        );
    }
}

export default Home;
