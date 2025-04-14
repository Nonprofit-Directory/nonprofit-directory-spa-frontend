
import { TopFellowNgosCard } from "../TopFellowNgosCard/TopFellowNgosCard";
import { topNgos } from "@/assets/TopNgsExample";

export function TopFellowshipNgosContainer() {
    return (
      <div className="flex flex-col gap-4 max-w-[800px] w-full">
        <h2 className="text-xl font-semibold">Top Fellowship NGOs</h2>
        {topNgos.map((ngo, idx) => (
          <TopFellowNgosCard key={idx} ngo={ngo} />
        ))}
      </div>
    );
  }