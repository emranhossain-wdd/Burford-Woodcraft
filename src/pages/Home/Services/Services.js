import { MinusIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import bestDesign from '../../../images/best-design.png';
import bestPrice from '../../../images/best-price.png';
import customBooking from '../../../images/custom-booking.png';

const Services = () => {
    return (
        <div className="bg-indigo-50 pb-12">
            <div className="text-indigo-600 tracking-wider py-12">
                <h1 className="text-3xl font-bold">OUR BEST SERVICES</h1>
                <p>Why we are the best for our client</p>
                <MinusIcon className="h-8 w-8 text-indigo-600 mx-auto" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-9/12 mx-auto">
                <div className='space-y-4'>
                    {/* 1 */}
                    <div className="bg-white flex items-center text-left border-2 py-4 px-8 rounded-3xl space-x-6">
                        <img className="w-1/3" src={bestDesign} alt="" />
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST DESIGN</h4>
                            <p className="tracking-wider">Find out what the best destinations in the World are as awarded by millions of real...</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="bg-white flex items-center text-left border-2 py-4 px-8 rounded-3xl space-x-6">
                        <img className="w-1/3" src={bestPrice} alt="" />
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST PRICE GUARANTEED</h4>
                            <p className="tracking-wider">We constantly ensures to have the lowest prices available online and it is committed...</p>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="bg-white flex flex-col justify-center border-2 py-4 px-8 space-y-4 rounded-3xl text-left">
                    <img className="w-1/3" src={customBooking} alt="" />
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">CUSTOM BOOKING</h4>
                        <p className="tracking-wider pb-4">With our custom Booking option you can book the following public product and pay securely by...</p>
                        <Link to='/customOrder' className='bg-indigo-50 text-indigo-600 font-semibold p-2 rounded-md'>Tell us what you Need</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;