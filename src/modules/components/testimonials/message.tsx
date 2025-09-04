import Image from "next/image";
export const TestiMonialMessage = ({ name, address, message, rating, avatar }) => {
    return (
        <div className="bg-gray-300 bg-opacity-70 rounded-2xl px-3 py-4 flex flex-col items-center min-w-[250px] max-w-[300px] flex-shrink-0 transition-transform duration-300 ease-in-out">
            {/* Avatar & info */}
            <div className="flex items-center mb-4 w-full">
                <Image
                    src={avatar}
                    alt={name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-700">From {address}</p>
                </div>
            </div>
            <p className="text-gray-800 italic mb-4 text-center">{message}</p>
            <div className="flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < rating ? "text-orange-400" : "text-gray-300"}>&#9733;</span>
                ))}
            </div>
        </div>
    );
};
