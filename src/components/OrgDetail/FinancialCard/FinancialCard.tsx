
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from  "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

const cardBaseStyles =
    "min-w-[350px] max-w-[600px] bg-[#EFECE6] rounded-xl p-6 flex flex-col gap-4 shadow-lg";


export function FinancialCard() {
    return (
      <Card className={cardBaseStyles}>
        <CardHeader className="flex flex-row justify-between items-start">
          <CardTitle>Financial</CardTitle>
          <div className="text-sm text-white bg-[#FF693B] rounded-full px-3 py-1 font-medium">2024</div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Total revenue:</span>
            <span>$76,297</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total expenses:</span>
            <span>$39,881</span>
          </div>
  
          <Separator />
  
          <div className="w-full h-[150px] bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
            [ Pie Chart Placeholder ]
          </div>
  
          <div className="text-sm">
            <span className="font-semibold">Grants Awarded:</span> Ruralia | Impulso BCP
          </div>
        </CardContent>
      </Card>
    );
  }
  