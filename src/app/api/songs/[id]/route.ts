import { NextRequest } from 'next/server';
import { updateSong, deleteSong, getAllSongs } from '@/lib/storage';
import { isAdminAuthenticated } from '@/lib/auth';

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

  return Response.json({ success: true });
}
