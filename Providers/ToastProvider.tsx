"use client";

import React from "react";
import { Toaster } from "sonner";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Toaster duration={1500} position="top-right" />
      {children}
    </div>
  );
}
