import React, {Component} from 'react';

class Subject extends Component {
    render() {
        console.log("subject render");
        return (
            <header>
                <h1><a href="/" onClick={function(e) {
                        console.log(e);
                        this.state.mode = "read";
                        e.preventDefault();
                    }}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;