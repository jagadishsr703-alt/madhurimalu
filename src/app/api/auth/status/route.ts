import { NextRequest } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const isAuth = await isAdminAuthenticated();
  return Response.json({ authenticated: isAuth });
}
