import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-peak-02983.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('service added');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className="text-center text-danger">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="description" />

                <input {...register("img")} placeholder="img" />

                <input {...register("price")} placeholder="price" />

                <input type="submit" />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </form>
        </div>
    );
};

export default AddService;