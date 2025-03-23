const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://agljkubegzmmacqvukiy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbGprdWJlZ3ptbWFjcXZ1a2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MDk0NTAsImV4cCI6MjA1ODI4NTQ1MH0.Kg-1aZpPdHm08qaAfws6HiNvhK1wa9swL61amUvUujg";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
