import { fetchAuthSession } from "@aws-amplify/auth";

export interface JwtPayloadStandardFields {
  exp?: number;
  iss?: string;
  aud?: string | string[];
  nbf?: number;
  iat?: number;
  scope?: string;
  jti?: string;
  sub?: string;
  "custom:role": string;
  email: string;
  name: string;
}
type JsonPrimitive = null | string | number | boolean;
/** JSON array type */
type JsonArray = (JsonPrimitive | JsonObject | JsonArray)[];

export interface JsonObject {
    [x: string]: JsonPrimitive | JsonArray | JsonObject;
}
export type JwtPayload = JwtPayloadStandardFields & JsonObject;

async function loadUserAttributes() : Promise<JwtPayload | null> {
    const session = await fetchAuthSession();
    // console.log('Full ID Token payload:', session!.tokens!.idToken!.payload || null);
    // e.g. session.tokens.idToken.payload['custom:role']
    return  session!.tokens!.idToken!.payload as JwtPayload || null
  }
  
export default loadUserAttributes