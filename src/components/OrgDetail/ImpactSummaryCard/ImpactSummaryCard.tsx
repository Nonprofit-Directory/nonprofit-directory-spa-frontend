import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from  "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
  
  const cardBaseStyles =
    "min-w-[350px] max-w-[600px] bg-[#EFECE6] rounded-xl p-6 flex flex-col gap-4 shadow-lg";

export function ImpactSummaryCard() {
    return (
      <Card className={cardBaseStyles}>
        <CardHeader>
          <CardTitle>Impact Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Beneficiaries:</span>
            <span>5k - 10k direct, 10k - 100k indirect</span>
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
    );
  }