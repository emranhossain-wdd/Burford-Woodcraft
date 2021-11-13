import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from 'react-rating';
import { StarIcon } from '@heroicons/react/outline';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://quiet-fjord-11684.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="bg-indigo-50 py-12 my-8">
            <h1 className="text-3xl font-bold text-indigo-600">Our client say</h1>
            <Slider className="w-10/12 mx-auto" {...settings}>
                {
                    reviews.map(review => <div key={review._id}
                        className="px-6 mt-8"
                    >
                        <div className="bg-white border-2 py-6 px-8 rounded-2xl space-y-4">
                            <Rating
                                className="text-indigo-600"
                                emptySymbol={<StarIcon className="h-6 w-6 mr-2" aria-hidden="true" />}
                                fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>}
                                initialRating={review?.rating}
                                readonly
                            />
                            <h3 className="text-indigo-600 text-xl font-bold">{review?.reviewHeading}</h3>
                            <p>{review?.review}</p>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Reviews;