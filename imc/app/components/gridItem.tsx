import Image from "next/image";
import { level } from "../helpers/imc";
import down from "../assets/down.png";
import up from "../assets/up.png";

const GridItem = (level: level) => {
    return (
        <div className={`${level.color.box} text-center w-full h-full p-[20px] rounded-2xl flex items-center justify-center flex-col`}>
            <div className={`${level.color.icon} p-4 rounded-full`}>
                <Image alt="resultado" width='25' src={level.icon === "up" ? up : down} />
            </div>
            <div className="text-white text-2xl">{level.title}</div>
            {level.yourImc &&
                (<div className="text-white text-sm my-2">Seu IMC é {(level.yourImc).toFixed(2)}Kg/m²</div>)}
            <div className="text-white text-sm">{level.subtitle}</div>
        </div>
    );
}

export default GridItem;