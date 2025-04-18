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
import { FaProductHunt, FaLinkedin } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { ImpactSummaryCard } from "./ImpactSummaryCard/ImpactSummaryCard";
import { FinancialCard } from "./FinancialCard/FinancialCard";
import NgoOverview from "./NGO-Overview/NgoOverview";

function OrgDetail() {
  const org = orgCards[0];
  return (
    <Card className="flex flex-col h-full w-full max-w-[1656px] mx-auto bg-[var(--propel-clay-high)]">
      <CardHeader className="w-full flex justify-between items-center">
        <div className="org-icon-details w-full h-full flex flex-col sm:flex-row items-center gap-4">
          <div className="icon-btn flex justify-between items-center">
            {org.image ? (
              <div className="w-40 h-30 sm:w-50 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover object-center"
                src={org.image}
                alt={org.title}
              />
            </div>
            ) : (
              <FaProductHunt className="text-4xl text-orange-500" />
            )}
          </div>
          <div className="w-full h-full card-secription pb-3 sm:pt-3">
            <CardTitle className=" flex flex-col sm:flex-row items-center justify-between">
              <div className="text-xl flex items-center gap-3 pb-4 sm:pb-0">
                <h1 className="text-3xl sm:text-4xl font-bold sm:pr-6">
                    {org.title || "No title"}
                  </h1>
                  <a
                    href={org.website ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to website"
                    className="text-[var(--propel-rich-green)] hover:text-[var(--propel-ignite-orange)] transition-transform hover:scale-110"
                  >
                    <FiGlobe size={24} />
                  </a>
                  <a
                    href={org.linkedin ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to LinkedIn"
                    className="text-[var(--propel-rich-green)] hover:text-[var(--propel-ignite-orange)] transition-transform hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </a>
              </div>
              <Button
                className="
                  bg-[var(--propel-ignite-orange)]
                  hover:bg-[var(--propel-ignite-orange)]
                  cursor-pointer
                  text-white
                  flex items-center gap-2 px-4 py-2
                  rounded-lg
                  shadow-md
                  hover:shadow-lg
                  transform
                  transition
                  duration-200
                  ease-in-out
                  hover:scale-105
                "
              >
                <span className="text-lg">Donate</span>
                <GiReceiveMoney className="text-2xl" />
              </Button>
            </CardTitle>
            <p className="pt-3">{org.description || "No description"}</p>
          </div>
        </div>
      </CardHeader>
      <Separator className="w-full border-1" />
      <CardContent className="h-full flex flex-col overflow-auto pb-2">
        <h1 className="text-lg pb-4 text-[var(--propel-rich-green)]">Org details:</h1>
        <div className="h-full card-content-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch ">
          <NgoOverview />
          <ImpactSummaryCard />
          <FinancialCard /> 
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-end items-center gap-2 font-extralight text-gray-400 text-sm ">
        <p className="">Last updated:</p>
        <p className="">{"February 08, 2025"}</p>
      </CardFooter>
    </Card>
  );
}

export default OrgDetail;
