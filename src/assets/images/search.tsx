import React from "react";

export type SearchSVGProps = React.SVGProps<SVGElement> &
    Partial<{
        fillColor: string;
        className: string;
    }>;

export const SearchSVG: React.FC<SearchSVGProps> = ({
    fillColor = "#000000",
    className = "",
    ...props
}) => {
    return (
        <svg
            className={className}
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            {...props}
        >
            <path d="" />
        </svg>
    );
};
