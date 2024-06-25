import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xecdfhaxuszhwuatebao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlY2RmaGF4dXN6aHd1YXRlYmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDE0NTcsImV4cCI6MjAzNDM3NzQ1N30.G47fge0Lrt9QB8__o-bEMQXBlR5oCBUccZAhWv3XQOs", 
);
