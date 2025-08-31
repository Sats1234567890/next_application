import Button from "@/components/global/button";

// Consistent card design with equal height and proper spacing
export const BestSellerProduct = ({ image, title, description, status }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden h-full max-w-sm mx-auto">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {status && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full shadow">
            {status}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-auto">
          <Button 
            text="Shop now" 
            href="/shop" 
            className="w-full text-center px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};
