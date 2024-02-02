
export type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
} & React.BaseHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';
        case 'tertiary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-tertiary text-primary border border-quaternary';
        default:
            return disabled ? '' : '';
    }
}

const Button = ({variant = 'primary', children, className, disabled, ...rest}: ButtonProps) => {
    return <button
        className={`rounded-md px-6 py-2  ${getVariant(variant, disabled)} ${className}`}
        disabled={disabled}
        {...rest}
    >
        {children}
    </button>
}

export default Button;