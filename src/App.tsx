import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { CalendarView } from './components/CalendarView';
import { ListView } from './components/ListView';
import { StrategyView } from './components/StrategyView';
import { Login } from './components/Login';
import { posts as initialPosts, Post } from './data';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLogin = (password: string) => {
    if (password === 'MONE1@') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Senha incorreta. Tente novamente.');
    }
  };

  const handleUpdatePost = (updatedPost: Post) => {
    setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto bg-zinc-50/50">
        <div className="h-full">
          {activeTab === 'dashboard' && <Dashboard posts={posts} />}
          {activeTab === 'strategy' && <StrategyView />}
          {activeTab === 'calendar' && <CalendarView posts={posts} onUpdatePost={handleUpdatePost} />}
          {activeTab === 'list' && <ListView posts={posts} onUpdatePost={handleUpdatePost} />}
        </div>
      </main>
    </div>
  );
}
