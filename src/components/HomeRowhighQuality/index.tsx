import { Img, Text } from "../";

interface Props {
    className?: string;
    ticketimage: string;
    highqualitytext?: string;
    createdfromtext?: string;
}

export default function HomeRowhighQuality({
    ticketimage = "img_ticket.svg",
    highqualitytext = "High Quality",
    createdfromtext = "Created from the best materials",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex items-center gap-3`}
        >
            <Img
                src={ticketimage}
                width={40}
                height={40}
                alt="ticket image"
                className="h-[40px] w-[40px]"
            />
            <div className="flex flex-col items-start gap-1.5">
                <Text size="xl" as="p" className="!font-inter !text-black-900">
                    {highqualitytext}
                </Text>
                <Text as="p" className="!font-inter">
                    {createdfromtext}
                </Text>
            </div>
        </div>
    );
}
