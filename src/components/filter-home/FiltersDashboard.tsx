// src/components/shared/FiltersDashboard.tsx
import { CountryDropdown } from "../shared/filters/CountryDropdown/CountryDropdown";
import { FieldDropdown } from "../shared/filters/FieldDropdown/FieldDropdown";
import { ParticipationDropdown } from "../shared/filters/ParticipationDropdown/ParticipationDropdown";

export function FiltersDashboard() {
  return (
    <div className="filter-component w-full flex flex-col sm:flex-row items-center bg-[var(--propel-clay-high)] rounded-2xl px-4 py-4 gap-4">
      <p>Show me top performing organizations in:</p>
      <CountryDropdown />
      <p>in:</p>
      <FieldDropdown />
      <p>that have participated in:</p>
      <ParticipationDropdown />
    </div>
  );
}

export default FiltersDashboard;
