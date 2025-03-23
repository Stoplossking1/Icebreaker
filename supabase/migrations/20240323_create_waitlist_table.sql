-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company_size TEXT NOT NULL,
  marketing_consent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index for faster queries on email
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the public waitlist form)
CREATE POLICY "Allow inserts for everyone" ON waitlist
  FOR INSERT TO authenticated, anon
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users
CREATE POLICY "Allow reads for authenticated users only" ON waitlist
  FOR SELECT TO authenticated
  USING (true);

