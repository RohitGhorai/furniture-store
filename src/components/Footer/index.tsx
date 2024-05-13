import Link from "next/link";
import { Button, Heading, Img, Input, Text } from "../index";

interface Props {
    className?: string;
}

export default function Footer({ ...props }: Props) {
    return (
        <footer
            {...props}
            className={`${props.className} flex items-center pt-10 pb-5 border-gray-200_01 border-t border-solid`}
        >
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[22%] flex-col gap-4 md:w-full">
                    <Img
                        src="img_footer_logo.png"
                        width={129}
                        height={19}
                        alt="footer logo"
                        className="h-[19px] w-[129px] object-contain"
                    />
                    <div className="flex flex-col items-start gap-[17px]">
                        <Text as="p" className="w-full leading-6">
                            Worldwide furniture store since 2020. We sell over
                            1000+ branded products on our website
                        </Text>
                        <div className="flex gap-2">
                            <Img
                                src="img_linkedin.svg"
                                width={20}
                                height={20}
                                alt="linkedin icon"
                                className="h-[20px] w-[20px] self-start"
                            />
                            <Text as="p" className="self-end !font-inter">
                                Sawojajar Malang, Indonesia
                            </Text>
                        </div>
                        <div className="flex gap-2">
                            <Img
                                src="img_call.svg"
                                width={20}
                                height={20}
                                alt="call icon"
                                className="h-[20px] w-[20px]"
                            />
                            <Text as="p" className="!font-inter">
                                +6289 456 3455
                            </Text>
                        </div>
                        <Link
                            href="www.urbancrali.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Text as="p">www.urbancrali.com</Text>
                        </Link>
                    </div>
                </div>
                <div className="flex w-[41%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex flex-col gap-[18px]">
                        <Heading
                            size="md"
                            as="h6"
                            className="!text-black-900_01"
                        >
                            Sitemap
                        </Heading>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link
                                    href="Product"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Product</Text>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="Services"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Services</Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="Article"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Article</Text>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Text as="p">About Us</Text>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-[18px]">
                        <Heading
                            size="md"
                            as="h6"
                            className="!text-black-900_01"
                        >
                            Category
                        </Heading>

                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link href="#">
                                    <Text as="p">Living Room</Text>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <Text as="p">Bed Room</Text>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="Kitchen"
                                    target="blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Kitchen</Text>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <Text as="p">Bath Room</Text>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-[18px]">
                        <Heading
                            size="md"
                            as="h6"
                            className="text-black-900_01"
                        >
                            Our company
                        </Heading>

                        <ul className="flex flex-col items-start gap-5">
                            <li>
                                <Link href="#">
                                    <Text as="p">About us</Text>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="Vacancies"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Vacancies</Text>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <Text as="p">Contact us</Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="Privacy"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text as="p">Privacy</Text>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank" rel="noreferrer">
                                    <Text as="p">Return policy</Text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-[21%] flex-col items-start gap-4 self-start md:w-full">
                    <Heading size="md" as="h6" className="!text-black-900_01">
                        Stay Updated
                    </Heading>
                    <Input
                        size="xs"
                        name="Email Input"
                        placeholder={`Enter your mail`}
                        prefix={
                            <Img
                                src="img_checkmark.svg"
                                width={20}
                                height={20}
                                alt="checkmark"
                                className="h-[20px] w-[20px]"
                            />
                        }
                        className="gap-1 self-stretch rounded-[18px] sm:pr-5"
                    />
                    <Button
                        color="lime_900"
                        size="md"
                        variant="fill"
                        className="min-w-[91px] rounded-[15px] font-medium"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>

            <div className="container-xs h-px bg-gray-200_01 md:p-5" />

            <div className="container-xs flex justify-center md:p-5">
                <Text size="xs" as="p">
                    2024 by Urban craft all rights reserved.
                </Text>
            </div>
        </footer>
    );
}
