export type level = {
    title: string;
    icon:  'up' | 'down';
    color: {
        box: string;
        icon: string;
    };
    subtitle: string;
    imc: number[];
    yourImc?:number;

}

export const levels : level[] = [ 
    {
        title: "Magreza",
        icon: "down",
        color: {
            "box": "bg-gray-400",
            "icon": "bg-gray-500"
        },
        subtitle: "IMC menor que 18,5",
        imc: [0, 18.5]},
    {
        title: "Normal",
        icon: "up",
        color: {
            "box": "bg-emerald-500",
             "icon": "bg-emerald-600"
            },
        subtitle: "Imc está entre 18,5 e 24.9" , 
        imc: [18.5, 24.9]},
    {
        title: "Sobrepeso",
        icon: "down",
        color: {
            "box": "bg-yellow-400",
             "icon": "bg-yellow-500"
            },
        subtitle: "Imc está entre 25 e 30" ,
        imc: [25, 30]},
    {
        title: "Obesidade",
        icon: "down",
        color: {
            "box": "bg-red-600",
            "icon": "bg-red-700"
        },
        subtitle: "Imc está acima de 30.1" ,
        imc: [30.1, 99]
    }
  ];
  
export const calculateImc = (height:number, weight:number) => {
    const imc = weight / (height * height);

    for (const item of levels) {
        if(imc >= item.imc[0] && imc < item.imc[1]){
            return { ...item, yourImc: imc };
        }
    }

    return null;
  }
