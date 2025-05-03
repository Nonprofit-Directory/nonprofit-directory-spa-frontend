// AccountQueryTypes.ts

// Describes the `attributes` object common to records
export interface Attributes {
    type: string;
    url: string;
  }
  
  // RecordType nested object
  export interface RecordTypeReference {
    attributes: Attributes;
    Name: string;
  }
  
  // Primary contact nested object
  export interface ContactReference {
    attributes: Attributes;
    Id: string;
    FirstName: string;
    LastName: string;
  }
  
  // Main Account record returned by the SOQL query
  export interface AccountRecord {
    attributes: Attributes;
    Id: string;
    Name: string;
    RecordType: RecordTypeReference;
    Directory_Status__c: string;
    Published_in_Directory__c: boolean;
    npe01__One2OneContact__r: ContactReference;
    Account_Phone__c: string | null;
    Account_Email__c: string;
    One_liner__c: string;
    Year_of_foundation__c: number;
    Website: string;
    Country__c: string;
    Country_Presence__c: string;
    Organization_size__c: string;
    Salesforce_organization_size__c: string;
    Sustainable_Development_Goals_SDG__c: string;
    LinkedIn__c: string;
  }
  
  // Full SOQL query response
  export interface AccountQueryResponse {
    totalSize: number;
    done: boolean;
    records: AccountRecord[];
  }
  