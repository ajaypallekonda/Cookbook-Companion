import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Cocktail_Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card style = {{padding: '10px', margin: '10px', width: '18rem', display: 'inline-block'}}>
                <Card.Img style={{height: '240px', width: '265px'}} src={this.props.Image}/>
                <Card.Body>
                    <Card.Title>{this.props.Name}</Card.Title>
                    <Button variant="primary">Recipe</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Cocktail_Card;