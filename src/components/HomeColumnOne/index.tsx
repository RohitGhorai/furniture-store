import { Button, Img, Text } from "../index";

interface Props {
    className: string;
    image?: string;
    fortyfive: string;
    productname?: string;
    pureenglish?: string;
    price?: string;
    price1?: string;
    offer?: string;
}

export default function HomeColumnOne({
    image = "img_rectangle_14_7.png",
    fortyfive = "4.5",
    productname = "Comfy craft",
    pureenglish = "Pure english wood with...",
    price = "$ 500",
    price1 = "$ 800",
    offer = "30% OFF",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-full`}>
            <div className="relative h-[270px] self-stretch md:h-auto">
                <Img
                    src={image}
                    width={270}
                    height={270}
                    alt="main image"
                    className="h-[270px] w-full rounded-[16px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center p-2">
                    <div className="flex flex-col items-start gap-48 md:gap-36 sm:gap-24 ">
                        <Button
                            color="black_900_4c"
                            variant="fill"
                            shape="circle"
                            className="w-[36px] self-end !rounded-[18px]"
                        >
                            <Img
                                src="img_settings.svg"
                                width={36}
                                height={36}
                            />
                        </Button>
                        <div className="flex items-center rounded-[13px] bg-black-900_4c px-1 pt-1">
                            <Img
                                src="img_frame.svg"
                                width={16}
                                height={16}
                                alt="rating image"
                                className="h-[16px] w-[16px]"
                            />
                            <Text size="s" as="p" className="!text-white-A700">
                                {fortyfive}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[11px] self-stretch px-3">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col items-start gap-[3px]">
                        <Text as="p" className="!text-black-900_01">
                            {productname}
                        </Text>
                        <Text size="s" as="p">
                            {pureenglish}
                        </Text>
                    </div>
                    <Button shape="round" className="w-[36px]">
                        <Img src="img_cart.svg" width={36} height={36} />
                    </Button>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-wrap items-center gap-1">
                        <Text size="s" as="h6" className="!text-black-900_01">
                            {price}
                        </Text>
                        <Text
                            size="s"
                            as="p"
                            className="self-start line-through"
                        >
                            {price1}
                        </Text>
                    </div>

                    <Text
                        size="s"
                        as="p"
                        className="self-start !text-green-900"
                    >
                        {offer}
                    </Text>
                </div>
            </div>
        </div>
    );
}
