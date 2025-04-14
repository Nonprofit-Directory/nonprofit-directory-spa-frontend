import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/lib/authStore"

const SignupForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSignup = () => {
    // Simula creación de cuenta y login
    login({ name, email })
    navigate("/home")
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md space-y-6 border-2s border-[var(--propel-rich-green)]s">
      <h1 className="text-2xl text-center text-[var(--propel-ignite-orange)]">Crear cuenta</h1>

      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          placeholder="Luis Jair Vázquez"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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

      {/* Botón de crear cuenta */}
      <Button className="w-full bg-[var(--propel-rich-green)]" onClick={handleSignup}>
        Crear cuenta
      </Button>

      {/* Link para login */}
      <div className="text-center text-sm text-muted-foreground pt-4">
        ¿Ya tienes cuenta?{" "}
        <a
          href="/"
          className="underline hover:text-primary transition-colors text-[var(--propel-ignite-orange)]"
        >
          Inicia sesión
        </a>
      </div>
    </div>
  )
}

export default SignupForm
