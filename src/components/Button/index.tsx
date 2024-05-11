const shapes = {
    square: "rounded-[0px]",
    round: "rounded-lg",
    circle: "rounded-[50%]",
} as const;

const variants = {
    outline: {
        black_900: "border-black-900 border border-solid text-black-900",
        lime_900: "border-lime-900 border border-solid text-lime-900",
        gray_200_01: "border-gray-200_01 border border-solid text-gray-600_01",
    },
    fill: {
        black_900_01: "bg-black-900_01",
        white_A700: "bg-white-A700",
        black_900: "bg-black-900 text-white-A700",
        black_900_66: "bg-black-900_66",
        gray_200_03: "bg-gray-200_03 text-gray-600_01",
        lime_900: "bg-lime-900 text-orange-50",
        black_900_4c: "bg-black-900_4c",
    },
} as const;

const sizes = {
    "4xl": "h-[40px] px-4 text-[15px]",
    "3xl": "h-[40px] px-2.5",
    lg: "h-[31px] px-[7px] text-base",
    "7xl": "h-[52px] px-[35px] text-base",
    xl: "h-[35px] px-2 text-base",
    xs: "h-[20px]",
    sm: "h-[24px] px-[7px]",
    md: "h-[30px] px-4 text-xs",
    "5xl": "h-[48px] px-[15px]",
    "6xl": "h-[48px] px-[35px] text-sm",
    "2xl": "h-[36px] px-2",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
> &
    Partial<{
        className: string;
        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;
        onClick: () => void;
        shape: keyof typeof shapes;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        color: string;
    }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "outline",
    size = "2xl",
    color = "gray_200_01",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
                (shape && shapes[shape]) || ""
            } ${(size && sizes[size]) || ""} ${
                (variant &&
                    variants[variant]?.[
                        color as keyof (typeof variants)[typeof variant]
                    ]) ||
                ""
            }`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

export { Button };
