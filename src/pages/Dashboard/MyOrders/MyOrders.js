import { CurrencyDollarIcon, ExclamationIcon, XIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import settingsTools from '../../../images/settings-tools.png';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [productRemoved, setProductRemoved] = useState(false);

    useEffect(() => {
        fetch(`https://quiet-fjord-11684.herokuapp.com/myOrder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    const handleOrderCancel = id => {
        if (window.confirm('Cancel order. Do you want to cancel this order?')) {
            fetch(`https://quiet-fjord-11684.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                        setProductRemoved(!productRemoved);
                    }
                })
        }

    };

    return (
        <div>
            <h1 className="text-indigo-600 text-3xl font-bold">My Orders</h1>
            {
                productRemoved && <span className="bg-red-50 text-red-500 rounded-md flex justify-between tracking-wider p-1"><span className="flex"><ExclamationIcon className="h-6 w-6 mr-2" aria-hidden="true" />Order canceled</span><XIcon onClick={() => setProductRemoved(!productRemoved)} className="h-6 w-6" aria-hidden="true" /></span>
            }
            <div className="grid grid-cols-3 w-10/12 mx-auto gap-8 my-6">
                {
                    myOrders.map(myOrder => <div key={myOrder._id}
                        className="border-2 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <img className="w-4/12 rounded-full" src={myOrder?.img_url || settingsTools} alt="" />
                            {
                                myOrder?.status === 'pending' ?
                                    <p className="bg-red-100 text-red-500 py-2 px-4 rounded-lg">{myOrder?.status}</p>
                                    :
                                    <p className="bg-green-100 text-green-500 py-2 px-4 rounded-lg">{myOrder?.status}</p>
                            }
                        </div>
                        <div className="text-left my-6">
                            <h3 className="text-indigo-600 font-bold text-xl">{myOrder?.productName || myOrder?.serviceName}</h3>
                            <p className="flex">Price : {myOrder?.price || "Custom Order"}&nbsp;
                                <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                            </p>
                            <button onClick={() => handleOrderCancel(myOrder?._id)} className="bg-red-100 text-red-500 py-2 px-4 rounded-lg mt-6">Cancel</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;