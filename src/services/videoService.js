import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://kfomcaozocwkakqauzzu.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmb21jYW96b2N3a2FrcWF1enp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTA4MzAsImV4cCI6MTk4Mzc4NjgzMH0.OHogK2_d2p6x7rbvMeGyfJRkoV9aDGZIExmygiy17dQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}