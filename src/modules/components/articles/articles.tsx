import Image from 'next/image';

export const Articles = ({ image, date, title, description }) => {
  return (
    <div className="flex flex-col items-center "> 
      <div className="bg-white rounded-xxl overflow-hidden w-full max-w-sm transition-transform hover:scale-105">
        
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>

        {/* Content */}
        <div className="px-3 py-3 flex flex-col items-start text-left">
          <p className="text-gray-400 text-xs mb-1">{date}</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};
