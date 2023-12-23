"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
