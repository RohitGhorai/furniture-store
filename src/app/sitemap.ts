import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/signin`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/home1`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/category`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/productlisttwo`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/productdetailtwo`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/cart`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/address`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/payment`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/myaccount`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/myorder`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/wishlist`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/register`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/paymentaddnewcard`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/addressnewuser`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ];
}
