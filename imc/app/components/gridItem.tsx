import Image, { StaticImageData } from "next/image";

type Props = {
    icon: StaticImageData;
    title: string;
    subtitle: string;
    iconSize: number;
    color: {
        box: string;
        icon: string;
    };
}

const GridItem = (props: Props) => {
    return (
        <div className={`${props.color.box} text-center p-[20px] rounded-2xl flex items-center justify-center flex-col`}>
            <div className={`${props.color.icon} p-4 rounded-full`}>
                <Image alt="resultado" width={props.iconSize} src={props.icon} />
            </div>
            <div className="text-white text-2xl">{props.title}</div>
            <div className="text-white text-sm">{props.subtitle}</div>
        </div>
    );
}

export default GridItem;