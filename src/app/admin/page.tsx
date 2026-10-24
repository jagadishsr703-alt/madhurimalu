'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Song, SongInput } from '@/types';
import {
  PlusCircle,
  ListMusic,
  Trash2,
  Edit3,
  ExternalLink,
  LogOut,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  Database,
  Image as ImageIcon
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'edit'>('list');
  const [editingSongId, setEditingSongId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [syncing, setSyncing] = useState(false);

  const handleSyncToCloud = async () => {
    setSyncing(true);
    setMessage(null);
    try {
      const res = await fetch('/api/sync', { method: 'POST' });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Sync failed');
      }
      setMessage({
        type: 'success',
        text: `Successfully synced ${data.count} songs to Supabase Cloud Database!`,
      });
      await loadSongs();
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: `Supabase Sync Error: ${err.message}. Please verify your SQL schema and RLS policy in Supabase.`,
      });
    } finally {
      setSyncing(false);
    }
  };

  // Form state
  const [formData, setFormData] = useState<SongInput>({
    title: '',
    movie: '',
    singers: '',
    lyricist: '',
    musicDirector: '',
    cast: '',
    year: new Date().getFullYear(),
    language: 'Telugu',
    posterUrl: '',
    youtubeUrl: '',
    lyrics: '',
    meaning: '',
    tags: [],
    featured: false,
    status: 'published',
  });

  const [tagInput, setTagInput] = useState('');

  // Check auth and fetch songs
  useEffect(() => {
    fetch('/api/auth/status')
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push('/admin/login');
        } else {
          setAuthenticated(true);
          loadSongs();
        }
      })
      .catch(() => router.push('/admin/login'));
  }, [router]);

  const loadSongs = async () => {
    try {
      const res = await fetch(`/api/songs?all=true&t=${Date.now()}`, { cache: 'no-store' });
      const data = await res.json();
      if (data.songs) {
        setSongs(data.songs);
      }
    } catch (err) {
      console.error('Failed to load songs:', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      movie: '',
      singers: '',
      lyricist: '',
      musicDirector: '',
      cast: '',
      year: new Date().getFullYear(),
      language: 'Telugu',
      posterUrl: '',
      youtubeUrl: '',
      lyrics: '',
      meaning: '',
      tags: [],
      featured: false,
      status: 'published',
    });
    setTagInput('');
    setEditingSongId(null);
  };

  const startEdit = (song: Song) => {
    setEditingSongId(song.id);
    setFormData({
      title: song.title,
      movie: song.movie,
      singers: song.singers,
      lyricist: song.lyricist,
      musicDirector: song.musicDirector,
      cast: song.cast || '',
      year: song.year,
      language: song.language,
      posterUrl: song.posterUrl,
      youtubeUrl: song.youtubeUrl || '',
      lyrics: song.lyrics,
      meaning: song.meaning || '',
      tags: song.tags || [],
      featured: Boolean(song.featured),
      status: song.status,
    });
    setActiveTab('edit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const endpoint = editingSongId ? `/api/songs/${editingSongId}` : '/api/songs';
      const method = editingSongId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save song');

      setMessage({
        type: 'success',
        text: editingSongId ? 'Song updated successfully!' : 'Song published successfully!',
      });

      resetForm();
      setActiveTab('list');
      await loadSongs();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/songs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSongs((prev) => prev.filter((s) => s.id !== id));
        setMessage({ type: 'success', text: `Deleted "${title}"` });
      } else {
        throw new Error('Failed to delete');
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter((t) => t !== tag),
    });
  };

  if (authenticated === null) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Owner Dashboard Active
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Madhurimalu Content Manager
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSyncToCloud}
            disabled={syncing}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition disabled:opacity-50"
            title="Sync all songs to Supabase cloud database"
          >
            <Database className="w-4 h-4" />
            <span>{syncing ? 'Syncing...' : 'Sync to Cloud'}</span>
          </button>

          <button
            onClick={() => {
              resetForm();
              setActiveTab('create');
            }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === 'create'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post New Song</span>
          </button>

          <button
            onClick={() => setActiveTab('list')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === 'list'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            <ListMusic className="w-4 h-4" />
            <span>All Songs ({songs.length})</span>
          </button>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition"
            title="Log Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alerts */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm animate-fade-in ${
            message.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
              : 'bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* CREATE / EDIT TAB */}
      {(activeTab === 'create' || activeTab === 'edit') && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>{editingSongId ? 'Edit Song Lyrics' : 'Post New Song Lyrics & Movie Pic'}</span>
            </h2>
            <button
              onClick={() => {
                resetForm();
                setActiveTab('list');
              }}
              className="text-xs text-slate-500 hover:underline"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Song Title * (e.g. Samajavaragamana)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Song Title"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Movie / Album Name * (e.g. Ala Vaikunthapurramuloo)
                </label>
                <input
                  type="text"
                  required
                  value={formData.movie}
                  onChange={(e) => setFormData({ ...formData, movie: e.target.value })}
                  placeholder="Movie or Album name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Poster & YouTube */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center justify-between">
                  <span>Movie Poster URL *</span>
                  <span className="text-[10px] text-slate-400 lowercase font-normal">(image link or unsplash/cloudinary)</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={formData.posterUrl}
                    onChange={(e) => setFormData({ ...formData, posterUrl: e.target.value })}
                    placeholder="https://... image link"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {formData.posterUrl && (
                    <img
                      src={formData.posterUrl}
                      alt="Preview"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200 dark:border-slate-700 flex-shrink-0"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  YouTube Video / Audio URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Artists & Credits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Singers * (comma separated)
                </label>
                <input
                  type="text"
                  required
                  value={formData.singers}
                  onChange={(e) => setFormData({ ...formData, singers: e.target.value })}
                  placeholder="e.g. Sid Sriram, Shreya Ghoshal"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Lyricist *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lyricist}
                  onChange={(e) => setFormData({ ...formData, lyricist: e.target.value })}
                  placeholder="e.g. Sirivennela Sastry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Music Composer / Director *
                </label>
                <input
                  type="text"
                  required
                  value={formData.musicDirector}
                  onChange={(e) => setFormData({ ...formData, musicDirector: e.target.value })}
                  placeholder="e.g. Thaman S, Anirudh"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Metadata (Actors, Year, Language) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Cast / Actors
                </label>
                <input
                  type="text"
                  value={formData.cast}
                  onChange={(e) => setFormData({ ...formData, cast: e.target.value })}
                  placeholder="e.g. Allu Arjun, Pooja Hegde"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Release Year
                </label>
                <input
                  type="number"
                  required
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) || 2024 })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Telugu">Telugu (తెలుగు)</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Tamil">Tamil (தமிழ்)</option>
                  <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                  <option value="Malayalam">Malayalam (മലയാളം)</option>
                </select>
              </div>
            </div>

            {/* LYRICS TEXT AREA (Telugu / Unicode support) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Full Song Lyrics * (Type or Paste in Telugu or English)
                </label>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                  Use double Enter for verse breaks
                </span>
              </div>
              <textarea
                required
                rows={12}
                value={formData.lyrics}
                onChange={(e) => setFormData({ ...formData, lyrics: e.target.value })}
                placeholder="సామజవరగమనా నిను చూసి ఆగలేనా...
(Type or paste Telugu lyrics or English lyrics here)"
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-serif leading-relaxed focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Song Meaning & Background (SEO Goldmine for Google AdSense) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Song Meaning, Trivia & English Summary (Boosts Google AdSense Approval)
              </label>
              <textarea
                rows={3}
                value={formData.meaning}
                onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
                placeholder="Provide a short English explanation of the song's meaning, poetry, or background..."
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Tags & Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Keywords / Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                    placeholder="e.g. Romantic, Sid Sriram, Melody"
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-xl text-xs font-semibold"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {formData.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs flex items-center gap-1"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-500 ml-1 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Feature on Homepage Carousel
                  </span>
                </label>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status:
                  </span>
                  <label className="flex items-center gap-1.5 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={formData.status === 'published'}
                      onChange={() => setFormData({ ...formData, status: 'published' })}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span>Publish Immediately</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={formData.status === 'draft'}
                      onChange={() => setFormData({ ...formData, status: 'draft' })}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span>Save as Draft</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setActiveTab('list');
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 text-white text-xs font-bold shadow-md hover:from-amber-700 hover:to-orange-600 transition disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? (
                  <span>Saving to Database...</span>
                ) : (
                  <span>{editingSongId ? 'Update Song' : 'Publish Song to Website'}</span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SONGS LIST TAB */}
      {activeTab === 'list' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                All Song Lyrics ({songs.length})
              </h2>
              <p className="text-xs text-slate-500">
                Manage, edit or remove posted songs
              </p>
            </div>

            <button
              onClick={() => {
                resetForm();
                setActiveTab('create');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-semibold shadow hover:bg-amber-700 transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Song</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3.5 px-4">Song / Movie</th>
                  <th className="py-3.5 px-4">Singers & Lyricist</th>
                  <th className="py-3.5 px-4">Views</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {songs.map((song) => (
                  <tr key={song.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                    <td className="py-3.5 px-4 flex items-center gap-3">
                      <img
                        src={song.posterUrl}
                        alt={song.title}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          {song.title}
                        </div>
                        <div className="text-slate-500">
                          {song.movie} ({song.year}) • {song.language}
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-xs">
                        {song.singers}
                      </div>
                      <div className="text-slate-500 text-[11px] truncate max-w-xs">
                        Lyricist: {song.lyricist}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-medium">
                      {song.views.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          song.status === 'published'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {song.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right space-x-2">
                      <a
                        href={`/lyrics/${song.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        title="View Live Page"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => startEdit(song)}
                        className="inline-block p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        title="Edit Song"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(song.id, song.title)}
                        className="inline-block p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        title="Delete Song"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

