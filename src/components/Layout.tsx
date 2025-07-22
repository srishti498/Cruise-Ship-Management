import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-ocean">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b border-border bg-card/80 backdrop-blur-sm">
            <SidebarTrigger className="ml-4" />
            <div className="flex-1 flex items-center justify-between px-6">
              <h1 className="text-xl font-semibold text-foreground">Ocean Voyager</h1>
              <div className="text-sm text-muted-foreground">
                Welcome aboard! 🚢
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};