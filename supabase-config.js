// supabase-config.js
const SUPABASE_URL = "https://fzxpojgusaqvdmdywucs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6eHBvamd1c2FxdmRtZHl3dWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2Njg3NDEsImV4cCI6MjEwMDI0NDc0MX0.3LJAjPYrbn_b2XuqAnDda_bVt2RZ30S8JHHP6iEEDeM";

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
