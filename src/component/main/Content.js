import { useGlobalContext } from "../../context";
import StarRatings from "react-star-ratings";
import { SellerSearch } from "../sellerpage/SellerSearch";
import { SellerProfile } from "../sellerpage/SellerProfile";

const Content = () => {
  const cartimg = "https://i.postimg.cc/4ysb8rzL/shopping-cart.png";
  const addtowishlist =
    "https://cdn-icons-png.flaticon.com/512/6051/6051092.png";
  const eye = "https://cdn-icons-png.flaticon.com/512/2533/2533656.png";

  const { userData } = useGlobalContext();
  return (
    <div className="content-container">
      <SellerProfile />
      <SellerSearch />
      <div className="content-grid">
        {userData.map((user) => {
          return (
            <div className="item">
              <div className="item-img">
                <p>
                  <img className="item-wishlist" src={addtowishlist} />
                </p>
                <img className="item-img" src={user.image} />
                <span className="views">
                  <img src={eye} />
                  400
                </span>
              </div>
              <div className="item-details">
                <p>{user.login}</p>
                <div>
                  <StarRatings
                    rating={2.403}
                    starDimension="20px"
                    starSpacing="0px"
                    starRatedColor="rgb(39, 162, 239)"
                  />
                  (500)
                </div>
                <p className="priceTag">
                  <span>Ether 20.00</span>
                  <label>-37%</label>
                </p>
              </div>
              <button>
                Add to Cart
                <img src={cartimg} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
