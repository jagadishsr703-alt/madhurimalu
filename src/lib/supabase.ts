import { createClient } from '@supabase/supabase-js';

function formatSupabaseUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  let url = rawUrl.trim();
  
  // Auto-correct typo where lowercase 'L' (l) was typed instead of 'i'
  if (url.includes('xjfskxnndljtzebbtkfz')) {
    url = url.replace('xjfskxnndljtzebbtkfz', 'xjfskxnndijtzebbtkfz');
  }

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    if (!url.includes('.supabase.co')) {
      url = `https://${url}.supabase.co`;
    } else {
      url = `https://${url}`;
    }
  }
  return url.replace(/\/$/, '');
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseUrl = formatSupabaseUrl(rawUrl);
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('your-supabase-url')
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    }) 
  : null;
