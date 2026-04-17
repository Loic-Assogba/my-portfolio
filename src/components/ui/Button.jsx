export default function Button({ children, className, link, ...props }) {
    return (
        <a href={link}
            className={`px-4 py-2 rounded-full flex items-center gap-2 w-fit bg-black text-white text-xs ${className}`}
            {...props}
        >
            {children}
        </a>
    )
}