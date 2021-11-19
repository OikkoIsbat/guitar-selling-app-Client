import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageProducts.css';

const ManageProducts = () => {
    const [prod, setProd] = useState([]);
    const { user, logOut } = useAuth();

    useEffect(() => {
        fetch('https://blooming-peak-02983.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProd(data));
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are You Sure You Want to delete this product?');
        if (proceed) {
            const url = `https://blooming-peak-02983.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = prod.filter(order => order._id !== id)
                        setProd(remaining);
                    }
                })
        }
    }






    return (
        <div>
            <h2>Manage All Products</h2>


            <ul>
                {
                    prod.map(order => <li
                        key={order._id}
                    >
                        <img src={order.img} className="image w-25" alt="" srcset="" />
                        <h5> Product Name: {order.name} </h5>

                        {order.description}-{order.price}$
                        <br />

                        <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>Delete Product</button>
                        <hr />
                    </li>)

                }
            </ul>
        </div>
    );
};

export default ManageProducts;