import React from "react";

const sizes = {
    "5xl": "text-[44px] font-light md:text-[40px] sm:text-[34px]",
    "6xl": "text-5x1 font-medium md:text-[44px] sm:text-[38px]",
    xs: "text-xs font-normal",
    lg: "text-base font-normal",
    s: "text-sm font-normal",
    "2xl": "text-xl font-medium",
    "3xl": "text-2x1 font-medium md:text-[22px]",
    "4xl": "text-[28px] font-medium md:text-[26px] sm:text-2xl",
    xl: "text-lg font-medium",
    md: "text-[15px] font-medium",
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "lg",
    ...restProps
}) => {
    const Component = as || "p";
    return (
        <Component
            className={`text-gray-600_01 font-rubik ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text };
