import Image from "next/image";
import Header from "./components/header";
import down from './assets/down.png';
import up from './assets/up.png';
import GridItem from "./components/gridItem";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="w-full">
        <Header />
      </div>
      {/*  Conteúdo principal da página */}
      <div className="flex flex-row">
        <div className="flex flex-col p-3 flex-1">
          <h1 className="text-5xl font-bold mb-4">Calculadora de IMC</h1>
          <p className="text-2xl">o imc é a sigla de Indice de Massa Corporal, parâmetro adotado pela Organização Mundeial da Saúde paa calcular o peso ideal de cada pessoa. </p>
          <input
            className="border-b-2 border-gray-500 p-2 mb-2"
            type="text"
            value={''}
          />
          <input
            className="border-b-2 border-gray-500 p-2 mb-2"
            type="text"
            value={''}
          />
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg mt-2">Calcular</button>

        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
          <GridItem
            icon={down}
            title="Magreza"
            subtitle="IMC menor que 18,5"
            iconSize={20}
            color={{
              box: "bg-gray-400",
              icon: "bg-gray-500"
            }}
          />
          <GridItem
            icon={up}
            title="Normal"
            subtitle="Imc está entre 18,5 e 24.9"
            iconSize={20}
            color={{
              box: "bg-emerald-500",
              icon: "bg-emerald-600"
            }}
          />

          <GridItem
            icon={down}
            title="Sobrepeso"
            subtitle="Imc está entre 25 e 30"
            iconSize={20}
            color={{
              box: "bg-yellow-400",
              icon: "bg-yellow-500"
            }}
          />
          <GridItem
            icon={down}
            title="Obesidade"
            subtitle="Imc está acima de 30.1"
            iconSize={20}
            color={{
              box: "bg-red-600",
              icon: "bg-red-700"
            }}
          />
        </div>

      </div>

    </div>
  );
}
