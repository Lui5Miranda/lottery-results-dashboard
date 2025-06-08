type LoteriaData = {
  tipoJogo: string;
  numero: string;
  dataApuracao: string;
};

interface InfosLotoProps {
  loteriaData: LoteriaData;
}

export function InfosLoto({ loteriaData }: InfosLotoProps) {
  return (
    <div>
      <p className="font-[500] text-[14px]">CONCURSO<span className="md:hidden"> Nº {loteriaData.numero}</span></p>
      <p className="font-[700] text-[20px] hidden md:block">{loteriaData.numero} - {loteriaData.dataApuracao}</p>
    </div>
  );
}
