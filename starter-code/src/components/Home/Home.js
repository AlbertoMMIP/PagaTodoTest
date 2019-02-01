import React, {Component} from 'react';
import {getUser} from "../../services";
import {InfoCard} from "../common/InfoCard";

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
        getUser(1)
        .then(item => {
            console.log('Entro' + item);
        })
    }

    render(){
        return(
            <div className="uk-section-muted uk-section uk-section-small" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
                <div className="uk-position-relative">
                    <h3>Bienvenido</h3>
                    <div className="uk-child-width-1-1@m" data-uk-grid>                    
                        <div>
                            <InfoCard/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Home;
