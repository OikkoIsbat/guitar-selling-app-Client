import React, { useEffect, useState } from 'react';


const Reviews = () => {

    const [currentReviews, setCurrentReview] = useState([]);
    useEffect(() => {
        fetch('https://blooming-peak-02983.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setCurrentReview(data));
    }, []);
    return (
        <div>
            <br />
            <h2 className="text-center text-info">Happy Customers</h2>
            <br />
            <ul>
                {
                    currentReviews.map(currentReview => <li
                        key={currentReview._id}
                        className="border border-warning mt-2 text-center"> <h5>"{currentReview.reviewSubmit}"</h5>-Wrote by,
                        <p className="text-danger text-bold

">{currentReview.email}</p>


                        <h5>Rated: {currentReview.rateSubmit}/5</h5>




                    </li>)

                }
            </ul>
        </div>
    );
};

export default Reviews;