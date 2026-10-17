# React Product Dashboard - Assignment 5

## File Organization
- `src/components/Card.jsx`: Layout wrapper component utilizing children prop.
- `src/components/Product.jsx`: Reusable component displaying individual product details.
- `src/components/ProductList.jsx`: Component holding the product array and rendering items via .map().
- `src/App.jsx`: Root component managing application states (products, productName, productPrice) and user events.

## Challenges Faced
- Managing controlled inputs properly without violating project constraints (no external libraries, no useEffect).
- Implementing clean component composition using the children prop inside the Card component.