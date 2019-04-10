import React, { Component } from 'react';

class Category extends Component {
    render() {
        const { items } = this.props;
        let nameText = "Name";
        let descriptionText = "Description";

        // this.fetchAgain();
        console.log("rendered again");

        // console.log(this.props);
        return (<React.Fragment>

            <h4>Items in Category: ({this.props.short_name})</h4>
            <table className="table table-condensed table-striped table-bordered">
                <thead><tr><td>{nameText}</td><td>{descriptionText}</td></tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}><td>{item.name}</td><td>{item.description}</td></tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>);
    }
}

export default Category;