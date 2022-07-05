import React, { Component } from 'react';

class counter extends Component {

    state = {
        //count: 0,
        count: this.props.value,
        tags: ["tag1", "tag2", "tag3"]

    };

    styles = {
        fontSize: 10,
        fontWight: 'Bold'
    }
    /* constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }*/

    handleIncrement = (e) => {
        //console.log("Increment", this);
        this.setState({ count: this.state.count + 1 }) //updateing state
        console.log(e);
    }

    dohandlerIncrement = (e) => {
        this.handleIncrement({ id: 1 })
    }

    render() {

        console.log("props", this.props);

        let classes = this.getBadgeMehod();
        return (



            <div>
                <span className={classes}>{this.formatcount()}</span>
                <button onClick={this.dohandlerIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>

        );

    }

    getBadgeMehod() {
        let classes = "badge  m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary ";
        return classes;
    }

    formatcount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;

    }
}

export default counter;
