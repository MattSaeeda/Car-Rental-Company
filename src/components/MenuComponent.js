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
            console.log("button clicked, post selected.")
        }

        renderPost(post) {
            if (post != null) {
                console.log("render started to show post")
                return(
                    <Card>
                        <CardImg  top width="100%" src={post.image}/>
                        <CardBody>
                            <CardTitle>{post.tile}</CardTitle>
                            <CardText>{post.content}</CardText>
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
                            <Button onClick={() => this.onPostSelect(post)}>Show</Button>
                            <button>Edit</button>
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
                    {this.renderPost(this.state.selectedPost)}
                </div>
            </div>
        )
    }
}

export default Menu