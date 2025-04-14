import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  fetchSalesforceToken,
  saveSalesforceAuthToStorage,
} from "@/lib/salesforceClient";

const OAuthCallback = () => {
  const [error, setError] = useState<string | null>(null);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const didRequest = useRef(false); // ✅ se mantiene entre renders

  useEffect(() => {
    const code = params.get("code");
    if (!code) return;

    const getToken = async () => {
      if (didRequest.current) return;
      didRequest.current = true;

      try {
        const { access_token, instance_url } = await fetchSalesforceToken(code);
        saveSalesforceAuthToStorage(access_token, instance_url);
        navigate("/home");
      } catch (err) {
        console.error("Error en OAuth:", err);
        setError("Hubo un problema con el inicio de sesión. Intenta nuevamente.");
      }
    };

    getToken();
  }, [params, navigate]);

  return (
    <div className="text-center mt-10">
      <h1>Procesando autenticación con Salesforce...</h1>
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
    </div>
  );
};

export default OAuthCallback;
