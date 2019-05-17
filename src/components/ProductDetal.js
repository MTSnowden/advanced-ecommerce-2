import React from "react";
import PropTypes from "prop-types";


function ProductDetail(props) {
	let product = props.product;
    return (
		<div className="grid_1_of_5 images_1_of_5">
			<img src={product.image} alt="car parts"/>
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<h4>{product.price}</h4>
			<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
		</div>
	)
}


ProductDetail.propTypes = {
	product: PropTypes.object.isRequired
}
export default ProductDetail;