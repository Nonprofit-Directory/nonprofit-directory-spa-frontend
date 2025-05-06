
import OrgCard from '../OrgCard/OrgCard'
import { orgCards } from '@/assets/OrgsElementsExample'
// import rawData from '@/assets/OrgElementsReal.json';
// import type { AccountRecord, AccountQueryResponse } from '@/types/PropelTypes';


function OrgCardContainer() {
  // console.log("rawData", rawData)
  // const newOrgs = rawData.records
  const newOrgs = orgCards
    // const orgs = orgCards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-lvw">
        {
            newOrgs.length < 1 ? ("No cards to display") : (
              newOrgs.map(org => (<OrgCard org={org} key={org.title}/>))
            )
        }
    </div>
  )
}

export default OrgCardContainer