import React from 'react';

export const InfoCard = ({info}) => (
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={info.avatar}
                     alt="img"/>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{info.first_name}</h3>
                <p>{info.last_name}</p>
            </div>
        </div>
);