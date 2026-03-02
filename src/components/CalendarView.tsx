import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Post } from '../data';
import { cn } from '../utils';
import { PostModal } from './PostModal';

interface CalendarViewProps {
  posts: Post[];
  onUpdatePost: (post: Post) => void;
}

export function CalendarView({ posts, onUpdatePost }: CalendarViewProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  // April 2026
  const monthStart = new Date(2026, 3, 1);
  const monthEnd = endOfMonth(monthStart);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const startDay = getDay(monthStart); // 0 = Sunday, 1 = Monday, etc.
  
  const holidays: Record<number, string> = {
    3: 'Sexta-feira Santa',
    5: 'Páscoa',
    21: 'Tiradentes'
  };
  
  const getPostsForDay = (date: Date) => {
    return posts.filter(post => {
      const postDate = parse(post.date, 'dd/MM/yyyy', new Date());
      return isSameDay(postDate, date);
    });
  };

  const formatColors = {
    'Reels': 'bg-pink-100 text-pink-700 border-pink-200',
    'Carrossel': 'bg-blue-100 text-blue-700 border-blue-200',
    'Post Estático': 'bg-amber-100 text-amber-700 border-amber-200',
  };

  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Calendário de Conteúdo</h2>
        <p className="text-zinc-500 mt-1 capitalize">{format(monthStart, 'MMMM yyyy', { locale: ptBR })}</p>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="grid grid-cols-7 border-b border-zinc-200 bg-zinc-50/50">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
            <div key={day} className="py-3 text-center text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={`empty-${index}`} className="border-b border-r border-zinc-100 bg-zinc-50/30 p-2 min-h-[120px]" />
          ))}
          
          {days.map((day, dayIdx) => {
            const dayPosts = getPostsForDay(day);
            return (
              <div 
                key={day.toString()} 
                className={cn(
                  "border-b border-r border-zinc-100 p-2 min-h-[120px] flex flex-col",
                  dayIdx % 7 === 6 ? "border-r-0" : ""
                )}
              >
                <div className="text-right mb-2 flex justify-between items-start">
                  {holidays[day.getDate()] ? (
                    <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-sm truncate max-w-[80px]" title={holidays[day.getDate()]}>
                      {holidays[day.getDate()]}
                    </span>
                  ) : <span />}
                  <span className={cn("text-sm font-medium", holidays[day.getDate()] ? "text-emerald-600" : "text-zinc-400")}>
                    {format(day, 'd')}
                  </span>
                </div>
                
                <div className="flex-1 space-y-1.5 overflow-y-auto">
                  {dayPosts.map(post => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className={cn(
                        "w-full text-left px-2 py-1.5 rounded-md text-xs border transition-colors hover:opacity-80",
                        formatColors[post.format]
                      )}
                    >
                      <div className="font-semibold truncate">{post.format}</div>
                      <div className="truncate opacity-90 mt-0.5">{post.theme}</div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
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
