-- Add region and language columns to waitlist table
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS region TEXT,
ADD COLUMN IF NOT EXISTS language TEXT;

-- Create index for faster queries on region and language
CREATE INDEX IF NOT EXISTS waitlist_region_idx ON waitlist(region);
CREATE INDEX IF NOT EXISTS waitlist_language_idx ON waitlist(language);

