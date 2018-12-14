import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, InputGroupAddon, InputGroup,
     InputGroupText, Input} from 'reactstrap';

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
                        <CardImg  top width="100%" src={post.picture}/>
                        <CardBody>
                            <CardTitle>{post.name}</CardTitle>
                            <CardText>{post.pricePerDay}</CardText>
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
                <div key={post.id} className = "shadow p-3 col-12 col-md-4">
                    <Card >
                        <CardImg  top width="100%" src={post.picture}/>
                        <CardBody>
                            <CardTitle>{post.name}</CardTitle>
                            <CardText>{post.pricePerDay} Ether Per day</CardText>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Please enter the rent period: </InputGroupAddon>
                                <Input placeholder="Days" type="number" step="1" />                          
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Estimated total cost: </InputGroupAddon>
                                <Input placeholder= {post.name} type="number"  />
                                <InputGroupAddon addonType="append">Ethers</InputGroupAddon> 
                            </InputGroup>
                            <br/>
                            <CardText>You'll earn {post.name} CRT Tokens</CardText>
                            <Button color="primary" onClick={() => this.onPostSelect(post)}>Rent</Button>
                            <Button color="danger">Return</Button>
                            <Button color="success">Show my CRT balance</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container-fluid" color>
                <div className="row">
                    {menu}
                </div>
                <div className="col">
                    {this.renderPost(this.state.selectedPost)}
                </div>
            </div>
        )
    }
}

export default Menu