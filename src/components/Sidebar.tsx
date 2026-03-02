import React from 'react';
import { LayoutDashboard, Calendar, List, Settings, Compass } from 'lucide-react';
import { cn } from '../utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'strategy', label: 'Estratégia', icon: Compass },
    { id: 'calendar', label: 'Calendário', icon: Calendar },
    { id: 'list', label: 'Lista de Posts', icon: List },
  ];

  return (
    <div className="w-64 bg-zinc-900 text-zinc-300 flex flex-col h-screen border-r border-zinc-800">
      <div className="p-6">
        <img 
          src="https://i.ibb.co/gZcFGqVt/Brand-03.png" 
          alt="Even Digital Logo" 
          className="h-8 w-auto mb-4"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-xl font-semibold text-white tracking-tight">M One Imobiliária</h1>
        <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Content Tracker</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-zinc-800 text-white" 
                  : "hover:bg-zinc-800/50 hover:text-white"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-[#5992db]" : "text-zinc-400")} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-zinc-800">
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Configurações</span>
        </button>
      </div>
    </div>
  );
}
