type LoteriaData = {
  listaDezenas: number[];
};

interface BallProps {
  loteriaData: LoteriaData;
}

export function Ball({ loteriaData }: BallProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center py-4">
      {loteriaData.listaDezenas.map(number => (
        <div>
          <div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full text-[25px] font-[700] text-[var(--text-dark)] m-1">{number}</div>
        </div>
      ))}
    </div>
  );
}
