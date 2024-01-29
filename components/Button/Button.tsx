
export type ButtonProps = {
    children: React.ReactNode;
} & React.BaseHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className}: ButtonProps) => {
    return <button
        className={`
        bg-primary rounded-md px-6 py-2 text-white text-sm
        ${className}
        `}
    >
        {children}
    </button>
}

export default Button;