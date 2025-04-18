// src/components/filters/FieldDropdown.tsx
import { useState } from "react";
import { sectors } from "@/assets/dommyData/filterOptions";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface FieldDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function FieldDropdown({
  value: initialValue = sectors[0],
  onChange,
}: FieldDropdownProps) {
  const [value, setValue] = useState(initialValue);

  const handleSelect = (v: string) => {
    setValue(v);
    onChange?.(v);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex justify-between items-center bg-orange-500 rounded-2xl px-3 py-1 text-white w-full sm:w-auto">
          <span>{value}</span>
          <ChevronDown size={16} className="ml-2" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full sm:w-auto bg-white">
        {sectors.map((s) => (
          <DropdownMenuItem key={s} onClick={() => handleSelect(s)}>
            {s}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
