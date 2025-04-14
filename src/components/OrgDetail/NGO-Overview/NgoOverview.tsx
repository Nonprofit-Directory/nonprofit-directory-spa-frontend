import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from  "@/components/ui/card";
  
  const cardBaseStyles =
    "min-w-[350px] max-w-[600px] bg-[#EFECE6] rounded-xl p-6 flex flex-col gap-4 shadow-lg";

function NgoOverview() {
  return (
    <Card className={cardBaseStyles}>
      <CardHeader>
        <CardTitle>NGO Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-3 text-sm">
        <span className="font-semibold">Country:</span>
        <span>Perú</span>
        <span className="font-semibold">Year founded:</span>
        <span>2010</span>
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
  )
}

export default NgoOverview