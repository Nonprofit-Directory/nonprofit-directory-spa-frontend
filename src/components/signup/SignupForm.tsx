// // src/components/SignupForm.tsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Auth } from '@aws-amplify/auth'

// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';

// export default function SignupForm() {
//   const [name, setName]               = useState('');
//   const [email, setEmail]             = useState('');
//   const [password, setPassword]       = useState('');
//   const [submitting, setSubmitting]   = useState(false);
//   const [error, setError]             = useState<string | null>(null);
//   const navigate                       = useNavigate();

//   const handleSignup = async () => {
//     setSubmitting(true);
//     setError(null);

//     try {
//       await Auth.signUp({
//         username: email,
//         password,
//         attributes: {
//           email,            // built-in
//           name,             // built-in
//           'custom:userType': 'user'  // your locked dropdown value
//         }
//       });
//       // on success, go to confirmation/next step
//       navigate('/confirm-signup', { state: { email } });
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : 'Error creating account');
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-6">
//       <h1 className="text-2xl text-center">Crear cuenta</h1>
//       {error && <div className="text-red-500">{error}</div>}

//       <div>
//         <Label htmlFor="name">Nombre completo</Label>
//         <Input id="name" value={name}
//           onChange={e => setName(e.target.value)} />
//       </div>

//       <div>
//         <Label htmlFor="email">Correo electrónico</Label>
//         <Input id="email" type="email" value={email}
//           onChange={e => setEmail(e.target.value)} />
//       </div>

//       <div>
//         <Label htmlFor="password">Contraseña</Label>
//         <Input id="password" type="password" value={password}
//           onChange={e => setPassword(e.target.value)} />
//       </div>

//       <div>
//         <Label htmlFor="userType">Tipo de usuario</Label>
//         <select id="userType" value="user" disabled
//           className="w-full border rounded p-2 bg-gray-100">
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//           <option value="org">Organization</option>
//         </select>
//       </div>

//       <Button onClick={handleSignup} disabled={submitting} className="w-full">
//         {submitting ? 'Creando...' : 'Crear cuenta'}
//       </Button>
//     </div>
//   );
// }
