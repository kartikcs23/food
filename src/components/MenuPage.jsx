// src/components/MenuPage.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container, Form, Dropdown, Pagination, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/MenuPage.css'; // Import custom CSS for styling

// Sample menu data with customization options (toppings)
const menuData = [
  { id: 1, name: 'Spring Rolls', category: 'Starters', price: 5, image: 'https://th.bing.com/th/id/OIP.E6OpTPH3Pfq2g2RDO0zVoQHaFX?w=274&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: true, isGlutenFree: false, toppings: ['Sweet Chili Sauce', 'Peanut Sauce', 'Garlic'] },
  { id: 2, name: 'Grilled Chicken', category: 'Main Course', price: 12, image: 'https://th.bing.com/th/id/OIP.FNgT1In63fMZ1rxnSEBjyQHaEu?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: false, isGlutenFree: true, toppings: ['Lemon', 'BBQ Sauce', 'Cheese'] },
  { id: 3, name: 'Cheesecake', category: 'Desserts', price: 7, image: 'https://th.bing.com/th/id/OIP.Y0-ld4ksP_ZxfdyMl6OW2QHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: false, isGlutenFree: false, toppings: ['Whipped Cream', 'Chocolate Syrup'] },
  { id: 4, name: 'Caesar Salad', category: 'Starters', price: 6, image: 'https://th.bing.com/th/id/OIP.e2i3RpklF3sW5uQwYEe4pwHaGu?w=199&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: false, isGlutenFree: false, toppings: ['Croutons', 'Parmesan Cheese'] },
  { id: 5, name: 'Vegan Burrito', category: 'Main Course', price: 10, image: 'https://th.bing.com/th/id/OIP.1qwmWHjUtI4J2iv0dke6NgHaHh?w=204&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: true, isGlutenFree: false, toppings: ['Guacamole', 'Sour Cream', 'Jalapenos'] },
  { id: 6, name: 'Pasta Primavera', category: 'Main Course', price: 11, image: 'https://th.bing.com/th/id/OIP.QHW4BiHjtUQrzqXRuK6oSAHaD4?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: true, isGlutenFree: true, toppings: ['Olives', 'Tomatoes', 'Basil'] },
  { id: 7, name: 'Chocolate Lava Cake', category: 'Desserts', price: 8, image: 'https://th.bing.com/th/id/OIP.IVULuuV2UN-2GyT8sYNUQAHaFS?w=202&h=144&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: false, isGlutenFree: false, toppings: ['Vanilla Ice Cream', 'Berry Compote'] },
  { id: 8, name: 'Vegetable Soup', category: 'Starters', price: 4, image: 'https://th.bing.com/th/id/OIP._KeB_kin8PDBg-M8O30_vgHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', isVegan: true, isGlutenFree: true, toppings: ['Herbs', 'Croutons'] },
];

const MenuPage = () => {
  const [filteredMenu, setFilteredMenu] = useState(menuData);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dietaryFilters, setDietaryFilters] = useState({ vegan: false, glutenFree: false });
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleDietaryFilterChange = (e) => {
    setDietaryFilters({ ...dietaryFilters, [e.target.name]: e.target.checked });
  };

  const filterMenuItems = () => {
    let filteredItems = menuData;

    if (categoryFilter) {
      filteredItems = filteredItems.filter(item => item.category === categoryFilter);
    }

    if (dietaryFilters.vegan) {
      filteredItems = filteredItems.filter(item => item.isVegan);
    }

    if (dietaryFilters.glutenFree) {
      filteredItems = filteredItems.filter(item => item.isGlutenFree);
    }

    setFilteredMenu(filteredItems);
  };

  const handleAddToCart = () => {
    // Add item to cart with selected toppings
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const customizedItem = { ...selectedItem, toppings: selectedToppings.length > 0 ? selectedToppings : selectedItem.toppings, quantity: 1 };
    cart.push(customizedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowModal(false); // Close modal after adding to cart
    alert("Added to cart!")
  };

  const handleCustomize = (item) => {
    setSelectedItem(item);
    setSelectedToppings([]); // Reset any previously selected toppings
    setShowModal(true); // Show modal for customization
  };

  const handleToppingChange = (e) => {
    const { value } = e.target;
    setSelectedToppings(prevToppings =>
      prevToppings.includes(value)
        ? prevToppings.filter(topping => topping !== value)
        : [...prevToppings, value]
    );
  };

  useEffect(() => {
    filterMenuItems();
  }, [categoryFilter, dietaryFilters]);

  return (
    <Container>
      <h1 className="text-center my-4">Menu</h1>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Group controlId="categoryFilter">
            <Form.Label>Category</Form.Label>
            <Dropdown onSelect={handleCategoryChange}>
              <Dropdown.Toggle variant="primary" id="category-dropdown">
                {categoryFilter || 'Choose Category'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Starters">Starters</Dropdown.Item>
                <Dropdown.Item eventKey="Main Course">Main Course</Dropdown.Item>
                <Dropdown.Item eventKey="Desserts">Desserts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="dietaryFilter">
            <Form.Label>Dietary Preferences</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="Vegan"
                name="vegan"
                checked={dietaryFilters.vegan}
                onChange={handleDietaryFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="Gluten-Free"
                name="glutenFree"
                checked={dietaryFilters.glutenFree}
                onChange={handleDietaryFilterChange}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {filteredMenu.length > 0 ? (
          filteredMenu.map(item => (
            <Col md={4} key={item.id}>
              <Card className="menu-item-card">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>₹{item.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleCustomize(item)}>
                    Customize
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col><h4>No items found!</h4></Col>
        )}
      </Row>

      {/* Customization Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Customize Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Select Toppings for {selectedItem?.name}</h5>
          {selectedItem?.toppings.map((topping, idx) => (
            <Form.Check
              key={idx}
              type="checkbox"
              label={topping}
              value={topping}
              checked={selectedToppings.includes(topping)}
              onChange={handleToppingChange}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>

      <Pagination className="justify-content-center my-4">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};

export default MenuPage;
