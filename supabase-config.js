// supabase-config.js
const SUPABASE_URL = "https://bkyyenirpeznjkmmcutf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreXllbmlycGV6bmprbW1jdXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMTE0NjcsImV4cCI6MjEwMDU4NzQ2N30.eO3D4_s3FgHM8Be1FSyhIGNGK7WPWJKpRNPp99kNyTc";

try {
    const configOptions = {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    };
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else if (typeof window.supabaseJS !== 'undefined') {
        window.supabase = window.supabaseJS.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else {
        console.error("Supabase CDN library script wrapper was missing at execution runtime.");
    }
} catch (e) {
    console.error("Failed to initialize database client connection:", e);
}
