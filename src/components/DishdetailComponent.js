import React, { Component } from 'react';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.selectedDish != null) {
            const dish = this.props.selectedDish
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1" key={dish.id}>
                        <Card key={dish.id}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.props.selectedDish.comments.map((entry, index) => (
                            <p key={index}> {entry.comment} <br /> 
                            --{entry.author} , {new Date(entry.date).toLocaleDateString("en-US", 
                            { 
                                year: "numeric", 
                                month: "short",  
                                day: "numeric" 
                            }
                            )}</p>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;