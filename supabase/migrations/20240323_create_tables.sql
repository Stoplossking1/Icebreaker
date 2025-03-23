-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  agent_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT CHECK (status IN ('hot', 'warm', 'cold')),
  summary TEXT
);

-- Create messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  "from" TEXT CHECK ("from" IN ('lead', 'ai')),
  body TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index for faster queries on lead_id
CREATE INDEX messages_lead_id_idx ON messages(lead_id);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you may want to customize this)
CREATE POLICY "Allow all operations for authenticated users" ON leads
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON messages
  FOR ALL TO authenticated USING (true);

