import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "../globals.css";
import { Toaster } from "sonner";
import { AppSidebar } from "./components/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
        <Toaster position="bottom-center" richColors theme="light" />
      </main>
    </SidebarProvider>
  );
}
