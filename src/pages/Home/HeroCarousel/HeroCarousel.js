import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const carouselItem = [
        {
            hading: "Welcome To Burford Woodcraft",
            img_url: "https://www.burford-woodcraft.co.uk/wp-content/uploads/2019/04/focus-gallery-swordfish.jpg",
            name: "Swordfish",
            description: "This beautifully coloured swordfish is leaping the crest of a wave. John leaves natural wood showing through the swelling sea to create texture and depth.",
        },
        {
            hading: "Welcome To Burford Woodcraft",
            img_url: "https://www.burford-woodcraft.co.uk/wp-content/uploads/2019/04/focus-gallery-conference-handbag.jpg",
            name: "Conference Handbag",
            description: "Jane has combined her own 100% wool handmade felt with a laminated Birch plywood frame resulting in a unique contemporary handbag.",
        },
        {
            hading: "Welcome To Burford Woodcraft",
            img_url: "https://www.burford-woodcraft.co.uk/wp-content/uploads/2019/04/focus-gallery-silver-fruit-platter.jpg",
            name: "Silver Fruit Platter",
            description: "The middle of this lovely contoured platter has silver leaf detail. The cherries, plum, apples and pear are covered in distressed silver leaf which allows the black base to show through.",
        },
        {
            hading: "Welcome To Burford Woodcraft",
            img_url: "https://www.burford-woodcraft.co.uk/wp-content/uploads/2019/04/focus-gallery-shire-horse.jpg",
            name: "Shire Horse",
            description: "From the flowing mane to the feathers on his fetlocks Sue captures perfectly the pleasure of this horse enjoying a good canter.",
        }
    ]

    return (
        <div>
            <Slider className="w-10/12 mx-auto" {...settings}>
                {
                    carouselItem.map((item, i) => <div key={i}>
                        <div className="flex items-center rounded-3xl my-6 bg-gray-100">
                            <div className="px-4 text-left space-y-4">
                                <h1 className="text-indigo-600 text-5xl font-bold">{item.hading}</h1>
                                <h3 className="font-bold text-2xl">{item.name}</h3>
                                <p className="w-8/12 font-semibold text-gray-600">{item.description}</p>
                            </div>
                            <img className="rounded-r-3xl" src={item.img_url} alt="" />
                        </div>
                    </div>)
                }
            </Slider>

        </div>
    );
};

export default HeroCarousel;