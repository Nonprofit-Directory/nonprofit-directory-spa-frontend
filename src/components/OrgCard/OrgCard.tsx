// OrgCard.tsx
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
// import { AccountRecord } from "@/types/PropelTypes";
import { IOrgCard } from "@/assets/OrgsElementsExample";

export interface IOrgCardProps {
  org: IOrgCard;
}

export default function OrgCard({ org }: IOrgCardProps) {
  // Texto de descripción completo
  // const fullText = org.One_liner__c || "No description";
  const fullText = org.description || "No description";
  const CHAR_LIMIT = 200; // límite de caracteres para vista previa
  const isLong = fullText.length > CHAR_LIMIT;

  const [expanded, setExpanded] = useState(false);

  // Texto mostrado: vista previa o completo
  const displayedText = isLong && !expanded
    ? fullText.slice(0, CHAR_LIMIT) + '...'
    : fullText;

  return (
    <Card className="bg-[var(--propel-clay-high)] flex flex-col">
      <CardHeader>
        <div className="icon-btn flex justify-between items-center">
          {org.image ? (
            <div className="w-30 h-20 overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover object-center"
                src={org.image}
                alt={org.title}
              />
            </div>
          ) : (
            <img
              src="https://cdn.prod.website-files.com/6149758b856b3d63d914d5a8/6177d4b4c4773970200f540b_Propel_Logo.svg"
              alt="Propel"
              className="w-25 h-25"
            />
          )}
          <Button className="bg-[var(--propel-ignite-orange)] hover:bg-orange-600">
            Fellowship
          </Button>
        </div>
        <Separator className="my-4 w-full border-1" />
        <CardTitle className="text-xl">{org.title || "No title"}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-start">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-sm leading-relaxed">
          {displayedText}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[var(--propel-rich-green)] hover:underline text-sm"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>
        )}
      </CardContent>

      <CardFooter className="flex flex-col justify-start items-center gap-2">
        <Button className="bg-[var(--propel-rich-green)] py-1 px-2 w-full hover:bg-green-800">
          See more
        </Button>
      </CardFooter>
    </Card>
  );
}