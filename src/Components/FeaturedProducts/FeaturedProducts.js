import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const FeaturedProducts = () => {
    const [act, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://blooming-peak-02983.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    return (
        <div className="course-container mt-4">
            <h2 className="text-primary text-center mb-4">Featured Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    act.slice(0, 6).map(activity => <Card activity={activity}></Card>)

                }
            </div>

        </div>
    );
};

export default FeaturedProducts;