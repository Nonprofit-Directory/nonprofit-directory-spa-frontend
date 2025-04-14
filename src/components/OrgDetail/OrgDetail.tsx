import { orgCards } from "@/assets/OrgsElementsExample";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  //   CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GiReceiveMoney } from "react-icons/gi";
import { Separator } from "@radix-ui/react-separator";
import { FaProductHunt } from "react-icons/fa6";
import { ImpactSummaryCard } from "./ImpactSummaryCard/ImpactSummaryCard";
import { FinancialCard } from "./FinancialCard/FinancialCard";
import NgoOverview from "./NGO-Overview/NgoOverview";

function OrgDetail() {
  const org = orgCards[0];
  return (
    <Card className="w-full max-w-[1656px] bg-[var(--propel-clay-high)]">
      <CardHeader className="w-full flex justify-between items-center">
        <div className="org-icon-details w-full flex items-center gap-4">
          <div className="icon-btn flex justify-between items-center">
            {org.image ? (
              <div className="w-20 h-20 border-2 border-[var(--propel-ignite-orange)] rounded-full overflow-hidden flex justify-center items-center">
                <img
                  className="w-full h-full object-cover object-center"
                  src={org.image}
                />
              </div>
            ) : (
              <FaProductHunt className="text-4xl text-orange-500" />
            )}
          </div>
          <div className="card-secription pb-3">
            <CardTitle className="text-xl flex items-center gap-3">
              <h1 className="">{org.title || "No title"}</h1>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </CardTitle>
            <p className="">{org.description || "No description"}</p>
          </div>
        </div>
        <Button className="bg-[var(--propel-ignite-orange)] hover:bg-orange-600 cursor-pointer flex justify-center items-center">
          <p className="">Donate</p>
          <GiReceiveMoney />
        </Button>
      </CardHeader>
      <Separator className="my-4 w-full border-1" />
      <CardContent className="">
        <h1 className="text-lg pb-4 text-[var(--propel-rich-green)]">Org details:</h1>
        <div className="card-content-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ¨">
          <NgoOverview />
          <ImpactSummaryCard />
          <FinancialCard />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center gap-2 font-extralight text-gray-400 text-sm">
        <p className="">Last updated:</p>
        <p className="">{"February 08, 2025"}</p>
      </CardFooter>
    </Card>
  );
}

export default OrgDetail;
