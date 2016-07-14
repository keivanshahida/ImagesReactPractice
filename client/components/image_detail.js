// Import React 
import React from 'react';
import ImageScore from './image_score';

// Create our component
//Props is what we passed into ImageDetail in ImageList (i.e. image)
const ImageDetail = (props) => {
	//props.image is the image object

	//im JSX use className instead of class
	return (
		<li className="media list-group-item"> 
			<div className="media-left">
				<img src={props.image.link} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{props.image.title} 
				</h4>
				<p>{props.image.description}</p>
				<ImageScore ups={props.image.ups} downs={props.image.downs}/>
			</div>
		</li>
	);
};

// Export our component
export default ImageDetail;