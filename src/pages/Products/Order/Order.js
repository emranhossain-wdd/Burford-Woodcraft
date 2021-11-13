import { CurrencyDollarIcon, XIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Order = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const [productAdded, setProductAdded] = useState(false);
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        fetch(`https://quiet-fjord-11684.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [id])

    const onSubmit = data => {
        data.email = user?.email;
        data.productName = product?.productName;
        data.img_url = product?.img_url;
        data.price = product?.price;
        data.status = 'pending';
        fetch('https://quiet-fjord-11684.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setProductAdded(!productAdded);
                }
            })
    };

    return (
        <div>
            <Header />
            <div className="w-10/12 mx-auto py-6">
                <div className="flex items-center">
                    <img className="w-1/6 rounded-lg" src={product?.img_url} alt="" />
                    <div className="text-left ml-6 space-y-4">
                        <h3 className="text-xl font-semibold text-indigo-600">{product?.productName}</h3>
                        <h3>{product?.productInformation}</h3>
                        <p className="flex font-semibold text-lg items-center text-indigo-600">price : {product?.price}&nbsp;<CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" /></p>
                    </div>
                </div>
                <form className="grid space-y-4 py-6" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="ring-2 ring-indigo-600 rounded-md p-2"
                        defaultValue={user?.displayName}
                    />

                    <input
                        defaultValue={user?.email}
                        className="ring-2 ring-indigo-600 rounded-md p-2"
                    />

                    <select className="ring-2 ring-indigo-600 rounded-md p-2" {...register("paymentBy")}>
                        <option value="paypal">Paypal</option>
                        <option value="visa-card">Visa card</option>
                        <option value="rocket">Rocket</option>
                    </select>

                    {
                        productAdded && <span className="bg-indigo-50 text-indigo-500 rounded-md flex justify-between tracking-wider p-1">Ordered successfully<XIcon onClick={() => setProductAdded(!productAdded)} className="h-6 w-6" aria-hidden="true" /></span>
                    }

                    <input className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md p-2" type="submit" value="Order Now" />
                </form>
            </div>
        </div>
    );
};

export default Order;