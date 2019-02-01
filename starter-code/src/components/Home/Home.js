import React, {Component} from 'react';
import {getUser} from "../../services";
import {InfoCard} from "../common/InfoCard";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            page:1,
            items: []
        }

    }

    componentWillMount() {
        this.showNext();

    }

    showNext = () => {
        let {page} = this.state;
        if(page === 4) page = 0;
        getUser(page+1)
        .then(item => {
            this.setState({items:item.data.data,page:item.data.page})
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
                                    items.map(item => <InfoCard key={item.id} info={item} />) :
                                    <p>Sin info cargada</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="uk-section-default uk-child-width-1-3@m">
                        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onClick={this.showNext} >Siguiente</button>
                    </div> 
                </div>
            </div>
            );
    }
}

export default Home;
