import { useEffect, useState } from "react";

interface SelectProps {
  handleLoteria: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const loterias = [
  "megasena",
  "quina",
  "lotofacil",
  "lotomania",
  "timemania",
  "diadesorte",
];

const loteriasNomesFormatados = [
  "MEGA SENA",
  "QUINA",
  "LOTOFACIL",
  "LOTOMANIA",
  "TIMEMANIA",
  "DIA DE SORTE",
];

export function Select({ handleLoteria }: SelectProps) {
  const [loteriasNomes, seLoteriasNomes] = useState<string[]>();

  useEffect(() => {
    seLoteriasNomes(loterias);
  }, []);

  return (
    <div className="relative w-40">
      <select
        className="appearance-none outline-none w-full bg-white text-sm text-[var(--text-dark)] p-2 pr-10 rounded"
        onChange={handleLoteria}
      >
        {loteriasNomes &&
          loteriasNomes.map((loteria, index) => (
            <option key={loteria} value={loteria}>
              {loteriasNomesFormatados[index]}
            </option>
          ))}
      </select>

      {/* Ícone da setinha */}
      <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2">
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83601 5.96394C5.66224 6.1301 5.42659 6.22345 5.18088 6.22345C4.93517 6.22345 4.69952 6.1301 4.52575 5.96394L0.27619 1.89909C0.146637 1.77513 0.0584154 1.61722 0.0226774 1.4453C-0.0130606 1.27339 0.00529003 1.09521 0.0754089 0.933268C0.145528 0.77133 0.264265 0.632913 0.416614 0.535516C0.568962 0.438119 0.748079 0.386115 0.931322 0.386078L9.43043 0.386078C9.61368 0.386115 9.79279 0.438119 9.94514 0.535516C10.0975 0.632913 10.2162 0.77133 10.2863 0.933268C10.3565 1.09521 10.3748 1.27339 10.3391 1.4453C10.3033 1.61722 10.2151 1.77513 10.0856 1.89909L5.83601 5.96394Z"
            fill="#848484"
          />
        </svg>
      </div>
    </div>
  );
}
