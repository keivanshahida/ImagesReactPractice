//Any JS in here is automatically ran for us

//Import React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Axios API
import axios from 'axios';

//Import components
import ImageList from './components/image_list';

//Create a component
class App extends Component {

	constructor(props){
		super(props);

		this.state = { images: [] };
	}

	componentWillMount(){
	// Fantastic place to load data!
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
    // NEVER DO THIS-
    // this.state.images = [ {}, {} ];	
    // setState allows for us to rerender the components
	}

	//images={this.state.images} passes the images prop to child
	render() {
		return (
			<div>
				<ImageList images={this.state.images}/>
			</div>
		);
    }
};

//Render this component to the screen
Meteor.startup(() =>{
	ReactDOM.render(<App />, document.querySelector('.container'));
});