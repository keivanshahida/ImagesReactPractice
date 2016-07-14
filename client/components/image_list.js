//Create our image list component
// Import React 
import React from 'react';
import ImageDetail from './image_detail';

// Create our component
const ImageList = (props) => {

	//Filter images to return validImages
	const validImages = props.images.filter(image => !image.is_album);

	//Map will iterate through the array IMAGES and create an object image for each element
	const RenderedImages = validImages.map(image => {
		//use image={image} to pass image to ImageDetail
		return <ImageDetail key={image.title} image={image} />
	});
	
	//Wrap javascript references in curly braces
	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// Export our component
export default ImageList;