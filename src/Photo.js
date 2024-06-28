import React from 'react';

const Photo = ({ photo, onRate }) => {
    const { link, rating, author, dateAdded, details } = photo;

    const handleRatingChange = (newRating) => {
        onRate(photo.id, newRating);
    };

    return (
        <div>
            <img src={link} alt={`Photo by ${author}`} />
            <div>
                <StarRating rating={rating} onChange={handleRatingChange} />
                <p>Średnia ocena: {rating.toFixed(1)}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Szczegóły</a>
                <p>Autor: {author}</p>
                <p>Data dodania: {dateAdded}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

const StarRating = ({ rating, onChange }) => {
    const [hover, setHover] = React.useState(null);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => onChange(ratingValue)}
                            style={{ display: 'none' }}
                        />
                        <i
                            className="fa fa-star"
                            style={{
                                color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                                cursor: 'pointer',
                                fontSize: '2rem',
                            }}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        ></i>
                    </label>
                );
            })}
        </div>
    );
};

export default Photo;
