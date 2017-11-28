import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [{
                name: "Ryan Christiani",
                item: "Sour Cream"
            }],
            name: "",
            item: ""
        }
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addItem(e) {
    }
    render() {

        return (
            <div>
                <section>
                    <form onSubmit={this.addItem} className="addForm">
                        <label htmlFor="item">Item: </label>
                        <input type="text" name="item" onChange={this.handleChange} />
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" onChange={this.handleChange} />
                        <button>Add Item</button>
                    </form>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));