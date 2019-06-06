import React from 'react';
import style from './recipe.module.css'

const Recipe = ( {title, image, link, ingredients} ) => {
	return(
		<div className={style.recipe}>
			<h1 className={style.title}>{title}</h1>
			<ol>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<img src={image} alt={title} /> <br />
			<a target="_blank" className={style.link} href={link}>Click here for Recipe!</a>
		</div>
	);
}

export default Recipe;