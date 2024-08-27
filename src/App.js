import React from 'react';
import ParentComponent from './ParentComponent.js';
import './styles.css';
// import image from './image.jpg'

function App() {

    const containerStyle = {
        // backgroundImage: `url(${image})`, /* Adjust the path as needed */
        // backgroundSize: 'cover', /* Ensures the image covers the entire background */
        // backgroundPosition: 'center', /* Centers the image */
        // backgroundRepeat: 'no-repeat', /* Prevents the image from repeating */
        // backgroundAttachment: 'fixed', /* Keeps the background fixed while scrolling */
        // minHeight: '100vh', /* Ensures the container takes full viewport height */
    };

    return (
        <div className="App" style={containerStyle}>
            <ParentComponent />
        </div>
    );
}

export default App;
