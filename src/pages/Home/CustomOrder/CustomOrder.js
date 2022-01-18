import { XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const CustomOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [orderSuccessful, setOrderSuccessful] = useState(false);

    const onSubmit = data => {
        data.email = user?.email;
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
                    reset()
                    setOrderSuccessful(true);
                }
            })
    };

    return (
        <div className='h-screen'>
            <div className='h-full flex flex-col justify-between'>
                <Header />
                <div>
                    <h2 className='text-2xl font-bold tracking-wider'>Tell us what you Need</h2>
                    <form className="grid space-y-4 py-6 w-9/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("serviceName")}
                            className="ring-2 ring-indigo-600 rounded-md p-2"
                            placeholder='Enter Product / Service name'
                        />

                        <input
                            {...register("email")}
                            placeholder='your email address'
                            defaultValue={user?.email}
                            className="ring-2 ring-indigo-600 rounded-md p-2"
                        />

                        {
                            orderSuccessful && <span className="bg-indigo-50 text-indigo-500 rounded-md flex justify-between tracking-wider p-1">Ordered successfully<XIcon onClick={() => setOrderSuccessful(false)} className="h-6 w-6" aria-hidden="true" /></span>
                        }

                        <input className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md p-2" type="submit" value="Submit Requirement" />
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default CustomOrder;