import React, { useState } from 'react';
import { X, Calendar, Type, Tag, PlayCircle, FileText, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { Post, Comment } from '../data';
import { cn } from '../utils';

interface PostModalProps {
  post: Post;
  onClose: () => void;
  onUpdate: (post: Post) => void;
}

export function PostModal({ post, onClose, onUpdate }: PostModalProps) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      date: new Date().toLocaleString('pt-BR', { 
        day: '2-digit', month: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
      })
    };
    
    onUpdate({
      ...post,
      comments: [...(post.comments || []), comment]
    });
    
    setNewComment('');
  };

  const formatIcons = {
    'Reels': PlayCircle,
    'Carrossel': FileText,
    'Post Estático': ImageIcon,
  };

  const Icon = formatIcons[post.format];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              post.format === 'Reels' ? "bg-pink-100 text-pink-600" :
              post.format === 'Carrossel' ? "bg-blue-100 text-blue-600" :
              "bg-amber-100 text-amber-600"
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 leading-tight">Post {post.id}</h3>
              <p className="text-sm text-zinc-500">{post.theme}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Data</span>
              </div>
              <p className="text-sm font-semibold text-zinc-900">{post.date}</p>
              <p className="text-xs text-zinc-500">{post.dayOfWeek}</p>
            </div>
            <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Type className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Formato</span>
              </div>
              <p className="text-sm font-semibold text-zinc-900">{post.format}</p>
            </div>
            <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Tag className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Funil</span>
              </div>
              <p className="text-sm font-semibold text-zinc-900">{post.funnel}</p>
            </div>
            <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-xs font-medium uppercase tracking-wider">Status</span>
              </div>
              <p className="text-sm font-semibold text-zinc-900">{post.status}</p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h4 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wider">Descrição</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">{post.description}</p>
            </section>

            <section>
              <h4 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wider">Hook</h4>
              <div className="bg-[#5992db]/5 border border-[#5992db]/20 p-4 rounded-xl">
                <p className="text-[#5992db] font-medium text-sm">"{post.hook}"</p>
              </div>
            </section>

            <section>
              <h4 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wider">Referência</h4>
              <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 space-y-2">
                <p className="text-zinc-600 text-sm">{post.reference}</p>
                {post.referenceUrl && (
                  <a 
                    href={post.referenceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#5992db] hover:text-[#4a7ab8] font-medium"
                  >
                    Ver post de referência ↗
                  </a>
                )}
              </div>
            </section>

            <section>
              <h4 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wider">Roteiro Completo</h4>
              <div className="bg-zinc-900 text-zinc-300 p-5 rounded-xl overflow-x-auto">
                <pre className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
                  {post.script}
                </pre>
              </div>
            </section>

            <section className="border-t border-zinc-100 pt-6 mt-6">
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-[#5992db]" />
                Comentários e Alterações
              </h4>
              
              <div className="space-y-4 mb-4">
                {post.comments && post.comments.length > 0 ? (
                  post.comments.map(comment => (
                    <div key={comment.id} className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-semibold text-zinc-700">Equipe M One</span>
                        <span className="text-[10px] text-zinc-400">{comment.date}</span>
                      </div>
                      <p className="text-sm text-zinc-600 whitespace-pre-wrap">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-zinc-400 italic">Nenhum comentário ainda. Adicione sugestões ou alterações abaixo.</p>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Adicione um comentário, sugestão de alteração ou nota..."
                  className="w-full min-h-[80px] p-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5992db]/20 focus:border-[#5992db] resize-none"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className="px-4 py-2 bg-[#5992db] text-white rounded-lg text-sm font-medium hover:bg-[#4a7ab8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Adicionar Comentário
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
