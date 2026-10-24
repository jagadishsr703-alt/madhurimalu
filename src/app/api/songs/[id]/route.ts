import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { updateSong, deleteSong, getAllSongs } from '@/lib/storage';
import { isAdminAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const songs = await getAllSongs();
  const song = songs.find((s) => s.id === id || s.slug === id);

  if (!song) {
    return Response.json({ error: 'Song not found' }, { status: 404 });
  }

  return Response.json({ song });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await updateSong(id, body);
    if (!updated) {
      return Response.json({ error: 'Song not found' }, { status: 404 });
    }

    // Invalidate caches so the updated song reflects instantly
    try {
      revalidatePath('/');
      revalidatePath(`/lyrics/${updated.slug}`);
      revalidatePath('/admin');
      revalidatePath('/sitemap.xml');
    } catch (e) {
      // Ignore in dev
    }

    return Response.json({ success: true, song: updated });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteSong(id);
  if (!deleted) {
    return Response.json({ error: 'Song not found' }, { status: 404 });
  }

  try {
    revalidatePath('/');
    revalidatePath('/admin');
  } catch (e) {
    // Ignore in dev
  }

  return Response.json({ success: true });
}
