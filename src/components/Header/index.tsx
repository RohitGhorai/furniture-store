import Link from "next/link";
import React from "react";
import { Img, Input, MegaMenu1, Text } from "../index";
import { CloseSVG } from "../../assets/images/index";

interface Props {
    className: string;
}

export default function Header({ ...props }: Props) {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header {...props} className={`${props.className} relative`}>
            <div className="flex justify-center self-stretch bg-black-900 py-4">
                <div className="container-xs flex items-center justify-between gap-5 pl-[371px] md:pl-5 sm:flex-col">
                    <div className="flex items-center gap-2 sm:flex-col">
                        <Link href="#">
                            <Img
                                src="/img_fi_837891.svg"
                                width={24}
                                height={24}
                                alt="notification icon"
                                className="h-[24px] w-[24px] sm:w-full"
                            />
                        </Link>
                        <Text
                            size="s"
                            as="p"
                            className="flex self-end !font-satoshi !font-medium !text-white-A700"
                        >
                            <span className="font-rubik font-normal text-white-A700">
                                Sign up and get 10% off to your first
                                order.&nbsp;
                            </span>
                            <a
                                href="#"
                                className="font-rubik font-normal text-white-A700 underline"
                            >
                                Sign Up Now
                            </a>
                        </Text>
                    </div>
                    <Link href="#">
                        <Img
                            src="img_close.svg"
                            width={20}
                            height={20}
                            alt="closeicon"
                            className="h-[20px] w-[20px] sm:w-full"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center self-stretch border-b border-solid border-gray-200_01 bg-white-A700 py-3">
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                    <Img
                        src="img_header_logo.png"
                        width={129}
                        height={19}
                        alt="headerlogo"
                        className="h-[19px] w-[129px] object-contain"
                    />
                    <ul className="flex items-center gap-11 sm:flex-col">
                        <li>
                            <Link href="#">
                                <Text
                                    size="s"
                                    as="p"
                                    className="!font-medium !text-black-900"
                                >
                                    Home
                                </Text>
                            </Link>
                        </li>
                        <li
                            onMouseLeave={() => {
                                setMenuOpen(false);
                            }}
                            onMouseEnter={() => {
                                setMenuOpen(true);
                            }}
                        >
                            <div className="flex cursor-pointer pt-px">
                                <Text
                                    size="s"
                                    as="p"
                                    className="cursor-pointer hover:font-medium hover:text-black-900"
                                >
                                    Shop
                                </Text>
                                <Img
                                    src="img_arrow_down_gray_600_01.svg"
                                    width={16}
                                    height={16}
                                    alt="dropdownicon"
                                    className="h-[16px] w-[16px]"
                                />
                            </div>
                            {menuOpen ? <MegaMenu1 /> : null}
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer">
                                <Text
                                    size="s"
                                    as="p"
                                    className="hover:font-medium hover:text-black-900"
                                >
                                    Offers
                                </Text>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer">
                                <Text
                                    size="s"
                                    as="p"
                                    className="hover:font-medium hover:text-black-900"
                                >
                                    Contact us
                                </Text>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer">
                                <Text
                                    size="s"
                                    as="p"
                                    className="hover:font-medium hover:text-black-900"
                                >
                                    Blog
                                </Text>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex w-[21%] items-center justify-center gap-5 md:w-full">
                        <Input
                            size="xs"
                            name="SearchBar"
                            placeholder={`Search for products`}
                            value={searchBarValue}
                            onChange={(e: string) => setSearchBarValue(e)}
                            prefix={
                                <Img
                                    src="img_contrast.svg"
                                    width={20}
                                    height={20}
                                    alt="contrast"
                                    className="h-[20px] w-[20px] cursor-pointer"
                                />
                            }
                            suffix={
                                searchBarValue?.length > 0 ? (
                                    <CloseSVG
                                        onClick={() => setSearchBarValue("")}
                                        fillColor="#7e7171ff"
                                    />
                                ) : null
                            }
                            className="flex-grow gap-1 rounded-[18px] !text-gray-600_01"
                        />
                        <Link href="#">
                            <Img
                                src="img_thumbs_up.svg"
                                width={20}
                                height={20}
                                alt="thumbsupicon"
                                className="h-[20px] w-[20px]"
                            />
                        </Link>
                        <Link href="#">
                            <Img
                                src="img_lock.svg"
                                width={20}
                                height={20}
                                alt="lockicon"
                                className="h-[20px] w-[20px]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
