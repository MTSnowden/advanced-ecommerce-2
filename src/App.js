import React from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetal";
import Footer from "./components/Footer";
import state from "./state";
import changeCategory from "./index";



function App(props) {
	
	var ProductDetail = props.product.map(function(p){
		return <ProductDetail product ={p}/>; 
	});

	return (
		<div>
		<Header/>

		<SubHeader/>
		<TopNav/>
		<ImageSlider/>
		<ProductDetail product= {{ }}/>
		<ProductDetail/>
		<Footer/></div>
	);
}

export default App;
