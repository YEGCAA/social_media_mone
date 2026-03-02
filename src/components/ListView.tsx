import React, { useState } from 'react';
import { Search, Filter, PlayCircle, FileText, Image as ImageIcon } from 'lucide-react';
import { Post, PostFormat, FunnelStage } from '../data';
import { cn } from '../utils';
import { PostModal } from './PostModal';

interface ListViewProps {
  posts: Post[];
  onUpdatePost: (post: Post) => void;
}

export function ListView({ posts, onUpdatePost }: ListViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<PostFormat | 'Todos'>('Todos');
  const [selectedFunnel, setSelectedFunnel] = useState<FunnelStage | 'Todos'>('Todos');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.theme.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFormat = selectedFormat === 'Todos' || post.format === selectedFormat;
    const matchesFunnel = selectedFunnel === 'Todos' || post.funnel === selectedFunnel;
    
    return matchesSearch && matchesFormat && matchesFunnel;
  });

  const formatIcons = {
    'Reels': PlayCircle,
    'Carrossel': FileText,
    'Post Estático': ImageIcon,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Lista de Posts</h2>
          <p className="text-zinc-500 mt-1">Gerencie e visualize todos os conteúdos planejados.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5992db]/20 focus:border-[#5992db] transition-all w-64"
            />
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 p-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2 py-1">Formato</p>
                {['Todos', 'Reels', 'Carrossel', 'Post Estático'].map(format => (
                  <button
                    key={format}
                    onClick={() => setSelectedFormat(format as any)}
                    className={cn(
                      "w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors",
                      selectedFormat === format ? "bg-[#5992db]/10 text-[#5992db] font-medium" : "text-zinc-600 hover:bg-zinc-50"
                    )}
                  >
                    {format}
                  </button>
                ))}
              </div>
              <div className="border-t border-zinc-100 my-2" />
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2 py-1">Funil</p>
                {['Todos', 'Topo', 'Meio', 'Fundo', 'Identidade', 'Bastidor', 'Desejo', 'Conversão', 'Autoridade'].map(funnel => (
                  <button
                    key={funnel}
                    onClick={() => setSelectedFunnel(funnel as any)}
                    className={cn(
                      "w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors",
                      selectedFunnel === funnel ? "bg-[#5992db]/10 text-[#5992db] font-medium" : "text-zinc-600 hover:bg-zinc-50"
                    )}
                  >
                    {funnel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50">
                <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Data</th>
                <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Formato</th>
                <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tema</th>
                <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Funil</th>
                <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredPosts.map((post) => {
                const Icon = formatIcons[post.format];
                return (
                  <tr 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="hover:bg-zinc-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm font-medium text-zinc-900">{post.date}</div>
                      <div className="text-xs text-zinc-500">{post.dayOfWeek}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Icon className={cn(
                          "w-4 h-4",
                          post.format === 'Reels' ? "text-pink-500" :
                          post.format === 'Carrossel' ? "text-blue-500" :
                          "text-amber-500"
                        )} />
                        <span className="text-sm font-medium text-zinc-700">{post.format}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-zinc-900 line-clamp-1 group-hover:text-[#5992db] transition-colors">{post.theme}</div>
                      <div className="text-xs text-zinc-500 line-clamp-1 mt-0.5">{post.hook}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                        {post.funnel}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {post.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {filteredPosts.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-zinc-500">Nenhum post encontrado com os filtros atuais.</p>
            </div>
          )}
        </div>
      </div>

      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
          onUpdate={(updatedPost) => {
            onUpdatePost(updatedPost);
            setSelectedPost(updatedPost);
          }}
        />
      )}
    </div>
  );
}
