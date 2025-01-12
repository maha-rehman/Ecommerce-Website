import React from 'react';

const BlogPost = ({ date, month, category, title, description, imageUrl }) => (
    <div className="flex flex-col max-w-md">
        <div className="relative">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-60 object-cover"
            />
            <div className="absolute top-4 left-4 bg-white p-2 text-center">
                <div className="text-xl font-bold">{date}</div>
                <div className="text-sm uppercase">{month}</div>
            </div>
            <div className="absolute bottom-4 left-4">
                <span className="bg-[#b57b00] text-white px-4 py-1 text-sm">
                    {category}
                </span>
            </div>
        </div>

        <h2 className="text-2xl font-playfair mt-4 text-center">{title}</h2>
        <div className="text-center mt-2 text-gray-500 text-sm">
            <a href="#" className="hover:underline italic">Leave a comment</a>
        </div>
        <p className="text-center mt-3 text-gray-600 leading-normal">
            {description}
        </p>
        <div className="text-center mt-4">
            <a href="#" className="text-gray-500 underline hover:text-gray-700">Read More</a>
        </div>
    </div>
);

const MagazineBlog = () => {
    const posts = [
        {
            date: "01",
            month: "DEC",
            category: "Boots",
            title: "Venenatis veulum peus",
            description: "Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis",
            imageUrl: "//demo-basel2.myshopify.com/cdn/shop/articles/shoes-blog1_367x268_crop_center.progressive.jpg"
        },
        {
            date: "01",
            month: "DEC",
            category: "Boots",
            title: "Hac fames tempor",
            description: "Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam",
            imageUrl: "//demo-basel2.myshopify.com/cdn/shop/articles/shoes-blog2_367x268_crop_center.progressive.jpg"
        },
        {
            date: "01",
            month: "DEC",
            category: "Boots",
            title: "Urna ligula inceptos",
            description: "Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper ar",
            imageUrl: "//demo-basel2.myshopify.com/cdn/shop/articles/shoes-blog4_367x268_crop_center.progressive.jpg"
        }
    ];

    return (
        <div className="container mx-auto my-6 p-16">
            <header className="text-center mb-12">
                <p className="text-[#b57b00] font-tangerine font-semibold text-4xl mb-2">Fashion News</p>
                <h1 className="text-5xl font-playfair font-semibold">Magazine & blog</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {posts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default MagazineBlog;