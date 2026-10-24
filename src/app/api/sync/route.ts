import { NextRequest } from 'next/server';
import { syncLocalSongsToSupabase } from '@/lib/storage';
import { isAdminAuthenticated } from '@/lib/auth';
import { isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isSupabaseConfigured) {
    return Response.json({
      success: false,
      error: 'Supabase credentials not configured in Vercel environment variables yet.',
    });
  }

  const result = await syncLocalSongsToSupabase();
  if (result.error) {
    return Response.json({ success: false, error: result.error }, { status: 500 });
  }

  return Response.json({ success: true, count: result.count });
}

