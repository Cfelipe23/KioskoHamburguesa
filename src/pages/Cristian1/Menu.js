import React, { useEffect, useState, useContext } from 'react';
import './Menu.css';
import { CartContext } from '../../context/CartContext.js';


const Menu = () => {
  const [ categories, setCategories ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ selectedCategory, setSelectedCategory ] = useState( 'Todos' );
  const [ meals, setMeals ] = useState( [] );
  const [ featuredMeals, setFeaturedMeals ] = useState( [] );
  const [ platos, setPlatos ] = useState( [] );
  const { addToCart } = useContext( CartContext );

  useEffect( () => {
    fetch( 'https://www.themealdb.com/api/json/v1/1/search.php?s=' )
      .then( res => res.json() )
      .then( data => setPlatos( data.meals || [] ) );
  }, [] );

  useEffect( () => {
    fetch( 'https://www.themealdb.com/api/json/v1/1/search.php?s=' )
      .then( res => res.json() )
      .then( data => {
        setMeals( data.meals );
        // Elegir aleatoriamente 5 platos destacados
        const shuffled = [ ...data.meals ].sort( () => 0.5 - Math.random() );
        setFeaturedMeals( shuffled.slice( 0, 5 ) );
      } );
  }, [] );

  useEffect( () => {
    fetch( 'https://www.themealdb.com/api/json/v1/1/categories.php' )
      .then( res => res.json() )
      .then( data => setCategories( data.categories ) );
  }, [] );

  useEffect( () => {
    fetch( 'https://www.themealdb.com/api/json/v1/1/search.php?s=' )
      .then( res => res.json() )
      .then( data => setMeals( data.meals ) );
  }, [] );

  const handleCategoryClick = ( category ) => {
    setSelectedCategory( category );
    const url =
      category === 'Todos'
        ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${ category }`;
    fetch( url )
      .then( res => res.json() )
      .then( data => {
        if ( category === 'Todos' ) {
          setMeals( data.meals );
        } else {
          // Obtener detalles de cada plato por ID
          Promise.all(
            data.meals.map( meal =>
              fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ meal.idMeal }` )
                .then( res => res.json() )
                .then( detail => detail.meals[ 0 ] )
            )
          ).then( setMeals );
        }
      } );
  };

  // Simular precios aleatorios como número decimal
  const getPrice = () => {
    return 1;
  };


  return (
    <div className="menu-container">

      <div className="category-carousel">
        <button
          className={ selectedCategory === 'Todos' ? 'active' : '' }
          onClick={ () => handleCategoryClick( 'Todos' ) }
        >
          Todos
        </button>
        { categories.map( cat => (
          <button
            key={ cat.idCategory }
            className={ selectedCategory === cat.strCategory ? 'active' : '' }
            onClick={ () => handleCategoryClick( cat.strCategory ) }
          >
            { cat.strCategory }
          </button>
        ) ) }
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar plato por nombre..."
          value={ searchTerm }
          onChange={ ( e ) => setSearchTerm( e.target.value ) }
        />
      </div>

      <h1 className="menu-title">Menú de Comidas</h1>
      <p className="menu-subtitle">¡Descubre los mejores platos cerca de ti!</p>

      <div className="card-grid">
        { meals
          ?.filter( meal =>
            meal.strMeal.toLowerCase().includes( searchTerm.toLowerCase() )
          )
          .map( meal => (
            <div className="card" key={ meal.idMeal }>
              <img src={ meal.strMealThumb } alt={ meal.strMeal } />
              <div className="card-content">
                <div className="card-title">{ meal.strMeal }</div>
                <div className="card-description">
                  { meal.strInstructions
                    ? meal.strInstructions.slice( 0, 120 ) + '...'
                    : 'Sin descripción disponible.' }
                </div>
                <div className="card-price">{ "$" + getPrice() }</div>
                <div className="card-buttons">
                  <button onClick={ () => addToCart( {
                    id: meal.idMeal,
                    nombre: meal.strMeal,
                    imagen: meal.strMealThumb,
                    precio: getPrice()
                  } ) }>
                    Agregar 🛒
                  </button>
                  <button>Ver más</button>
                </div>

              </div>
            </div>
          ) ) }
      </div>

      { featuredMeals.length > 0 && (
        <div className="featured-section">
          <h2>⭐ Platos Destacados</h2>
          <div className="card-grid">
            { featuredMeals.map( meal => (
              <div className="card" key={ meal.idMeal }>
                <div className="badge">⭐ Destacado</div>
                <img src={ meal.strMealThumb } alt={ meal.strMeal } />
                <div className="card-content">
                  <div className="card-title">{ meal.strMeal }</div>
                  <div className="card-description">
                    { meal.strInstructions
                      ? meal.strInstructions.slice( 0, 120 ) + '...'
                      : 'Sin descripción disponible.' }
                  </div>
                  <div className="card-price">{ getPrice() }</div>
                  <div className="card-buttons">
                    <button onClick={ () => addToCart( {
                      id: meal.idMeal,
                      nombre: meal.strMeal,
                      imagen: meal.strMealThumb,
                      precio: getPrice()
                    } ) }>
                      Agregar 🛒
                    </button>
                    <button>Ver más</button>
                  </div>

                </div>
              </div>
            ) ) }
          </div>
        </div>
      ) }
    </div>
  );
};

export default Menu;
