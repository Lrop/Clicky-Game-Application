import React from 'react';
import "./tree.css";


const Tree = props => (

    <div className="tree" onClick={() => props.clickCount(props.id)}>
        <div className="image-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Tree;

