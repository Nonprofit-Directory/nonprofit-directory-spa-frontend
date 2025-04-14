import { ProelImpactReportContainer } from "./ProelImpactReportContainer/ProelImpactReportContainer";
import { TopFellowshipNgosContainer } from "./TopFellowshipNgosContainer/TopFellowshipNgosContainer";

export default function ExploreData() {
  return (
    <section className="w-full px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#EFECE6] min-h-screen">
      <ProelImpactReportContainer />
      <TopFellowshipNgosContainer />
    </section>
  );
}