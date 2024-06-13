import React from "react";
import NavBar from "@/components/Frontend/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
