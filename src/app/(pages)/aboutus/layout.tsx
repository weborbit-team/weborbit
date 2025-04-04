import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "About Us | WebOrbit - Expert Team & Creative Solutions",
  description:
    "Meet WebOrbit’s experienced team of four—frontend/backend devs (MERN/Next.js), a Unity game dev, and an AI expert—delivering fast, creative digital solutions.",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
