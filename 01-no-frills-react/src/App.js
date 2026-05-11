// Basic React component without JSX

const Pizza = (props) => { // props allows the component to set properties when it is called
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name), // sets the name property
        React.createElement("p", {}, props.ingredients), // sets the ingredients
    ]);
};


// class == component
const App = () => { // this is called a react component, it is a function that returns a React element
    return React.createElement(  // this is the element returned
        "div", // Specify the type of element to create, in this case a div
        {}, // Create a div element
        [
            React.createElement("h1", {}, "Padre Gino's"), // Create an h1 element with the text "Padre Gino's"
            React.createElement(Pizza, { name: "Four Cheese Pizza", ingredients: "Parmesan, Mozzarella, Ricotta, Gorgonazola" }),
            React.createElement(Pizza, { name: "Pepperoni Pizza", ingredients: "Pepperoni, Mozzarella, Marinara Sauce" }),
            React.createElement(Pizza, { name: "Vegetarian Pizza", ingredients: "Bell Peppers, Onions, Mushrooms, Black Olives" }),
            React.createElement(Pizza, { name: "Hawaiian Pizza", ingredients: "Ham, Pineapple, Mozzarella" }),
        ]);
};
// this is choosing where on the html page to render the React component
const container = document.getElementById("root"); // rendered inside the root id "div" in index.html
const root = ReactDOM.createRoot(container); // Create a React root using the root element
root.render(React.createElement(App)); // Render an App component instance into the root element