// src/components/ImpactSummaryCard/ImpactSummaryCard.tsx
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

const cardBaseStyles =
"min-w-[300px] max-w-[600px] h-full max-h-[600px] bg-[#EFECE6] rounded-xl p-6 flex flex-col gap-4 shadow-lg";

export function ImpactSummaryCard() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-extralight mb-4 text-center">
        Impact Summary
      </h2>

      <Card className={cardBaseStyles}>
        <CardContent className="flex-1 grid grid-cols-1 gap-y-3 text-sm overflow-auto">
          <div className="flex justify-between gap-3">
            <span className="font-semibold">Beneficiaries:</span>
            <span className="mono">5k - 10k direct, 10k - 100k indirect</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Impact report:</span>
            <span>Not yet</span>
          </div>

          <Separator />

          <span className="font-semibold">Digitalization Level:</span>

          <div className="flex justify-between items-center">
            <span className="text-xs">Communication Style</span>
            <div className="flex w-[60%] h-3 rounded bg-gray-300 overflow-hidden">
              <div className="bg-[#FF693B] w-1/4" />
              <div className="bg-gray-200 w-3/4" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs">Communication Personalization</span>
            <div className="flex w-[60%] h-3 rounded bg-gray-300 overflow-hidden">
              <div className="bg-[#003A37] w-2/5" />
              <div className="bg-gray-200 w-3/5" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs">Communication Channels</span>
            <div className="flex w-[60%] h-3 rounded bg-gray-300 overflow-hidden">
              <div className="bg-[#5276D1] w-2/5 ml-auto" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs">Data for Decision Making</span>
            <div className="flex w-[60%] h-3 rounded bg-gray-300 overflow-hidden">
              <div className="bg-[#FF693B] w-1/4" />
              <div className="bg-gray-200 w-3/4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImpactSummaryCard;
