// supabase-config.js
const SUPABASE_URL = "https://yqiezkgjdzdafyuduqvu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxaWV6a2dqZHpkYWZ5dWR1cXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMDEzMjQsImV4cCI6MjEwMDg3NzMyNH0.gzVOkhJPe0Uvu74oHHdt742Eaa8jOVNmK-lfkwjeM1E";

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
