import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Organization: a
    .model({
      id:                         a.id(),
      name:                       a.string().required(),
      directoryStatus:            a.string().required(),
      publishedInDirectory:       a.boolean(),
      contactId:                  a.id(),
      contactFirstName:           a.string(),
      contactLastName:            a.string(),
      contactEmail:               a.string().required(),
      accountPhone:               a.string(),
      oneLiner:                   a.string(),
      yearOfFoundation:           a.integer(),
      website:                    a.string(),
      country:                    a.string(),
      countryPresence:            a.string(),
      organizationSize:           a.string(),
      sustainableDevelopmentGoals: a.string(),
      linkedIn:                   a.string(),
      image:                      a.string(),
    })
    .authorization(allow => [
      allow.publicApiKey().to(['create']),
      // tus usuarios Cognito siguen pudiendo todo
      allow.authenticated().to(['create', 'read', 'update', 'delete']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  // aquí configuramos el API Key como modo de auth (con expiración opcional)
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 365, // tú decides
    },
  },
});



/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
