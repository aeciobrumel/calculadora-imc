"use client";
import Header from "./components/header";
import GridItem from "./components/gridItem";
import { useState } from "react";
import { calculateImc, level, levels } from "./helpers/imc";
import Image from "next/image";
import back from "./assets/leftarrow.png";
export default function Home() {

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState(0);
  const [showItem, setShowItem] = useState<level | null>(null);

  const handleCalculate = (height: number, weight: number) => {
    if (height > 0 && weight > 0) {
      const result = calculateImc(height, weight);
      setShowItem(result);
    } else {
      alert("Digite todos os campos")
    }
  }

  const handleBack = () => {
    setShowItem(null);
    setHeight(0);
    setWeight(0);
  }
  const disabled = showItem ? true : false;

  return (
    <div className="flex flex-col  max-w-[900px] mx-auto p-4">
      <div className=" my-[40px]">
        <Header />
      </div>
      {/*  Conteúdo principal da página */}
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col p-3 flex-1 md:mr-[40px]">
          <h1 className="text-5xl font-bold mb-4">Calculadora de IMC</h1>
          <p className="text-1xl">o imc é a sigla de Indice de Massa Corporal, parâmetro adotado pela Organização Mundeial da Saúde paa calcular o peso ideal de cada pessoa. </p>
          <input
            className={`border-b-2 border-gray-500 p-2 mb-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="number"
            placeholder="digite sua altura"
            value={height > 0 ? height : ''}
            onChange={(w) => { setHeight(parseFloat(w.target.value)) }}
            disabled={disabled}
          />
          <input
            className={`border-b-2 border-gray-500 p-2 mb-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="number"
            placeholder="digite seu peso"
            value={weight > 0 ? weight : ''}
            onChange={(e) => { setWeight(parseFloat(e.target.value)) }}
            disabled={disabled}
          />
          <button disabled={disabled}
            className={`bg-cyan-600 text-white px-4 py-2 rounded-lg mt-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleCalculate(height, weight)}>Calcular</button>

        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-4 flex-1 ml-0 md:ml-[40px]">
          {!showItem && (
            levels.map((item, key) => (
              <GridItem
                key={key}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                color={item.color}
                imc={item.imc}
              />
            ))
          )}
          {showItem && (
            <div className="col-span-2 row-span-2 w-full h-full">
              <div className="mb-4 bg-cyan-600 p-2 md:rounded-full rounded-lg cursor-pointer w-max absolute flex justify-center items-center
              md:ml-[-25px] md:mt-[150px]
              
              " onClick={() => handleBack()}>
                <Image src={back} width={30} height={30} alt="imagem voltar" />
              </div>
              <GridItem
                icon={showItem.icon}
                title={showItem.title}
                subtitle={showItem.subtitle}
                color={showItem.color}
                imc={showItem.imc}
                yourImc={showItem.yourImc}
              />
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
