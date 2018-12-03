import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            selectedPost: null
        }
    }  
        
        onPostSelect(post) {
            this.setState({selectedPost: post});
        }

    render() {

        const menu = this.props.posts.map((post) => {
            return (
                <div key={post.id} className = "col-12 mt-5">
                    <Card onClick={() => this.onPostSelect(post)}>
                    
                        {/* <CardImg src={post.image_url} alt={post.title} />
                            <CardImgOverlay>
                                <CardTitle>{post.title}</CardTitle>
                            </CardImgOverlay> */}
                        
                        <CardTitle>{post.tile}</CardTitle>
                        <CardText>{post.summary}</CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Card list>
                        {menu}
                    </Card>
                </div>
            </div>
        )
    }
}

export default Menu