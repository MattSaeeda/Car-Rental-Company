import React, { Component } from 'react';
import {Media} from 'reactstrap';

class Menu extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            }
    }

    render() {

        const menu = this.props.posts.map((post) => {
            return (
                <div key={post.id} className = "col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={post.image_url} alt={post.title} />
                        </Media>
                        <Media body className ="ml-5">
                            <Media heading>{post.title}</Media>
                                <p>{post.content}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
};

export default Menu;