import { BlogSlider } from "@/components/Slider";
import { TestiMonialMessage } from "./message";

export const Testimonials = () => {
    const testimonialData = [
        {
            name: "Mr.Debbi Regmi",
            address: "Bhaktapur",
            message: "Nourish your body with the finest organic foods. Discover our range of healing spices.",
            rating: 4,
            avatar: "/assets/person/hari.png" 
        },
         {
            name: "Mr.Debbi Regmi",
            address: "Bhaktapur",
            message: "Nourish your body with the finest organic foods. Discover our range of healing spices.",
            rating: 4,
            avatar: "/assets/person/hari.png" 
        },
        {
            name: "Mr.Angle Regmi",
            address: "India",
            message: "Nourish your body with the finest organic foods. Discover our range of healing spices, ",
            rating: 5,
            avatar: "/assets/person/ram.png" 
        },
        {
            name: "Mr.Anup Regmi",
            address: "Bhaktapur",
            message: "Nourish your body with the finest organic foods. Discover our range of healing spices.",
            rating: 4,
            avatar: "/assets/person/shyam.png" 
        }
    ];

    return (
        <section className="py-12 bg-[#8ECD91]">
            <div className=" mx-auto px-3">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Best Sellers</h2>
                    <p className="text-gray-700 font-inter text-[29px] font-semibold leading-normal">
                        Most Loved organic products chosen by <span className="text-green-600">Customers worldwide</span>
                    </p>
                </div>
                <BlogSlider>
                    {testimonialData.map((testimonial, index) => (
                        <TestiMonialMessage
                            key={index}
                            name={testimonial.name}
                            address={testimonial.address}
                            message={testimonial.message}
                            rating={testimonial.rating}
                            avatar={testimonial.avatar}
                        />
                    ))}
                </BlogSlider>
            </div>
        </section>
    );
};