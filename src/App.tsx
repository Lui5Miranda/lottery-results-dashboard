import { Sidebar } from "./assets/components/Sidebar/Sidebar";
import { Result } from "./assets/components/Result/Result";

import { useEffect, useState } from "react";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
  const [selectedLoteria, setSelectedLoteria] = useState("megasena");
  const [loteriaData, setLoteriaData] = useState<{
    tipoJogo: string;
    numero: string;
    dataApuracao: string;
    listaDezenas: number[];
  } | null>();

  function handleLoteria(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setSelectedLoteria(e.target.value);
  }

  useEffect(() => {
    fetch(`https://api.guidi.dev.br/loteria/${selectedLoteria}/ultimo`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLoteriaData(data);
      })
      .catch(error => console.log(error));
  }, [selectedLoteria]);
  return (
    <>
      <main className="flex bg-[var(--background)] p-0 m-auto flex-col  md:flex-row items-center">
        {loteriaData && (
          <Sidebar handleLoteria={handleLoteria} loteriaData={loteriaData} />
        )}
        {loteriaData && <Result loteriaData={loteriaData} />}
      </main>
    </>
  );
}

export default App;
