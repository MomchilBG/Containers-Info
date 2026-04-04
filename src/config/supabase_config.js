import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qvpgbnzvbwltlshmekwr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cGdibnp2YndsdGxzaG1la3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMDAyODEsImV4cCI6MjA5MDg3NjI4MX0.tY2SviD7i-zkH-RI7wzpDYmriHnqUfWbedfSL3d2lT0';
export const supabase = createClient(supabaseUrl, supabaseKey);
