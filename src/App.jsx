import { useState } from "react";

function App() {
  const [medication, setMedication] = useState("");
  const [drops, setDrops] = useState("");
  const [amount, setAmount] = useState("");

  const Calculate = () => {
    const totalBottle = {
      Clonazepan: 500,
      Clorpromazina: 800,
      Fenobarbital: 800,
      Haloperidol: 400,
      Levomepromazina: 800,
      Periciazina: 800,
    };

    const oneBottle = totalBottle[medication];
    if (!oneBottle || Number(drops) <= 0) {
      alert("Selecione um medicamento e/ou informe as gotas corretamente.");
      return;
    }

    const result = (Number(drops) * 60) / oneBottle;
    setAmount(Math.ceil(result));
    setDrops("");
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen bg-zinc-800 ">
      <div className="rounded p-9 container max-w-xl h-96 bg-white">
        <div className="text-center flex flex-col items-center justify-center h-1/2">
          <h1 className="text-3xl font-bold uppercase text-zinc-700">
            Calculadora de gotas
          </h1>
          <p className="text-base tracking-widest text-zinc-700 font-light">
            (Psicotrópicos)
          </p>
        </div>

        <div className="flex gap-2 justify-center ">
          <select
            className="pl-1 pt-2 pb-2 w-40 text-sm rounded-md border border-zinc-400 focus:outline-sky-500"
            name="medications"
            id="medications"
            value={medication}
            onChange={(e) => {
              setMedication(e.target.value);
              setAmount("");
            }}
          >
            <option value="">Selecione</option>
            <option value="Clonazepan">Clonazepan</option>
            <option value="Clorpromazina">Clorpromazina</option>
            <option value="Fenobarbital">Fenobarbital</option>
            <option value="Haloperidol">Haloperidol</option>
            <option value="Levomepromazina">Levomepromazina</option>
            <option value="Periciazina">Periciazina</option>
          </select>

          <input
            type="number"
            placeholder="Total gotas diária"
            value={drops}
            onChange={(e) => {
              setDrops(e.target.value);
            }}
            className="rounded-md text-center text-sm placeholder:text-left placeholder:px-2 placeholder:text-sm focus:outline-sky-500 border border-zinc-400 w-36"
          />
          <input
            type="button"
            value="Calcular"
            onClick={Calculate}
            className="rounded-md text-sm font-semibold bg-sky-500 text-white px-4 hover:cursor-pointer hover:bg-sky-400 hover:transition-all"
          />
        </div>
        {amount !== "" && (
          <div className="flex justify-center mt-10 h-1/2 ">
            <p className="text-xl font-bold text-zinc-700">
              <span className="text-sky-500 ">{medication}:</span> {amount}
              {amount > 1 ? " frascos" : " frasco"}
              <span className="font-normal"> para 60 dias.</span>
            </p>
          </div>
        )}
      </div>
      <p className="text-zinc-600 text-xs">
        &copy; 2024-{new Date().getFullYear()} DSacramento. Todos os direitos
        reservados.
      </p>
    </div>
  );
}

export default App;
