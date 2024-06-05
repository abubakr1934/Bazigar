
import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const cards = [
        {
            title: "Evening Solitaire",
            subtitle: "Draw 1",
            description: "Bazi ₹10, ₹20 Win 5X",
            image: "https://bazigar.in/assets/website/images/home-page/solitaire-threecard-3.webp"
        },
        {
            title: "Night Tetris Neo",
            subtitle: "New Daily Challenges",
            description: "Bazi ₹10, ₹20 Win 5X",
            image: "https://bazigar.in/assets/website/images/home-page/tetris-neo-4.webp"
        },
        {
            title: "Night Tetris Classic",
            subtitle: "",
            description: "Bazi ₹10, ₹20 Win 5X",
            image: "https://bazigar.in/assets/website/images/home-page/tetris-classic-4.webp"
        },
        {
            title: "Night Snow Snake",
            subtitle: "",
            description: "Bazi ₹10, ₹20 Win 5X",
            image: "https://bazigar.in/assets/website/images/home-page/snow-snake-4.webp"
        }
    ];

    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
                {cards.map((card, idx) => (
                    <Carousel.Item key={idx} className={`carousel-item ${index === idx ? 'active' : ''}`}>
                        <Card className={`card ${index === idx ? 'focused' : ''}`}>
                            <Card.Img variant="top" src={card.image} alt={card.title} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Subtitle>{card.subtitle}</Card.Subtitle>
                                <Card.Text>{card.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="card-details">
                <h2>{cards[index].title}</h2>
                <p>{cards[index].description}</p>
            </div>
        </div>
    );
};

export default CarouselComponent;
