import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);
    const [status, setStatus] = useState("");

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    useEffect(() => {
        fetch('https://blooming-peak-02983.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleUpdate = (id) => {
        fetch(`https://blooming-peak-02983.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
    };

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are You Sure You Want to cancel this order?');
        if (proceed) {
            const url = `https://blooming-peak-02983.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(order => order._id !== id)
                        setOrder(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2>Manage All Orders</h2>

            <h1>All The User Emails and their orders:</h1>
            <ul>
                {
                    orders.map(order => <li
                        key={order._id}
                    >{order.email} : {order.serviceName} - {order.price}$
                        <p>Address: {order.address}</p>
                        <input onChange={handleStatus} type="text" defaultValue={order.status} />

                        <button className="btn btn-warning" onClick={
                            () => handleUpdate(order._id)
                        }>Update Status</button>

                        {/* <form onSubmit={handleSubmit(onSubmit)}>

                            <select {...register("status")}>
                                <option value="pending">pending</option>
                                <option value="approved">approved</option>

                            </select>
                            <input type="submit" />
                        </form> */}


                        <br />
                        <br />
                        <button onClick={() => handleDeleteOrder(order._id)}
                            className="btn btn-danger">Delete Order</button>
                        <hr />
                    </li>)

                }
            </ul>
        </div>
    );
};

export default ManageAllOrders;