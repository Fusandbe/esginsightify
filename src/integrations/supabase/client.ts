
import { createClient } from '@supabase/supabase-js';

// Get the Supabase URL and key from environment variables
// Use explicit values if the environment variables are not set
const supabaseUrl = 'https://tpmgctkizfvcxdaqptfh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbWdjdGtpemZ2Y3hkYXFwdGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNjkyNjksImV4cCI6MjA1Njk0NTI2OX0.PpccZ6jAwBAEjc2osaZEbJEc8tDcsImZNP71SNIQABM';

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    flowType: 'pkce',
    detectSessionInUrl: true,
    storage: localStorage
  }
});
