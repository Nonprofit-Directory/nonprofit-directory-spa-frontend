// // src/components/ConfirmSignup.tsx
// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Auth } from 'aws-amplify';

// export default function ConfirmSignup() {
//   const [code, setCode] = useState('');
//   const { state } = useLocation(); // { email }
//   const navigate = useNavigate();
//   const [error, setError] = useState<string | null>(null);

//   const handleConfirm = async () => {
//     try {
//       await Auth.confirmSignUp(state.email, code);
//       // auto-sign in & redirect
//       await Auth.signIn(state.email, /* password? or ask again */);
//       navigate('/home');
//     } catch (err: unknown) {
//         setError(err instanceof Error ? err.message : "We have an error on the request trying to confim, please try again");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 space-y-4">
//       <h2>Verifica tu correo</h2>
//       {error && <div className="text-red-500">{error}</div>}
//       <input
//         placeholder="Código de confirmación"
//         value={code}
//         onChange={e => setCode(e.target.value)}
//         className="w-full border rounded p-2"
//       />
//       <button onClick={handleConfirm} className="w-full bg-blue-600 text-white p-2 rounded">
//         Confirmar
//       </button>
//     </div>
//   );
// }
