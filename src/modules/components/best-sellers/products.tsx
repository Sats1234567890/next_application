import Image from "next/image";
import Link from "next/link";

export const BestSellerProduct = ({ id, image, title, description, status }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden h-full max-w-sm mx-auto">
      <Link href={`/products/${id}`}>
        <p className="relative w-full h-48 block">
          <Image src={image} alt={title} fill className="object-cover" />
          {status && (
            <span className="absolute top-2 left-2 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full shadow">
              {status}
            </span>
          )}
        </p>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* CTA Button linking to dynamic product page */}
        <div className="mt-auto">
          <Link href={`/products/${id}`}>
            <p className="block w-full text-center bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition">
              Shop now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
