import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';

const Review = () => {

    const { user } = useAuth();
    const reviewRef = useRef();
    const rateRef = useRef();
    // const email = sessionStorage.getItem("email");

    const handleReviewSubmit = e => {
        e.preventDefault();
        const reviewSubmit = reviewRef.current.value;
        let rateSubmit;

        if (rateRef.current.value < 0) {
            rateSubmit = 0;
        }
        else if (rateRef.current.value > 5) {
            rateSubmit = 5;
        }
        else {
            rateSubmit = rateRef.current.value;
        }

        const newReview = { reviewSubmit, rateSubmit }
        newReview.email = user.email;
        console.log(newReview);
        fetch('https://blooming-peak-02983.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Submitted')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <br />
            <h3 className="text-center text-primary">Add A Review</h3>

            <form className="text-center" onSubmit={handleReviewSubmit} >
                <input type="text" ref={reviewRef} placeholder="Type Your Review" defaultValue="" />
                <br />

                <input type="text" ref={rateRef} placeholder="Rate Out of 5" />
                <br />


                <input className="bg-success text-white" type="submit" value="Submit" />

                <br />
                <br />


            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Review;