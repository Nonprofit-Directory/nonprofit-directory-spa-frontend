// src/components/login/LoginForm.tsx
import { useAuthStore } from "@/lib/authStore"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSalesforceAuthURL } from "@/lib/salesforceClient"

const LoginForm = () => {
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLoginMock = () => {
    // Simula autenticación local
    login({ name: "Yayo", email })
    navigate("/home")
  }

  const handleSalesforceLogin = async () => {
    const url = await getSalesforceAuthURL()
    window.location.href = url
  }
  

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md space-y-6 border-2s border-[var(--propel-rich-green)]s">
      <h1 className="text-2xl text-center text-[var(--propel-ignite-orange)]">Bienvenido de nuevo</h1>

      {/* Botón de Google */}
      <Button
        variant="outline"
        className="w-full cursor-pointer border-[var(--propel-rich-green)] hover:bg-[var(--propel-rich-green)]/10"
      >
        Iniciar sesión con Google
      </Button>

      {/* Separador visual opcional */}
      <div className="text-center text-sm text-muted-foreground">— o —</div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          placeholder="luisPerez99@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Contraseña */}
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Botón de login simulado */}
      <Button className="w-full bg-[var(--propel-rich-green)]" onClick={handleLoginMock}>
        Iniciar sesión (mock)
      </Button>

      {/* Login con Salesforce */}
      <Button
        variant="outline"
        className="w-full cursor-pointer border-[var(--propel-rich-green)] hover:bg-[var(--propel-rich-green)]/10"
        onClick={handleSalesforceLogin}
      >
        Iniciar sesión con Salesforce
      </Button>

      {/* Link para crear cuenta */}
      <div className="text-center text-sm text-muted-foreground pt-4">
        ¿No eres tú?{" "}
        <a
          href="/signup"
          className="underline hover:text-primary transition-colors text-[var(--propel-ignite-orange)]"
        >
          Crea una cuenta
        </a>
      </div>
    </div>
  )
}

export default LoginForm
