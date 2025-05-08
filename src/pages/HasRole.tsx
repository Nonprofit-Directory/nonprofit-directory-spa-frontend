// src/components/HasRole.tsx
import { useState } from 'react';
import { useAuthStore } from '@/lib/authStore';
import { updateUserAttributes } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

type Role = 'org' | 'donador';

export default function HasRole() {
  // const user = useAuthStore(s => s.user);
  const role = useAuthStore(s => s.user?.['custom:role']);
  const setUser = useAuthStore(s => s.setUser);
  const [newRole, setNewRole] = useState<Role>('org');
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  // Si ya hay rol, redirigimos
  if (role) {
    navigate('/home', { replace: true });
    return null;
  }

  const handleSubmit = async () => {
    setSaving(true);
    try {
      await updateUserAttributes({
        userAttributes: {
          'custom:role': newRole
        }
      });
      // Actualizamos también el store local
      const updated = { ...useAuthStore.getState().user!, ['custom:role']: newRole };
      setUser(updated);
      navigate('/home', { replace: true });
    } catch (err) {
      console.error('Error guardando rol:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl">Elige tu rol</h2>
      <select
        className="w-full border rounded p-2"
        value={newRole}
        onChange={e => setNewRole(e.target.value as Role)}
      >
        <option value="org">Organización</option>
        <option value="donador">Donador</option>
      </select>
      <button
        className="w-full bg-[var(--propel-rich-green)] text-white p-2 rounded"
        onClick={handleSubmit}
        disabled={saving}
      >
        {saving ? 'Guardando…' : 'Aceptar'}
      </button>
    </div>
  );
}
