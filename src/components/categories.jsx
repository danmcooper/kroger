import React, { Component } from 'react';
import Category from "./category";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            childItems: [],
            short_name: ""
        };
    }

    componentDidMount() {
        fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
            .then(res => res.json())
            .then(
                (result) => {
                    this.fetchMenuItems(result[0].short_name)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    fetchMenuItems(short_name) {
        let url = "https://stream-restaurant-menu-svc.herokuapp.com/item?category=" + short_name;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        childItems: result,
                        short_name: short_name
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handlerClick(short_name) {
        this.fetchMenuItems(short_name);
    }

    render() {
        console.log("categories render");
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container">
                    <div className="col-md-4">
                        <h2>Menu Categories</h2>
                        <ul>
                            {items.map(item => (
                                <li className="prettyAnchor" key={item.short_name} onClick={() => this.handlerClick(item.short_name)}>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <Category items={this.state.childItems} short_name={this.state.short_name}></Category>
                    </div>
                </div>
            );
        }
    }

    getIndex(short_name) {
        return this.state.items.findIndex(function (item) {
            return item.short_name === short_name;
        });
    }
}

export default Categories;