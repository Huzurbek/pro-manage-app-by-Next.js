import { ReactNode } from "react";
import "../../styles/global.css";
import GlassPane from "@/components/GlassPane";
type Props = {
  children: ReactNode;
};
export default function AuthRootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
