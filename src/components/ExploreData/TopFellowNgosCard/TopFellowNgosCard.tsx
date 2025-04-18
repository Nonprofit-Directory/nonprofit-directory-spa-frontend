import { FellowNgo } from "@/assets/TopNgsExample";
import { Button } from "@/components/ui/button";

export function TopFellowNgosCard({ ngo }: { ngo: FellowNgo }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 shadow-sm min-w-[320px] max-w-[800px] w-full">
      <div className=" w-full flex items-center gap-4">
        <img
          src={ngo.logo}
          alt={ngo.name}
          className="w-[130px] h-[130px] object-cover rounded-lg"
        />
        <div className="tfnc-body-container-card w-full">
          <div className="card-header pb-2 flex justify-between items-center w-full">
            <h3 className="text-xl font-bold w-full">{ngo.name}</h3>
            <Button className=" bg-transparent text-[var(--propel-rich-green)] border-2 border-[var(--propel-rich-green)] hover:bg-[#cbe4e3] rounded-full px-3 py-1 text-xs font-semibold cursor-pointer">
              FELLOWSHIP
            </Button>
          </div>
          <div className="tfnc-items-list-description w-full grid grid-cols-[auto_1fr] gap-x-4">
            <div className="descriptor-titles flex flex-col">
              <span className="text-sm font-semibold">Beneficiaries:</span>
              <span className="text-sm font-semibold">Country:</span>
              <span className="text-sm font-semibold">
                Digitalization Level:
              </span>
            </div>
            <div className="descriptor-infos pl-2">
              <p className="text-sm">{ngo.beneficiaries}</p>
              <p className="text-sm">{ngo.country}</p>
              <p className="text-sm">{ngo.digitalizationLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
