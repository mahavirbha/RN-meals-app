import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useState } from 'react';

export const FavouriteContext = createContext({
  ids: [],
  addFavpourites: (id) => {},
  removeFavourites: () => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavpourites(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourites(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mid) => mid !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavpourites: addFavpourites,
    removeFavourites: removeFavourites,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
