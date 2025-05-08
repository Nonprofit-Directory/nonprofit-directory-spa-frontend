// App.tsx
import { RouterProvider } from "react-router-dom";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { router } from "./routes/router";
import { amplifyTheme } from "./styles/amplifyTheme";
import { useLoadUser } from "./routes/useLoadUser";

Amplify.configure(outputs);

function AppContent() {
  useLoadUser()
  return <RouterProvider router={router} />
}

export default function App() {
  return (
    <div className="h-svh w-svw flex justify-center items-center bg-[var(--propel-clay-gray)]">
      <ThemeProvider theme={amplifyTheme}>
        <Authenticator
          initialState="signIn"
          socialProviders={["google"]}
          formFields={{
            signUp: {
              email: {
                label: "Correo electrónico",
                placeholder: "tu@correo.com",
                type: "email",
                isRequired: true,
                order: 1,
              },
              // 2. Nombre completo
              name: {
                label: "Nombre completo",
                placeholder: "Tu nombre",
                isRequired: true,
                order: 2,
              },
              // 3. custom:userType
              "custom:role": {
                label: "Tipo de usuario (read only)",
                defaultValue: "user",
                isReadOnly: true,
                order: 3,
              },
              // 4. Contraseña
              password: {
                label: "Contraseña",
                placeholder: "••••••••",
                isRequired: true,
                order: 4,
              },
              // 5. Confirmar contraseña
              confirm_password: {
                label: "Confirma tu contraseña",
                isRequired: true,
                order: 5,
              },
            },
            signIn: {
              // en signIn igual solo email + password
              username: {
                label: "Correo electrónico",
                placeholder: "tu@correo.com",
                order: 1,
                // opcionalmente: type: "email",
              },
              password: {
                label: "Contraseña",
                placeholder: "••••••••",
                order: 2,
              },
            },
          }}
        >
          {/* <RouterProvider router={router} /> */}
          {/* <p>hola</p> */}
          <AppContent/>
        </Authenticator>
      </ThemeProvider>
    </div>
  );
}
