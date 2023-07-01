export const MainSearch = ({ width }) => {
  const user = "https://cdn-icons-png.flaticon.com/512/456/456283.png";
  const wishlist = "https://cdn-icons-png.flaticon.com/512/1477/1477148.png";
  const cart = "https://cdn-icons-png.flaticon.com/512/833/833314.png";

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search on Coin Tails"
        style={{ width: width - 450 }}
      />
      <ul className="search-options">
        <li>
          <img src={user} alt="user" />
          <p>My Account</p>
        </li>
        <li>
          <img src={wishlist} alt="wishlist" />
          <p>Wishlist</p>
        </li>
        <li>
          <img src={cart} alt="cart" />
          <p>Cart</p>
        </li>
      </ul>
    </div>
  );
};
