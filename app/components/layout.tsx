import React from "react";

interface PropTypes {
  children: React.ReactNode;
}
export const Layout = ({ children }: PropTypes) => {
  return (
    <div className="h-screen w-full bg-blue-600 font-mono">{children}</div>
  );
};
