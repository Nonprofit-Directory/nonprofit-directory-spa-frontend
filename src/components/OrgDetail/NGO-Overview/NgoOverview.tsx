// src/components/NGO-Overview/NgoOverview.tsx
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const cardBaseStyles =
  "min-w-[300px] max-w-[600px] h-full max-h-[600px] bg-[#EFECE6] rounded-xl p-6 flex flex-col gap-4 shadow-lg";

export function NgoOverview() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-extralight mb-4 text-center">NGO Overview</h2>
      <Card className={cardBaseStyles}>

        {/* Contenido que crece y hace scroll si supera la altura */}
        <CardContent className="flex-1 grid grid-cols-2 gap-y-3 text-sm overflow-auto">
          <span className="font-semibold">Country:</span>
          <span>Perú</span>
          <span className="font-semibold">Year founded:</span>
          <span className="mono">2010</span>
          <span className="font-semibold">Org Size:</span>
          <span>Medium</span>
          <span className="font-semibold">Social cause:</span>
          <span>Education</span>
          <span className="font-semibold">Programs offered:</span>
          <span>After School</span>
          <span className="font-semibold">Population served:</span>
          <span>Children | Adults</span>
          <span className="font-semibold">Propel Training:</span>
          <span>Fellowship Cohort 4</span>
          <span className="font-semibold">ODS:</span>
          <div className="flex gap-2">
            <img
              src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg"
              alt="Goal 1"
              className="h-6"
            />
            <img
              src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg"
              alt="Goal 4"
              className="h-6"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default NgoOverview;
