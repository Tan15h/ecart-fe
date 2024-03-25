import React, { createContext, useState } from "react";

export const WishlistContext = createContext(null);

const WishlistContextProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = (itemId) => {
        if (!wishlistItems.includes(itemId)) {
            setWishlistItems([...wishlistItems, itemId]);
        }
    };

    const removeFromWishlist = (itemId) => {
        setWishlistItems(wishlistItems.filter((id) => id !== itemId));
    };

    const contextValue = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
    };

    return (
        <WishlistContext.Provider value={contextValue}>
            {props.children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;
