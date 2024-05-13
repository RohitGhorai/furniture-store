"use client";
import Link from "next/link";
import { Button, Img, Input, Text } from "../../components";

export default function RegisterPage() {
    return (
        <>
            {/* signin page section */}
            <div className="flex h-[940px] w-full items-center justify-center bg-white-A700 bg-[url(/images/img_signin.png)] bg-cover bg-no-repeat md:h-auto md:py-5">
                {/* login navigation section */}
                <div className="container-xs flex justify-center px-[310px] md:p-5 md:px-5">
                    <div className="flex w-full flex-col items-start gap-[30px] rounded-[24px] bg-white-A700 px-10 pb-[39px] pt-11 md:pt-5 sm:p-5">
                        <Link href="Login" target="_blank" rel="noreferrer">
                            <Text size="6xl" as="p" className="!text-black-900">
                                Register
                            </Text>
                        </Link>
                        <div className="flex items-center gap-5 pr-2">
                            <Button
                                color="lime_900"
                                size="lg"
                                shape="square"
                                className="min-w-[58px] border-b font-medium"
                            >
                                Email
                            </Button>
                            <Text as="p" className="!text-gray-500">
                                Phone
                            </Text>
                        </div>
                        {/* login form section */}
                        <div className="flex flex-col items-start gap-8 self-stretch">
                            <div className="flex flex-col gap-[15px] self-stretch">
                                <div className="flex flex-col items-start gap-[7px]">
                                    <Text
                                        size="s"
                                        as="p"
                                        className="ml-4 md:ml-0"
                                    >
                                        Email*
                                    </Text>
                                    <Input
                                        shape="round"
                                        type="email"
                                        name="Email Field"
                                        placeholder={`Enter email`}
                                        prefix={
                                            <Img
                                                src="img_checkmark.svg"
                                                width={24}
                                                height={24}
                                                alt="checkmark"
                                                className="h-[24px] w-[24px]"
                                            />
                                        }
                                        className="gap-2 self-stretch sm:pr-5"
                                    />
                                </div>
                                <div className="flex flex-col items-end gap-2.5">
                                    <div className="flex flex-col items-start gap-[7px] self-stretch">
                                        <Text
                                            size="s"
                                            as="p"
                                            className="ml-4 md:ml-0"
                                        >
                                            Password*
                                        </Text>
                                        <Input
                                            shape="round"
                                            type="password"
                                            name="Password Field"
                                            placeholder={`Enter password`}
                                            prefix={
                                                <Img
                                                    src="img_location.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="location"
                                                    className="h-[24px] w-[24px]"
                                                />
                                            }
                                            suffix={
                                                <Img
                                                    src="img_close_eye.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="eye"
                                                    className="h-[24px] w-[24px]"
                                                />
                                            }
                                            className="gap-2 self-stretch"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2.5">
                                    <div className="flex flex-col items-start gap-[7px] self-stretch">
                                        <Text
                                            size="s"
                                            as="p"
                                            className="ml-4 md:ml-0"
                                        >
                                            Confirm Password*
                                        </Text>
                                        <Input
                                            shape="round"
                                            type="password"
                                            name="Password Field"
                                            placeholder={`Enter password`}
                                            prefix={
                                                <Img
                                                    src="img_location.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="location"
                                                    className="h-[24px] w-[24px]"
                                                />
                                            }
                                            suffix={
                                                <Img
                                                    src="img_close_eye.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="eye"
                                                    className="h-[24px] w-[24px]"
                                                />
                                            }
                                            className="gap-2 self-stretch"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                            <Button
                                color="lime_900"
                                size="6xl"
                                variant="fill"
                                className="w-full rounded-[24px] font-semibold sm:px-5"
                            >
                                Register
                            </Button>
                            <Text size="s" as="p">
                                <span className="text-gray-600_01">By clicking Register you agree to our&nbsp;</span>
                                <span className="font-medium text-lime-900">Terms of use</span>
                                <span className="text-gray-600_01">&nbsp;and&nbsp;</span>
                                <span className="font-medium text-lime-900">privacy policy</span>
                            </Text>
                            </div>
                            <div className="flex items-end gap-8 self-stretch lg:flex-col">
                                <div className="md:mb-[7px] h-px flex-1 bg-gray-200_01 sm:self-stretch" />
                                <Text as="p">Or</Text>
                                <div className="md:mb-[7px] h-px flex-1 bg-gray-200_01 sm:self-stretch" />
                            </div>
                            {/* social login options section */}
                            <div className="flex gap-4 self-stretch sm:flex-col">
                                <div className="flex w-full justify-center rounded-[16px] border border-solid border-gray-200_01 bg-white-A700 p-3 sm:w-full">
                                    <Img
                                        src="img_fi_747.svg"
                                        width={32}
                                        height={32}
                                        alt="twitter icon"
                                        className="h-[32px] w-[32px]"
                                    />
                                </div>
                                <div className="flex w-full justify-center rounded-[16px] border border-solid border-gray-200_01 bg-white-A700 p-3 sm:w-full">
                                    <Img
                                        src="img_fi_281764.svg"
                                        width={32}
                                        height={32}
                                        alt="google icon"
                                        className="h-[32px] w-[32px]"
                                    />
                                </div>
                                <div className="flex w-full justify-center rounded-[16px] border border-solid border-gray-200_01 bg-white-A700 p-3 sm:w-full">
                                    <Img
                                        src="img_facebook.svg"
                                        width={32}
                                        height={32}
                                        alt="facebook icon"
                                        className="h-[32px] w-[32px]"
                                    />
                                </div>
                            </div>
                            {/* registration prompt section */}
                            <div className="flex flex-wrap items-center gap-1">
                                <Text size="s" as="p">
                                    Existing user?
                                </Text>
                                <Link
                                    href="signin"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="self-end"
                                >
                                    <Text
                                        size="s"
                                        as="p"
                                        className="!font-medium !text-lime-900 underline"
                                    >
                                        Login
                                    </Text>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
