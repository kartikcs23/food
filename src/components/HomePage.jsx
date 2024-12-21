import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Button } from 'react-bootstrap';
import "../styles/HomePage.css";  

const popularItems = [
  {
    title: "Margherita Pizza",
    image: "https://th.bing.com/th/id/OIP.9yKD8jUAgbI1ZX-PRDhDnAHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image link
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
  },
  {
    title: "Vegan Burger",
    image: "https://th.bing.com/th/id/OIP.In4roMpAKzbLMXMB8wahFAHaGJ?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image link
    description: "Plant-based burger with fresh lettuce, tomatoes, and vegan cheese.",
  },
  {
    title: "Pasta Alfredo",
    image: "https://th.bing.com/th/id/OIP.QHW4BiHjtUQrzqXRuK6oSAHaD4?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image link
    description: "Creamy pasta dish with garlic, parmesan cheese, and herbs.",
  }
];

function HomePage() {
  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Food Ease</h1>
        <p>Enjoy the finest dishes from around the world, delivered fresh and fast to your doorstep!</p>
      </section>

      {/* Carousel for Promotions */}
      <Carousel autoPlay interval={3000} infiniteLoop>
        <div>
          <img src="https://th.bing.com/th/id/OIP.QgQo4hNgxc-hdqtzD2ZaSAHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Promo 1" />
          <p className="legend">20% off on all orders!</p>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.QgQo4hNgxc-hdqtzD2ZaSAHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Promo 2" />
          <p className="legend">Order 1 Get 1 Free</p>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.KbUDduPJRMB4Ag-sm6BLbAHaE6?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Promo 3" />
          <p className="legend">Free Delivery on all Orders above $30</p>
        </div>
      </Carousel>

      <div className="popular-section">
        <h2>Popular Items</h2>
        <div className="popular-items">
          {popularItems.map((item, index) => (
            <div key={index} className="popular-item">
              <img src={item.image} alt={item.title} className="popular-item-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* Link to menu page dynamically based on item title */}
              <Link to={`/menu`} className="order-now-link">
                <Button variant="primary">Order Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div><br/><br/>
    </div>
  );
}

export default HomePage;
