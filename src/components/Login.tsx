import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (password: string) => void;
  error?: string;
}

export function Login({ onLogin, error }: LoginProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img
          src="https://i.ibb.co/gZcFGqVt/Brand-03.png"
          alt="Even Digital Logo"
          className="mx-auto h-12 w-auto mb-6"
          referrerPolicy="no-referrer"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-900">
          M One Imobiliária
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-500 uppercase tracking-wider font-medium">
          Content Tracker
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-zinc-200/50 sm:rounded-2xl sm:px-10 border border-zinc-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                Senha de Acesso
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5992db]/20 focus:border-[#5992db] sm:text-sm transition-all"
                  placeholder="Digite a senha"
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 font-medium" id="password-error">
                  {error}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#5992db] hover:bg-[#4a7ab8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5992db] transition-colors"
              >
                Acessar Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
