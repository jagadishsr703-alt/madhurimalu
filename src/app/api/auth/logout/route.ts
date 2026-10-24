import { NextRequest } from 'next/server';
import { removeAdminSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  await removeAdminSession();
  return Response.json({ success: true, message: 'Logged out successfully' });
}

