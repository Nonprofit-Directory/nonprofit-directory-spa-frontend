import {
  Card,
  CardHeader,
  CardTitle,
  //   CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { FaProductHunt } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useState } from "react";
import { AccountRecord } from "@/types/PropelTypes";

export interface IOrgCard {
  image: string;
  title: string;
  country: string;
  description: string;
}

function OrgCard({ org }: { org: AccountRecord}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className="bg-[var(--propel-clay-high)] h-full flex flex-col">
      <CardHeader>
        <div className="icon-btn flex justify-between items-center">
          {org.image ? (
            <div className="w-30 h-20 rounded-xl overflow-hidden flex justify-center items-center">
                <img
                  className="w-full h-full object-cover object-center"
                  src={org.image}
                />
            </div>
          ) : (
            // <FaProductHunt className="text-4xl text-orange-500" />
            <img
              src="https://cdn.prod.website-files.com/6149758b856b3d63d914d5a8/6177d4b4c4773970200f540b_Propel_Logo.svg"
              alt="Propel"
              className="w-25 h-25"
            />
          )}
          <Button className="bg-[var(--propel-ignite-orange)] hover:bg-orange-600 cursor-pointer">Fellowship</Button>
        </div>
        <Separator className="my-4 w-full border-1" />
        <CardTitle className="text-xl">{org.Name || "No title"}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <h2 className="font-semibold mb-2">Description</h2>

        {/* Contenedor de descripción con max-height dinámico */}
        <div
          className={`
            relative
            transition-[max-height]
            duration-300
            overflow-hidden
            ${
              expanded
                ? "max-h-[1000px]"        /* lo suficientemente grande para mostrar todo */
                : "max-h-24"              /* 6rem = 96px, ajústalo a tu gusto */
            }
          `}
        >
          <p className="text-sm leading-relaxed">
            {org.One_liner__c || "No description"}
            {" "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore et porro harum cumque quasi officia, explicabo ratione laborum accusamus? Magnam sunt eius neque necessitatibus perferendis, aperiam dolorum dolores vel!
          </p>

          {/* Sombra o degradado para indicar más contenido */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[var(--propel-clay-high)] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Botón de ver más / ver menos */}
        {(
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[var(--propel-rich-green)] hover:underline text-sm text-center w-full"
          >
            {expanded ? "Show less" : "View more"}
          </button>
        )}
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-center gap-2">
      <Button className="bg-[var(--propel-rich-green)] py-1 px-2 w-full rounded-2xl cursor-pointer hover:bg-green-800">
          See more
        </Button>
        <div className="flex justify-start items-center gap-2">
        <p className="">Tags:</p>
        <p className="">Peru, Education, Fellowship</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default OrgCard;
