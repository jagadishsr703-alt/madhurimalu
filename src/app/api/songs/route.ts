import { NextRequest } from 'next/server';
import { getAllSongs, getPublishedSongs, createSong } from '@/lib/storage';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const includeDrafts = searchParams.get('all') === 'true';

  const isAuth = await isAdminAuthenticated();
  // Only authenticated admins can see draft songs
  const songs = includeDrafts && isAuth ? await getAllSongs() : await getPublishedSongs();
  return Response.json({ songs });
}

export async function POST(req: NextRequest) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return Response.json({ error: 'Unauthorized. Admin login required.' }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.title || !body.movie || !body.lyrics) {
      return Response.json({ error: 'Title, Movie, and Lyrics are required.' }, { status: 400 });
    }

    const song = await createSong(body);
    return Response.json({ success: true, song }, { status: 201 });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
