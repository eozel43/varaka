import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ohwoxaxoydrjwonuggxx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9od294YXhveWRyandvbnVnZ3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTI4OTksImV4cCI6MjA3NzU4ODg5OX0.PFc3mEdl05ZoITRBcDe4VSLn-LqwfrZD1xVEJaNWF0M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
