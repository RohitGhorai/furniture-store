import { Img, RatingBar, Text } from "../";

interface Props {
    className?: string;
    description?: string;
    username?: string;
    johnoliverimage?: string;
    image?: string;
    imageone?: string;
}

export default function HomeColumnratingBar({
    description = "Absolutely delighted with my recent furniture purchase! The sleek design and sturdy build perfectly complement my space.",
    username = "John Oliver",
    johnoliverimage = "img_rectangle_10.png",
    image = "img_rectangle_11.png",
    imageone = "img_rectangle_12.png",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col w-full gap-6 p-6 sm:p-5 border-gray-200_01 border-2 border-solid bg-white-A700`}
        >
            <div className="flex flex-col items-start gap-2 self-stretch">
                <RatingBar
                    value={1}
                    isEditable={true}
                    size={32}
                    className="flex justify-between"
                />
                <Text
                    as="p"
                    className="w-full !font-inter leading-[150%] !text-black-900"
                >
                    {description}
                </Text>
                <Text as="p">{username}</Text>
            </div>
            <div className="flex gap-6 self-stretch">
                <Img
                    src={johnoliverimage}
                    width={148}
                    height={264}
                    alt="profileimage"
                    className="w-[264px] h-[50%] object-cover"
                />
                <div className="flex w-[50%] flex-col gap-6">
                    <Img
                        src={image}
                        width={148}
                        height={120}
                        alt="galleryimage1"
                        className="h-[120px] object-cover"
                    />
                    <Img
                        src={imageone}
                        width={148}
                        height={120}
                        alt="galleryimage2"
                        className="h-[120px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
