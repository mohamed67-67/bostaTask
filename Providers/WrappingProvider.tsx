import React from "react";
import ReduxProvider from "./reduxProvider";
import ToastProvider from "./ToastProvider";
import TanStackProvider from "./tanStackProvider";

export default function WrappingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ToastProvider>
        <TanStackProvider>{children}</TanStackProvider>
      </ToastProvider>
    </ReduxProvider>
  );
}
