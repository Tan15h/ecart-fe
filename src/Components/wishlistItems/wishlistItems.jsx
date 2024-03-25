import React, { useContext } from 'react';
import './WishlistItems.css'; // Import your CSS file
import { WishlistContext } from '../Context/wishlistContext'; // Import the WishlistContext
import remove_icon from '../Assets/cart_cross_icon.png'; // Adjust the path as needed

const WishlistItems = () => {
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div className='wishlist-items'>
            <div className="wishlist-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            <hr />
            {wishlistItems.map(itemId => {
                const item = all_product.find(product => product.id === itemId);
                if (item) {
                    return (
                        <div key={item.id}>
                            <div className="wishlist-items-format wishlist-items-format-main">
                                <img src={item.image} alt="" className='wishlist-icon-product-icon' />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <img className='wishlist-items-remove-icon' src={remove_icon} onClick={() => removeFromWishlist(item.id)} alt="Remove from wishlist" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default WishlistItems;
