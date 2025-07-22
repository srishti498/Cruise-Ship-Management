import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  UtensilsCrossed, 
  BookOpen, 
  Film, 
  Scissors, 
  Dumbbell, 
  PartyPopper,
  User,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const serviceItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Dining", url: "/dining", icon: UtensilsCrossed },
  { title: "Stationery", url: "/stationery", icon: BookOpen },
  { title: "Entertainment", url: "/entertainment", icon: Film },
  { title: "Beauty Salon", url: "/beauty", icon: Scissors },
  { title: "Fitness Center", url: "/fitness", icon: Dumbbell },
  { title: "Party Hall", url: "/party", icon: PartyPopper },
];

const accountItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-elegant" 
      : "hover:bg-secondary/50 text-foreground";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-card border-r border-border">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            {!isCollapsed && (
              <>
                <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OV</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Ocean Voyager</h2>
                  <p className="text-xs text-muted-foreground">Cruise Services</p>
                </div>
              </>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4">
            {!isCollapsed && "Services"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {serviceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4">
            {!isCollapsed && "Account"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}