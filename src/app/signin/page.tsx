import React, { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
    title: "Login to Your Account - FurniHouse",
    description:
        "Access your Furnihouse account by logging in. Enter your email and password to explore our exclusive offers and register if you're new to Furnihouse",
};

export default function SigninPage() {
    return <Page />
}
