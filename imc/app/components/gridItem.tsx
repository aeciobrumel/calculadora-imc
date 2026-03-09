import Image from "next/image";
import { Level } from "../helpers/imc";
import down from "../assets/down.png";
import up from "../assets/up.png";

type GridItemProps = Pick<Level, "color" | "icon" | "title" | "subtitle" | "yourImc"> & {
    imc?: number[];
};

const GridItem = ({ color, icon, title, subtitle, yourImc }: GridItemProps) => {
    return (
        <div className={`${color.box} text-center w-full h-full p-[20px] rounded-2xl flex items-center justify-center flex-col`}>
            <div className={`${color.icon} p-4 rounded-full`}>
                <Image alt="resultado" width={25} height={25} src={icon === "up" ? up : down} />
            </div>
            <div className="text-white text-2xl">{title}</div>
            {typeof yourImc === "number" && (
                <div className="text-white text-sm my-2">Seu IMC é {yourImc.toFixed(2)}Kg/m²</div>
            )}
            <div className="text-white text-sm">{subtitle}</div>
        </div>
    );
}

export default GridItem;
