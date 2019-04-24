import React from 'react';

class YouTubeSearch extends React.Component {
    state = {
        term: ''

    }

    handleChange = (evt) => {
        this.setState({
            term: evt.target.value
        })
    }
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.handleChange} name='video-search'
                type='text' value={this.state.term}/>
                </form>
            </div>
        )
    }
}
export default YouTubeSearch