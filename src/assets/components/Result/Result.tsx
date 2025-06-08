import { Ball } from "../Ball/Ball";

type LoteriaData = {
  listaDezenas: number[];
};

interface ResultProps {
  loteriaData: LoteriaData;
}

export function Result({ loteriaData }: ResultProps) {
  return (
    <section className="flex flex-col items-center text-center justify-between min-h-[50vh] p-2
      md:p-4 md:w-[65vw] md:h-screen
    ">
      <div></div>
      <Ball loteriaData={loteriaData} />
      <div>
        <span className="text-[16px] font-[500] text-[var(--text-darkness)]">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </span>
      </div>
    </section>
  );
}
