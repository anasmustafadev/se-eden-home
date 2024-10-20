import React from "react";
import { ReactNode } from "react";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function layout({ children }: { children: ReactNode }) {
  return (
    // <div className="bg-slate-200 w-full h-full relative overflow-x-hidden">
    //   <SidebarProvider>
    //     {/* Fixed Sidebar */}
    //     <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-800 z-20">
    //       <AppSidebar />
    //     </div>

    //     {/* Content area adjusted to respect the sidebar width */}
    //     <div className="ml-[250px] w-[calc(100%-250px)] relative flex flex-row z-10">
    //       <div className="fixed bottom-0 left-0 mb-4 ml-4 z-30 text-black">
    //         <SidebarTrigger />
    //       </div>
    //       <div className="mx-5 mt-5 w-full">{children}</div>
    //     </div>
    //   </SidebarProvider>
    // </div>
    // <div className="bg-slate-200 w-full h-full relative overflow-x-hidden">
    //   <SidebarProvider>
    //     <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-800 z-20">
    //       <AppSidebar />
    //     </div>

    //     <div className="ml-[250px] w-[calc(100%-250px)] relative z-10">
    //       <div className="fixed bottom-0 left-0 mb-4 ml-4 z-50">
    //         <SidebarTrigger />
    //       </div>

    //       {/* Main content */}
    //       <div className="mx-5 mt-5 w-full">{children}</div>
    //     </div>
    //   </SidebarProvider>
    // </div>
    <div className="bg-slate-200 w-full h-full relative overflow-x-hidden">
      <SidebarProvider className="flex items-start justify-around">
        <AppSidebar></AppSidebar>
        <div className="w-full lg:w-[calc(100%-250px)] relative z-10 m-5">
          <SidebarTrigger className="fixed bottom-0 left-0 mb-4 ml-4 z-100 lg:hidden" />
          <div>{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default layout;
