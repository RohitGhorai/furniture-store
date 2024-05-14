"use client";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    Button,
    Footer,
    Header,
    Heading,
    HomeColumnOne,
    HomeColumncomfy,
    HomeColumnratingBar,
    HomeRowhighQuality,
    Img,
    Slider,
    Text,
} from "../../components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const data = [
    {
        image: "img_rectangle_14_7.png",
        fortyfive: "4.5",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        image: "img_rectangle_14_8.png",
        fortyfive: "4.5",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        image: "img_rectangle_14_9.png",
        fortyfive: "4.5",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        image: "img_rectangle_14_10.png",
        fortyfive: "4.5",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
];
const data1 = [
    {
        comfyCraftOne: "img_rectangle_14.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_270x270.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_1.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_2.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_3.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_4.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_5.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
    {
        comfyCraftOne: "img_rectangle_14_6.png",
        productname: "Comfy craft",
        pureenglish: "Pure english wood with...",
        price: "$ 500",
        price1: "$ 800",
        offer: "30% OFF",
    },
];
const data2 = [
    {
        description:
            "Absolutely delighted with my recent furniture purchase! The sleek design and sturdy build perfectly complement my space.",
        username: "John Oliver",
        johnoliverimage: "img_rectangle_10.png",
        image: "img_rectangle_11.png",
        imageone: "img_rectangle_12.png",
    },
    {
        description:
            "Impressed with the furniture&#39;s craftsmanship and comfort. It&#39;s transformed my living room into a cozy haven. Highly recommended!",
        username: "John Oliver",
        johnoliverimage: "img_rectangle_10_264x148.png",
        image: "img_rectangle_11_120x148.png",
        imageone: "img_rectangle_12_120x148.png",
    },
    {
        description:
            "Thrilled with my new furniture pieces! They&#39;re chic, functional, and fit seamlessly into my home decor. A fantastic addition to any space..",
        username: "John Oliver",
        johnoliverimage: "img_rectangle_10_1.png",
        image: "img_rectangle_11_1.png",
        imageone: "img_rectangle_12_1.png",
    },
];

export default function Home1Page() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef<AliceCarousel>(null);
    const [sliderState1, setSliderState1] = React.useState(0);
    const sliderRef1 = React.useRef<AliceCarousel>(null);

    return (
        <>
            <div className="flex w-full flex-col items-center gap-[95px] bg-white-A700 md:gap-[71px] sm:gap-[47px]">
                <div className="flex flex-col items-center gap-8 self-stretch">
                    <Header className="self-stretch" />
                    <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
                        <div className="flex flex-col gap-[47px]">
                            <div className="flex flex-col items-start gap-[5px]">
                                <Text size="xl" as="p" className="!font-normal">
                                    Discover quality, style, and comfort for
                                    every room
                                </Text>
                                <Heading
                                    size="2xl"
                                    as="h1"
                                    className="w-full leading-[80px] !text-black-900"
                                >
                                    Enhance your space with timeless furniture.
                                </Heading>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    color="lime_900"
                                    size="6xl"
                                    variant="fill"
                                    className="min-w-[200px] rounded-[24px] font-semibold sm:px-5"
                                >
                                    Buy now
                                </Button>
                                <Button
                                    color="lime_900"
                                    size="6xl"
                                    variant="fill"
                                    className="min-w-[200px] rounded-[24px] font-semibold font-plusjakartasans sm:px-5"
                                >
                                    View more
                                </Button>
                            </div>
                            <div className="flex gap-6 self-center pr-4 sm:flex-col">
                                <div className="flex flex-col items-start gap-1">
                                    <Text
                                        size="3xl"
                                        as="p"
                                        className="!font-normal !text-black-900"
                                    >
                                        200+
                                    </Text>
                                    <Text as="p">International Brands</Text>
                                </div>
                                <div className="h-full w-px bg-black-900_19 sm:h-px sm:w-full" />
                                <div className="flex flex-col items-start gap-[5px]">
                                    <Text
                                        size="3xl"
                                        as="p"
                                        className="!font-normal !text-black-900"
                                    >
                                        2,000+
                                    </Text>
                                    <Text as="p">High-Quality Products</Text>
                                </div>
                                <div className="h-full w-px bg-black-900_19 sm:h-px sm:w-full" />
                                <div className="flex flex-col items-start gap-[5px]">
                                    <Text
                                        size="3xl"
                                        as="p"
                                        className="!font-normal !text-black-900"
                                    >
                                        30,000+
                                    </Text>
                                    <Text as="p">Happy Customer</Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-[21px]">
                            <div>
                            <Img
                                src="img_rectangle_4.png"
                                width={964}
                                height={328}
                                alt="featured image"
                                className="h-[328px] w-full rounded-[16px] object-cover md:h-auto"
                            />
                            <div className="relative mt-[-46px] flex items-start justify-between gap-5">
                                <div className="mt-[13px] flex w-[9%] justify-center rounded-[9px] bg-black-900_66">
                                    <div className="flex h-[10px] w-[40px]" />
                                </div>

                                <Button
                                    color="lime_900"
                                    size="6xl"
                                    variant="fill"
                                    rightIcon={
                                        <Img
                                            src="img_arrowleft.svg"
                                            width={12}
                                            height={12}
                                            alt="arrow_left"
                                            className="h-[12px] w-[12px]"
                                        />
                                    }
                                    className="min-w-[102px] gap-2 rounded-br-[16px] rounded-tl-[16px] font-medium"
                                >
                                    Buy now
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-6 md:flex-row sm:flex-col">
                            <div className="flex w-full flex-col sm:w-full">
                                <div>
                                    <Img
                                        src="img_rectangle_5.png"
                                        width={270}
                                        height={327}
                                        alt="list image"
                                        className="h-[327px] w-full rounded-[16px] object-cover md:h-auto"
                                    />
                                    <div className="relative mt-[-46px] flex items-start justify-between gap-5">
                                        <div className="mt-[13px] flex w-[20%] justify-center rounded-[9px] bg-black-900_66">
                                            <div className="flex h-[10px] w-[40рх]" />
                                        </div>

                                        <Button
                                            color="lime_900"
                                            size="6xl"
                                            variant="fill"
                                            rightIcon={
                                                <Img
                                                    src="img_arrowleft.svg"
                                                    width={12}
                                                    height={12}
                                                    alt="arrow_left"
                                                    className="h-[12px] w-[12px]"
                                                />
                                            }
                                            className="min-w-[102px] gap-2 rounded-br-[16px] rounded-tl-[16px] font-medium"
                                        >
                                            Buy now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col sm:w-full">
                                <Img
                                    src="img_rectangle_6.png"
                                    width={270}
                                    height={327}
                                    alt="list feature image"
                                    className="h-[327px] rounded-[16px] object-cover"
                                />
                                <div className="relative mt-[-46px] flex items-start justify-between gap-5">
                                    <div className="mt-[13px] flex w-[20%] justify-center rounded-[9px] bg-black-900_66">
                                        <div className="flex h-[10px] w-[40px]" />
                                    </div>

                                    <Button
                                        color="lime_900"
                                        size="6xl"
                                        variant="fill"
                                        rightIcon={
                                            <Img
                                                src="img_arrowleft.svg"
                                                width={12}
                                                height={12}
                                                alt="arrow_left"
                                                className="h-[12px] w-[12px]"
                                            />
                                        }
                                        className="min-w-[102px] gap-2 rounded-br-[16px] rounded-tl-[16px] font-medium"
                                    >
                                        Buy now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center self-stretch bg-yellow-50">
                    <div className="container-xs flex justify-center pl-[19px] pr-[47px] md:p-5 md:pr-5">
                        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                            <div className="relative h-[117px] w-[73%] md:w-full">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-full gap-[364px] md:flex-row sm:relative sm:flex-col">
                                    {[...Array(2)].map((d, index) => (
                                        <HomeRowhighQuality
                                            ticketimage="img_ticket.svg"
                                            highqualitytext="High quality"
                                            createdfromtext="crafted from top materials"
                                            key={"featuresList" + index}
                                        />
                                    ))}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-3 px-[31px] py-8 sm:p-5">
                                    <Img
                                        src="img_fi_4497604.svg"
                                        width={40}
                                        height={40}
                                        alt="feature icon"
                                        className="h-[40px] w-[40px]"
                                    />
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Text
                                            size="xl"
                                            as="p"
                                            className="!font-inter !text-black-900"
                                        >
                                            Marranty Protection
                                        </Text>

                                        <Text as="p" className="font-inter">
                                            Over 2 years
                                        </Text>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Img
                                    src="img_thumbs_up_black_900_01.svg"
                                    width={40}
                                    height={40}
                                    alt="thumbs up icon"
                                    className="h-[40px] w-[40px]"
                                />
                                <div className="flex flex-col items-start gap-1.5">
                                    <Text
                                        size="xl"
                                        as="p"
                                        className="!font-inter !text-black-900"
                                    >
                                        24/7 Support
                                    </Text>

                                    <Text as="p" className="!font-inter">
                                        Dedicated support
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xs flex flex-col items-center gap-8 md:p-5">
                <div className="flex flex-col gap-0.5">
                    <Text size="6xl" as="p" className="!text-black-900">
                        Categories
                    </Text>
                    <Text as="p">Crafted with love specially for you</Text>
                </div>
                <div className="flex flex-col gap-8 self-stretch">
                    <div className="flex justify-between gap-5 sm:flex-col">
                        <div className="flex items-center gap-5 pr-2">
                            <Button
                                color="lime_900"
                                size="lg"
                                shape="square"
                                className="min-w-[152px] border-b font-medium"
                            >
                                Shop by products
                            </Button>
                            <Text as="p" className="self-end !text-gray-500">
                                Shop by rooms
                            </Text>
                        </div>
                        <Button
                            color="lime_900"
                            size="md"
                            rightIcon={
                                <Img
                                    src="img_user.svg"
                                    width={12}
                                    height={12}
                                    alt="user"
                                    className="h-[12px] w-[12px]"
                                />
                            }
                            className="min-w-[96px] gap-2 rounded-[15px ] font-medium"
                        >
                            View all
                        </Button>
                    </div>
                    <div className="flex flex-col items-center gap-[29px]">
                        <div className="self-stretch">
                            <div className="mx-3 flex w-full max-w-6xl gap-6 md:mx-0 md:flex-col">
                                <Slider
                                    autoPlay
                                    autoPlayInterval={2000}
                                    responsive={{
                                        "0": { items: 1 },
                                        "550": { items: 1 },
                                        "1050": { items: 4 },
                                    }}
                                    disableDotsControls
                                    activeIndex={sliderState1}
                                    onSlideChanged={(e: EventObject) => {
                                        setSliderState1(e?.item);
                                    }}
                                    ref={sliderRef1}
                                    items={[...Array(12)].map(() => (
                                        <React.Fragment key={Math.random()}>
                                            <div className="flex flex-col items-center gap-3.5">
                                                <Img
                                                    src="img_rectangle_31.png"
                                                    width={270}
                                                    height={270}
                                                    alt="sofa image"
                                                    className="h-[270px] w-full p-1.5 rounded-[16px] object-cover md:h-auto"
                                                />

                                                <Text
                                                    size="4xl"
                                                    as="p"
                                                    className="!text-black-900_01"
                                                >
                                                    Sofa
                                                </Text>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                color="white_A700"
                                size="5xl"
                                variant="fill"
                                shape="circle"
                                className="w-[48px] !rounded-[24px] border border-solid border-gray-200_01"
                            >
                                <Img
                                    src="img_arrow_left_gray_600_01.svg"
                                    width={48}
                                    height={48}
                                />
                            </Button>
                            <Button
                                color="white_A700"
                                size="5xl"
                                variant="fill"
                                shape="circle"
                                className="w-[48px] !rounded-[24px] border border-solid border-gray-200_01"
                            >
                                <Img
                                    src="img_arrow_right.svg"
                                    width={48}
                                    height={48}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* summer collection section */}
            <div className="flex h-[448px] items-center justify-center self-stretch bg-white-A700 bg-[url(/images/img_frame_125.png)] bg-cover bg-no-repeat pb-[116px] pt-[115px] md:h-auto md:py-5">
                <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
                    <div className="flex w-[45%] items-center justify-between gap-5 sm:w-full sm:flex-col">
                        <Button
                            color="black_900_66"
                            size="5xl"
                            variant="fill"
                            shape="circle"
                            className="w-[48px] !rounded-[24px]"
                        >
                            <Img src="img_refresh.svg" width={48} height={48} />
                        </Button>

                        <div className="flex w-[75%] flex-col gap-10 sm:w-full">
                            <div className="flex flex-col gap-[3px]">
                                <Text
                                    size="5xl"
                                    as="p"
                                    className="!text-white-A700"
                                >
                                    Summer Collection
                                </Text>

                                <Heading
                                    size="xl"
                                    as="h2"
                                    className="!text-white-A700"
                                >
                                    FLAT 50% off
                                </Heading>
                            </div>

                            <Button
                                color="black_900"
                                size="6xl"
                                variant="fill"
                                className="w-full rounded-[24px] font-plusjakartasans font-semibold sm:px-5"
                            >
                                Buy now
                            </Button>
                            </div>
                        </div>
                        <Button
                            color="black_900_66"
                            size="5xl"
                            variant="fill"
                            shape="circle"
                            className="w-[48px] !rounded-[24px]"
                        >
                            <Img
                                src="img_arrow_right_white_a700.svg"
                                width={48}
                                height={48}
                            />
                        </Button>
                    </div>
                </div>
                <Tabs
                    className="flex flex-col items-center gap-8 self-stretch"
                    selectedTabClassName="!text-lime-900 border-lime-900 border-b"
                    selectedTabPanelClassName="relative tab-panel--selected"
                >
                    <div className="container-xs flex flex-col items-center px-[434px] md:p-5 md:px-5">
                        <div className="flex flex-col items-center gap-[7px]">
                            <Text size="6xl" as="p" className="!text-black-900">
                                New arrivals
                            </Text>
                            <Text as="p">
                                Crafted with love specially for you
                            </Text>
                        </div>
                    </div>

                    <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
                        <TabList className="flex flex-wrap gap-7 px-[7px] pb-1.5 pt-[7px]">
                            <Tab className="self-start text-base font-medium text-lime-900">
                                Chairs
                            </Tab>
                            <Tab className="self-start text-base font-normal text-gray-500">
                                Table
                            </Tab>
                            <Tab className="self-start text-base font-normal text-gray-500">
                                Sofa
                            </Tab>
                            <Tab className="self-end text-base font-normal text-gray-500">
                                Lamps
                            </Tab>
                            <Tab className="self-end text-base font-normal text-gray-500">
                                Rug
                            </Tab>
                            <Tab className="self-start text-base font-normal text-gray-500">
                                Desk
                            </Tab>
                            <Tab className="self-start text-base font-normal text-gray-500">
                                Bed
                            </Tab>
                        </TabList>

                        <Button
                            color="lime 900"
                            size="md"
                            rightIcon={
                                <Img
                                    src="img_user.svg"
                                    width={12}
                                    height={12}
                                    alt="user"
                                    className="h-[12px] w-[12px]"
                                />
                            }
                            className="min-w-[96px] gap-2 rounded-[15px] font-medium"
                        >
                            View all
                        </Button>
                    </div>
                    {[...Array(7)].map((_, index) => (
                        <TabPanel
                            key={`tab-panel${index}`} className="absolute justify-center"
                        >
                            <div className="container-xs flex w-full md:p-5">
                                <div className="grid w-full grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
                                    {data1.map((d, index) => (
                                        <HomeColumncomfy
                                            {...d}
                                            key={"homeGrid" + index}
                                            className="gap-3"
                                        />
                                    ))}
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>

                <div className="flex w-full max-w-[1440px] self-stretch">
                    {/* inspiration slider section */}

                    <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{
                            "0": { items: 1 },
                            "550": { items: 1 },
                            "1050": { items: 1 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e: EventObject) => {
                            setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(3)].map(() => (
                            <React.Fragment key={Math.random()}>
                                <div className="flex bg-yellow-50 py-24 md:py-5">
                                    <div className="container-xs flex items-center justify-center gap-10 md:flex-col ad:p-5">
                                        <div className="flex w-[35%] flex-col gap-16 md:w-full sm:gap-8">
                                            <div className="flex flex-col gap-2">
                                                <Text
                                                    size="6xl"
                                                    as="p"
                                                    className="leading-[64px] !text-black-900"
                                                >
                                                    Inspiration to kickstart
                                                    your journey.
                                                </Text>

                                                <Text
                                                    as="p"
                                                    className="leading-6"
                                                >
                                                    Our designer has crafted
                                                    numerous stunning room
                                                    prototypes to spark your
                                                    imagination.
                                                </Text>
                                            </div>

                                            <Button
                                                color="lime 900"
                                                size="6xl"
                                                variant="fill"
                                                className="w-full rounded-[24px] font-semibold sm:px-5"
                                            >
                                                Explore more
                                            </Button>
                                        </div>

                                        <div className="flex flex-1 flex-col items-center gap-4 md:self-stretch">
                                            <div className="flex items-start gap-6 self-stretch md:flex-col">
                                                <div className="w-[50%] md:w-full">
                                                    <Img
                                                        src="img_rectangle_24.png"
                                                        width={350}
                                                        height={494}
                                                        alt="room image"
                                                        className="h-[494px] w-full rounded-[20px] object-cover md:h-auto"
                                                    />
                                                    <div className="relative mt-[-64px] px-4">
                                                        <div className="flex flex-col items-start gap-2.5 rounded-[16px] bg-lime-900 px-4 pb-[13px] pt-4">
                                                            <div className="flex items-center">
                                                                <Text
                                                                    as="p"
                                                                    className="self-start !font-inter !text-orange-50"
                                                                >
                                                                    01
                                                                </Text>

                                                                <div className="ml-[9px] h-[17px] w-px self-start bg-orange-50" />

                                                                <Text
                                                                    as="p"
                                                                    className="ml-[7px] self-end Ifont-inter Itext-orange-50"
                                                                >
                                                                    Study Room
                                                                </Text>
                                                            </div>

                                                            <Text
                                                                size="3xl"
                                                                as="p"
                                                                className="!font-normal !text-orange-50"
                                                            >
                                                                Stay Focused
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Img
                                                    src="img_rectangle_25.png"
                                                    width={350}
                                                    height={494}
                                                    alt="secondary image"
                                                    className="h-[494px] w-[50%] rounded-[20px] object-cover md:w-full"
                                                />
                                            </div>
                                            <div className="flex gap-3">
                                                <Button
                                                    color="white_A700"
                                                    size="5xl"
                                                    variant="fill"
                                                    shape="circle"
                                                    className="w-[48px] !rounded-[24px]"
                                                >
                                                    <Img
                                                        src="img_arrow_left_gray_600_01.svg"
                                                        width={48}
                                                        height={48}
                                                    />
                                                </Button>

                                                <Button
                                                    color="white_A700"
                                                    size="5xl"
                                                    variant="fill"
                                                    shape="circle"
                                                    className="w-[48px] !rounded-[24px]"
                                                >
                                                    <Img
                                                        src="img_arrow_right.svg"
                                                        width={48}
                                                        height={48}
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    />
                </div>
                <div className="flex flex-col items-center gap-8 self-stretch">
                    <div className="container-xs flex flex-col items-center px-[415px] md:p-5 md:px-5">
                        <div className="flex flex-col items-center gap-[3px]">
                            <Text size="6xl" as="p" className="!text-black-900">
                                Recently view
                            </Text>

                            <Text as="p">Things you are keeping eye on</Text>
                        </div>
                    </div>

                    <div className="container-xs flex gap-6 md:flex-col md:p-5">
                        {data.map((d, index) => (
                            <HomeColumnOne
                                {...d}
                                key={"listSettings" + index}
                                className="gap-3 md:w-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 self-stretch bg-yellow-50 pb-24 pt-[94px] md:py-5">
                    <div className="container-xs flex flex-col items-center px-[434px] md:p-5 md:px-5">
                        <div className="flex flex-col items-center gap-2">
                            <Text size="6xl" as="p" className="!text-black-900">
                                #Webfurni
                            </Text>

                            <Text as="p">
                                Tag us on social media to get discount
                            </Text>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 self-stretch">
                        <div className="flex justify-center self-stretch">
                            <div className="container-xs flex justify-center px-[92px] md:flex-col md:p-5 md:px-5">
                                <Img
                                    src="img_rectangle.png"
                                    width={224}
                                    height={168}
                                    alt="rectangle image"
                                    className="h-[168px] w-[27%] rounded-lg object-cover md:w-full"
                                />
                                <Img
                                    src="img_circle.png"
                                    width={224}
                                    height={168}
                                    alt="circle image"
                                    className="ml-[52px] w-[168px] h-[168px] rounded-[50%] md:ml-0"
                                />
                                <Img
                                    src="img_curve_left.png"
                                    width={224}
                                    height={168}
                                    alt="left curve image"
                                    className="ml-[52px] w-[27%] h-[168px] rounded-bl-[84px] rounded-br-lg rounded-tl-[84px] rounded-tr-lg object-cover md:ml-0 md:w-full"
                                />
                                <Img
                                    src="img_curve_right.png"
                                    width={224}
                                    height={168}
                                    alt="right curve image"
                                    className="ml-6 w-[27%] h-[168px] rounded-bl-lg rounded-br-[84px] rounded-tl-lg rounded-tr-[84px] object-cover md:ml-0 md:w-full"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center self-stretch">
                            <div className="container-xs flex justify-center px-[92px] md:flex-col md:p-5 md:px-5">
                                <Img
                                    src="img_rectangle_168x224.png"
                                    width={224}
                                    height={168}
                                    alt="rectangle image"
                                    className="h-[168px] w- [27%] rounded-lg object-cover md:w-full"
                                />
                                <Img
                                    src="img_curve_left_168x224.png"
                                    width={224}
                                    height={168}
                                    alt="left curve image"
                                    className="ml-6 h-[168px] w-[27%] rounded-bl-[84px] rounded-br-lg rounded-tl-[84px] rounded-tr-lg object-cover md:ml-0 md:w-full"
                                />
                                <Img
                                    src="img_circle_168x168.png"
                                    width={224}
                                    height={168}
                                    alt="rectangle image"
                                    className="ml-[52px] h-[168px] w-[168px] rounded-[50%] md:ml-0"
                                />
                                <Img
                                    src="img_curve_right_168x224.png"
                                    width={224}
                                    height={168}
                                    alt="right curve image"
                                    className="ml-[52px] h-[168px] w-[27%] rounded-bl-lg rounded-br-[84px] rounded-tl-lg rounded-tr-[84px] object-cover md:ml-0 md:w-full"
                                />
                            </div>
                        </div>
                        <div className="container-xs px-[92px] md:p-5 md:px-5">
                            <div className="flex gap-[52px] md:flex-col">
                                <Img
                                    src="img_curve_right_1.png"
                                    width={224}
                                    height={168}
                                    alt="curved image"
                                    className="h-[168px] w-[23%] rounded-bl-lg rounded-br-[84px] rounded-tl-lg rounded-tr-[84px] object-cover md:w-full"
                                />
                                <Img
                                    src="img_circle_1.png"
                                    width={224}
                                    height={168}
                                    alt="circle image"
                                    className="h-[168px] w-[17%] rounded-[50%]"
                                />
                                <Img
                                    src="img_rectangle_1.png"
                                    width={224}
                                    height={168}
                                    alt="curved image"
                                    className="h-[168px] w-[23%] rounded-lg object-cover md:w-full"
                                />
                                <Img
                                    src="img_curve_left_1.png"
                                    width={224}
                                    height={168}
                                    alt="curved image"
                                    className="h-[168px] w-[23%] rounded-bl-[84px] rounded-br-lg rounded-tl-[84px] rounded-tr-lg object-cover md:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* customer testimonial section */}
                <div className="container-xs flex flex-col items-center gap-8 md:p-5">
                    <div className="flex flex-col items-center gap-0.5 pt-1">
                        <Text size="6xl" as="p" className="!text-black-900">
                            Our strength
                        </Text>
                        <Text as="p">
                            See what our satisfied customers have to say
                            about their experience
                        </Text>
                    </div>

                    <div className="flex flex-col items-center gap-8 self-stretch">
                        <div className="flex gap-6 self-stretch md:flex-col">
                            {data2.map((d, index) => (
                                <HomeColumnratingBar
                                    {...d}
                                    key={"ratingsList" + index}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <Button
                                color="white_A700"
                                size="5xl"
                                variant="fill"
                                shape="circle"
                                className="w-[48px] !rounded-[24px] border border-solid border-gray-200_01"
                            >
                                <Img
                                    src="img_arrow_left_gray_600_01.svg"
                                    width={48}
                                    height={48}
                                />
                            </Button>

                            <Button
                                color="white A700"
                                size="5xl"
                                variant="fill"
                                shape="circle"
                                className="w-[48px] !rounded-[24px] border border-solid border-gray-200_01"
                            >
                                <Img
                                    src="img_arrow_right.svg"
                                    width={48}
                                    height={48}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer className="flex-col gap-5 self-stretch sm:pt-5" />
            </div>
        </>
    );
}
