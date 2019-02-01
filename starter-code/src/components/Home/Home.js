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
                avatar: "https://i.imgur.com/eTmWoAN.png",
                page:"",
            },
            items: []
        }

    }

    componentWillMount() {
        getUser(1)
        .then(item => {
            console.log('Entro' + item.data.data);
            this.setState({items:item.data.data})
        })

    }

    render(){
        let {items} = this.state;
        return(
            <div className="uk-section-muted uk-section uk-section-small" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
                <div className="uk-position-relative">
                    <h3>Bienvenido</h3>
                    <div className="uk-section">
                        <div className="uk-container">
                            <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                                {items.length > 0 ?
                                    items.map(item => <InfoCard key={item._id} info={item} />) :
                                    <p>Sin info cargada</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Home;
