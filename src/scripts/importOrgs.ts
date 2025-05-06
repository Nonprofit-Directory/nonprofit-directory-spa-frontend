// src/scripts/importOrgs.ts
import { Amplify } from '@aws-amplify/core';
import outputs from '../../amplify_outputs.json';      // <- the file the Sandbox generated
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import orgsJson from '../assets/OrgElementsReal.json';

Amplify.configure(outputs);                         // <- no more manual keys, no TS errors
const client = generateClient<Schema>();

async function importOrgs() {
  for (const rec of orgsJson.records) {
    const input = {
      id:                         rec.Id,
      name:                       rec.Name,
      directoryStatus:            rec.Directory_Status__c,
      publishedInDirectory:       rec.Published_in_Directory__c,
      contactId:                  rec.npe01__One2OneContact__r?.Id,
      contactFirstName:           rec.npe01__One2OneContact__r?.FirstName,
      contactLastName:            rec.npe01__One2OneContact__r?.LastName,
      contactEmail:               rec.Account_Email__c,
      accountPhone:               rec.Account_Phone__c,
      oneLiner:                   rec.One_liner__c,
      yearOfFoundation:           rec.Year_of_foundation__c,
      website:                    rec.Website,
      country:                    rec.Country__c,
      countryPresence:            rec.Country_Presence__c,
      organizationSize:           rec.Organization_size__c,
      sustainableDevelopmentGoals: rec.Sustainable_Development_Goals_SDG__c,
      linkedIn:                   rec.LinkedIn__c,
      image:                      ""  // tu JSON no tiene imageUrl; ajusta si lo agregas 
    };

    try {
      // El método .create devuelve un objeto { data, errors }
      const res = await client.models.Organization.create(input);
      if (res.data) {
        console.log(`✓ Imported ${res.data.id}`);
      } else {
        console.error(`✗ Failed ${input.id}`, res.errors);
      }
    } catch (err) {
      console.error(`✗ Exception ${input.id}:`, err);
    }
  }
}

importOrgs();
