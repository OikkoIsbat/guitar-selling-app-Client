import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import './PurchaseDetails.css';

const PurchaseDetails = () => {
    const phoneRef = useRef();
    const addressRef = useRef();
    const serviceRef = useRef();
    const priceRef = useRef();
    const email = sessionStorage.getItem("email");
    const handleAddBooking = e => {
        const serviceName = serviceRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const price = priceRef.current.value;

        const newBooking = { serviceName, phone, address, price, detailsId }
        newBooking.email = email;
        newBooking.status = "pending";
        console.log(newBooking);

        fetch('https://blooming-peak-02983.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booked Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    const { detailsId } = useParams();

    const [service, setService] = useState({});

    useEffect(
        () => {
            fetch(`https://blooming-peak-02983.herokuapp.com/products/${detailsId}`)
                .then(res => res.json())
                .then(data => setService(data));

        }, [])
    return (
        <div className="">
            <h2 className="text-center">Product Name:  {service.name}</h2>
            <img src={service.img} className="mx-auto d-block servicePic" />
            <h4 className="text-center">Description: {service.description}</h4>
            <p className="text-center">Price: {service.price}</p>
            <hr />
            <br />

            <h4 className="text-info text-center">Fill Up this form to confirm your order</h4>

            <h5 className="text-center text-danger">Please enter your phone number and address.</h5>
            <br />
            <form className="text-center" onSubmit={handleAddBooking}>
                <input type="text" ref={serviceRef} placeholder="Service Name" defaultValue={service?.name} />
                <br />
                <input type="text" ref={phoneRef} placeholder="Phone No" />
                <br />
                <input type="text" ref={addressRef} placeholder="Address" />
                <br />
                <input type="text" ref={priceRef} placeholder="Price" defaultValue={service?.price} />
                <br />

                <input type="submit" value="Place Order" />

                <br />
                <br />


            </form>
        </div>
    );
};

export default PurchaseDetails;