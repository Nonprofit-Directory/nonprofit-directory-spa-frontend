import { orgCards } from "@/assets/OrgsElementsExample";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  //   CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { FaProductHunt, FaLink, FaLinkedinIn, } from "react-icons/fa6";
import { ImpactSummaryCard } from "./ImpactSummaryCard/ImpactSummaryCard";
import { FinancialCard } from "./FinancialCard/FinancialCard";
import NgoOverview from "./NGO-Overview/NgoOverview";
import { IoHeartCircle } from "react-icons/io5";

function OrgDetail() {
  const org = orgCards[0];
  return (
    <Card className="flex flex-col h-full w-full max-w-[1656px] mx-auto bg-[var(--propel-clay-high)] overflow-auto sm:overflow-hidden">
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
              <div className="text-xl flex sm:flex-col gap-2 items-center pb-4 sm:pb-0 [@media(min-width:792px)]:flex-row">
                <h1 className=" text-3xl sm:text-4xl font-extraligt">
                    {org.title || "No title"}
                  </h1>
                  <div className="flex items-center gap-2">
                    <a
                      href={org.website ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Go to website"
                      className="text-[var(--propel-rich-green)] hover:text-[var(--propel-ignite-orange)] transition-transform hover:scale-110"
                    >
                      <FaLink size={24} />
                    </a>
                    <a
                      href={org.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Go to LinkedIn"
                      className="text-[var(--propel-rich-green)] hover:text-[var(--propel-ignite-orange)] transition-transform hover:scale-110"
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                  </div>
              </div>
              <button
                className="
                  bg-[#fc5c3a]
                  hover:bg-[#fc5c3a]
                  cursor-pointer
                  text-white
                  rounded-full
                  shadow-md
                  hover:shadow-lg
                  transform
                  transition
                  duration-200
                  ease-in-out
                  hover:scale-105
                  flex items-center gap-2 px-8 py-2 border-2
                "
              >
                <span className="text-lg font-extralight">Donate</span>
                <IoHeartCircle size={50} className="w-10 h-10"/>
              </button>
            </CardTitle>
            <p className="pt-3">{org.description || "No description"}</p>
          </div>
        </div>
      </CardHeader>
      <Separator className="w-full border-1" />
      <CardContent className="h-fulls flex flex-1 flex-col sm:overflow-auto pb-2">
        <h1 className="text-lg pb-4 text-[var(--propel-rich-green)]">Org details:</h1>
        <div className="h-full card-content-cards-container grid grid-cols-1 md:grid-cols-2 [@media(min-width:1150px)]:grid-cols-3 gap-3 items-stretch ">
          <NgoOverview />
          <ImpactSummaryCard />
          <FinancialCard /> 
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-end items-center gap-2 font-extralight text-gray-400 text-sm sm:sticky sm:bottom-0 sm:bg-[var(--propel-clay-high)]">
        <p className="">Last updated:</p>
        <p className="">{"February "} <span className="mono">{"08, 2025"}</span> </p>
      </CardFooter>
    </Card>
  );
}

export default OrgDetail;
