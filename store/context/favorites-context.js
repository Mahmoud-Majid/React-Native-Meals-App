import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});


const FavoritesProvider = ({ children }) => {
    const [ids, setIds] = useState([]);

    const addFavorite = (id) => {
        setIds((prevIds) => [...prevIds, id]);
    }

    const removeFavorite = (id) => {
        setIds((prevIds) => prevIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids,
        addFavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
