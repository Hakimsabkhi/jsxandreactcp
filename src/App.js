// App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Name } from './components/Name';
import { Price } from './components/Price';
import { Description } from './components/Description';
import { Image } from './components/Image';
import product from './product';
const firstName = "Hakim";

function App() {
    const greetingMessage = firstName ? `Hello, ${firstName}` : "Hello, there!";

    return (
        <div className="container mt-5">
            <Card>
                <Card.Body>
                    <Image imageprop={product.imageURL} />
                    <Card.Title>
                        <Name nameprop={product.name} />
                    </Card.Title>
                    <Card.Text>
                        <Price priceprop={product.price} />
                        <Description descriptionprop={product.description}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <p className="mt-3">{greetingMessage}</p>
            {firstName && <img src="path-to-your-image.jpg" alt="Welcome" />}
        </div>
    );
}
export default App;