import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritiesContextProvider(props) {

    const[userFavorites, setUserFavorites] =useState([]);
    
    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };
    
    function addFavoritesHandler () {

    }
    function removeFavoritesHandler () {
        
    }
    function addFavoritesHandler () {
        
    }
  return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
  );
}
