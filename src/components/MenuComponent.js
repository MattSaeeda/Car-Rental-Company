import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';

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

        renderPost(post) {
            if (post != null) {
                return(
                    <Card>
                        <CardImg  top width="100%" src={post.image}/>
                        <CardBody>
                            <CardTitle>{post.tile}</CardTitle>
                            <CardText>{post.summary}</CardText>
                            <Button>Edit</Button>
                        </CardBody>
                    </Card>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        }
    

    render() {

        const menu = this.props.posts.map((post) => {
            return (
                <div key={post.id} className = "col-4 mt-5">
                    <Card >
                        <CardImg  top width="33%" src={post.image}/>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                            <CardText>{post.summary}</CardText>
                            <Button onClick={() => this.onPostSelect(post)}>Edit</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="culomn">
                    <Card list>
                        {menu}
                    </Card>
                </div>
                <div className="row">
                    {this.renderPost(this.state.selectedPostlectedPost)}
                </div>
            </div>
        )
    }
}

export default Menu