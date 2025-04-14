import React from 'react'
import OrgCard from '../OrgCard/OrgCard'
import { orgCards } from '@/assets/OrgsElementsExample'

function OrgCardContainer() {
    const orgs = orgCards
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-lvw'>
        {
            orgCards.length < 1 ? ("No cards to display") : (
                orgs.map(org => (<OrgCard org={org}/>))
            )
        }
    </div>
  )
}

export default OrgCardContainer