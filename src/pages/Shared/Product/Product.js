import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, RefreshIcon } from '@heroicons/react/outline'

const Product = props => {
    const { _id, img_url, productName, productInformation, price } = props.product;

    const isLoading = props.isLoading;

    if (isLoading) {
        return <div className="flex justify-center"><RefreshIcon className="h-20 w-20 text-indigo-600 animate-spin" aria-hidden="true" /></div>
    }

    return (
        <div className="flex">
            <div className="flex flex-col justify-between p-4 border-2 rounded-lg hover:shadow-md">
                <div>
                    <img className="rounded-lg" src={img_url} alt="" />
                    <div className="flex flex-col justify-between space-y-6 my-4">
                        <h3 className="text-xl font-semibold text-indigo-600 tracking-wider">{productName}</h3>
                        <p className="tracking-wider">{productInformation}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="flex bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg">Price : {price}&nbsp;
                        <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                    </p>
                    <Link to={`/order/${_id}`}>
                        <button className="bg-indigo-600 text-white font-bold rounded-lg p-3">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;