import axios from "axios"

const SF_CLIENT_ID = import.meta.env.VITE_SF_CLIENT_ID
const SF_REDIRECT_URI = import.meta.env.VITE_SF_REDIRECT_URI
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const getSalesforceAuthURL = async (): Promise<string> => {
    const verifier = crypto.randomUUID() + crypto.randomUUID()
    localStorage.setItem("pkce_verifier", verifier)
  
    const hashed = await sha256(verifier)
    const challenge = base64URLEncode(hashed)
  
    const salesforceAuthURL = new URL("https://login.salesforce.com/services/oauth2/authorize")
    salesforceAuthURL.searchParams.set("response_type", "code")
    salesforceAuthURL.searchParams.set("client_id", SF_CLIENT_ID)
    salesforceAuthURL.searchParams.set("redirect_uri", SF_REDIRECT_URI)
    salesforceAuthURL.searchParams.set("code_challenge", challenge)
    salesforceAuthURL.searchParams.set("code_challenge_method", "S256")
  
    return salesforceAuthURL.toString()
  }
  

  export const fetchSalesforceToken = async (code: string) => {
    const verifier = localStorage.getItem("pkce_verifier")
  
    // ✅ Validación aquí
    if (!verifier) {
      throw new Error("Missing PKCE verifier. The login flow may have been interrupted.")
    }
  
    const response = await axios.post(`${BACKEND_URL}/auth/salesforce/token`, {
      code,
      verifier,
    })
  
    return response.data
  }
  
  
  

export const saveSalesforceAuthToStorage = (token: string, instanceUrl: string) => {
  localStorage.setItem("token", token)
  localStorage.setItem("salesforce_instance", instanceUrl)
}

export const getSalesforceAuthFromStorage = () => {
  const token = localStorage.getItem("token")
  const instanceUrl = localStorage.getItem("salesforce_instance")
  return { token, instanceUrl }
}

export const getSalesforceAccounts = async () => {
    const { token, instanceUrl } = getSalesforceAuthFromStorage()
  
    if (!token || !instanceUrl) throw new Error("No token or instance stored")
  
    const response = await axios.get("http://localhost:4000/salesforce/accounts", {
      headers: {
        token,
        instanceurl: instanceUrl,
      },
    })
  
    return response.data
  }
  

function base64URLEncode(str: ArrayBuffer) {
    return btoa(String.fromCharCode(...new Uint8Array(str)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  }
  
  async function sha256(plain: string) {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return await crypto.subtle.digest("SHA-256", data)
  }
  
