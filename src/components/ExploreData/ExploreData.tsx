import { ProelImpactReportContainer } from "./ProelImpactReportContainer/ProelImpactReportContainer";
import { TopFellowshipNgosContainer } from "./TopFellowshipNgosContainer/TopFellowshipNgosContainer";

export default function ExploreData() {
  return (
    <section className="w-full flex-1 flex flex-col lg:flex-row gap-2 bg-[#EFECE6] p-4">
      <ProelImpactReportContainer />
      <TopFellowshipNgosContainer />
    </section>
  );
}