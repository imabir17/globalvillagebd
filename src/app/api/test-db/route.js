import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  const { data: teamData, error: teamError } = await supabase.from('team').select('*');
  const { data: aboutData, error: aboutError } = await supabase.from('about_content').select('*');
  
  // Try an insert
  const { data: insertData, error: insertError } = await supabase.from('team').insert([{ name: 'Test', role: 'Test' }]).select();

  return NextResponse.json({
    team: { data: teamData, error: teamError },
    about: { data: aboutData, error: aboutError },
    insertTest: { data: insertData, error: insertError }
  });
}
