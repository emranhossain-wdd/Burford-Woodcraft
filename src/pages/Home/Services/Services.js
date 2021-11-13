import { AdjustmentsIcon, BeakerIcon, CreditCardIcon, MinusIcon } from '@heroicons/react/outline';
import React from 'react';

const Services = () => {
    return (
        <div className="bg-indigo-50 pb-12">
            <div className="text-indigo-600 tracking-wider py-12">
                <h1 className="text-3xl font-bold">OUR BEST SERVICES</h1>
                <p>Why we are the best for our client</p>
                <MinusIcon className="h-8 w-8 text-indigo-600 mx-auto" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 mx-auto">
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-indigo-300 flex justify-center mx-auto rounded-full">
                        <BeakerIcon className="h-20 w-12 text-indigo-400 mx-auto" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST DESIGN</h4>
                        <p className="tracking-wider">Find out what the best destinations in the World are as awarded by millions of real...</p>
                    </div>
                </div>
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-indigo-300 flex justify-center mx-auto rounded-full">
                        <CreditCardIcon className="h-20 w-12 text-indigo-400 mx-auto" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST PRICE GUARANTEED</h4>
                        <p className="tracking-wider">We constantly ensures to have the lowest prices available online and it is committed to protect...</p>
                    </div>
                </div>
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-indigo-300 flex justify-center mx-auto rounded-full">
                        <AdjustmentsIcon className="h-20 w-12 text-indigo-400 mx-auto" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">CUSTOM BOOKING</h4>
                        <p className="tracking-wider">With our custom Booking option you can book the following public product and pay securely by...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;