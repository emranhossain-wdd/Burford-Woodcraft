import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { XIcon } from '@heroicons/react/outline';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [productAdded, setProductAdded] = useState(false);

    const onSubmit = data => {
        fetch('https://quiet-fjord-11684.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setProductAdded(!productAdded);
                    reset();
                }
            })
    };

    return (
        <div className="w-9/12 mx-auto">
            <h2 className="text-2xl bg-indigo-50 text-indigo-600 font-bold rounded-lg mb-4 p-4">Add some Products</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="ring-2 ring-indigo-600 rounded-md p-2"
                    type="text"
                    {...register("img_url", { required: true })}
                    placeholder="Product Image URL"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.img_url && <span className="bg-indigo-50 text-indigo-500 rounded-md">This field is required</span>
                }

                <input
                    className="ring-2 ring-indigo-600 rounded-md p-2"
                    type="text"
                    {...register("productName", { required: true })}
                    placeholder="Product Name"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.productName && <span className="bg-indigo-50 text-indigo-500 rounded-md">This field is required</span>
                }

                <textarea
                    className="ring-2 ring-indigo-600 rounded-md p-2 h-32"
                    type="email"
                    {...register("productInformation", { required: true })}
                    placeholder="Product Information"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.productInformation && <span className="bg-indigo-50 text-indigo-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-indigo-600 rounded-md p-2"
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="Price"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.price && <span className="bg-indigo-50 text-indigo-500 rounded-md">This field is required</span>
                }

                {
                    productAdded && <span className="bg-indigo-50 text-indigo-500 rounded-md flex justify-between tracking-wider p-1">Product added successfully<XIcon onClick={() => setProductAdded(!productAdded)} className="h-6 w-6" aria-hidden="true" /></span>
                }

                <input className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md p-2" type="submit" value="Add Products" />
            </form>
        </div>
    );
};

export default AddProducts;