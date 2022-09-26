import { useState } from "react";

const arreglo = [
  { name: "Todos" },
  { name: "Slifer" },
  { name: "Obelisk" },
  { name: "Dark Magician" },
  { name: "Red Eyes" },
  { name: "Blue Eyes" },
  { name: "Espadachin" },
  { name: "Kuriboh" },
];
const arreglo2 = [
  { name: "Slifer" },
  { name: "Obelisk" },
  { name: "Obelisk" },
  { name: "Obelisk" },
  { name: "Dark Magician" },
  { name: "Dark Magician" },
  { name: "Dark Magician" },
  { name: "Red Eyes" },
  { name: "Red Eyes" },
  { name: "Blue Eyes" },
  { name: "Espadachin" },
  { name: "Kuriboh" },
];

const Select = () => {
  const array = ["ABC", "ZYX"];
  const [mostrar, setMostar] = useState(arreglo2);
  const [revelar, setRevelar] = useState(mostrar);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "Todos") {
      let x = mostrar;
      return setRevelar(x);
    }
    let x = mostrar.filter((item) => item.name === value);
    setRevelar(x);
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    let x = mostrar.sort((a, b) => {
      let valor1 = a.name.toLocaleLowerCase();
      let valor2 = b.name.toLocaleLowerCase();
      if (valor1 > valor2) return 1;
      else if (valor1 < valor2) return -1;
      return 0;
    });
    if (value === "ABC") {
      setRevelar([...x]);
    } else {
      x.reverse();
      setRevelar([...x]);
    }
  };
  //   console.log("Hola mundo");
  return (
    <div>
      <select onChange={handleChange}>
        <option value={-1}>Selecciona una Opcion</option>
        {arreglo.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <select onChange={handleSelect}>
        <option value={-1}>Selecciona una Opcion</option>
        {array.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div>
        {revelar?.map((item, i) => (
          <span key={i}>{item.name} | </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
