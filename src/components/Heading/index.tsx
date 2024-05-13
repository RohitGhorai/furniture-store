import React from "react";

const sizes = {
    "2xl": "text-[68px] font-bold md:text-5xl",
    xl: "text-6xl font-bold md:text-[52px] sm:text-[46px]",
    s: "text-base font-semibold",
    md: "text-lg font-semibold",
    xs: "text-sm font-semibold",
    lg: "text-xl font-semibold",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    as,
    size = "xs",
    ...restProps
}) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-gray-900 font-plusjakartasans ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };
