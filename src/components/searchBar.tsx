import { RxCross1 } from "react-icons/rx";

export default function InputField({ value, onChange, onClear, placeholder = "", type = "text", showClear = true, icon, className = "" }) {
    return (
        <div className={`flex items-center border border-gray-300 rounded-md px-3 py-2 relative focus-within:border-green-500 transition-colors duration-200 ease-in-out ${className}`}>
            {icon && <span className="mr-2 text-gray-400">{icon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="outline-none flex-1 bg-transparent text-sm placeholder-gray-400"
                aria-label={placeholder}
            />
            
        </div>
    );
}
