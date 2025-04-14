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

export interface IOrgCard {
  image: string;
  title: string;
  country: string;
  description: string;
}

function OrgCard({ org }: { org: IOrgCard }) {
  return (
    <Card className="bg-[var(--propel-clay-high)] ">
      <CardHeader>
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
          <Button className="bg-[var(--propel-ignite-orange)] hover:bg-orange-600 cursor-pointer">Fellowship</Button>
        </div>
        <Separator className="my-4 w-full border-1" />
        <CardTitle className="text-xl">{org.title || "No title"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="card-secription pb-3">
          <h2>Description</h2>
          <p className="">{org.description || "No description"}</p>
        </div>
        <Button className="bg-[var(--propel-rich-green)] py-1 px-2 w-full rounded-2xl cursor-pointer hover:bg-[#2d4b4a]">
          See more
        </Button>
      </CardContent>
      <CardFooter className="flex justify-start items-center gap-2">
        <p className="">Tags:</p>
        <p className="">Peru, Education, Fellowship</p>
      </CardFooter>
    </Card>
  );
}

export default OrgCard;
