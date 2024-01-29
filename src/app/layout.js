import { TunnelToolbar } from "@tunnel/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {(process.env.NODE_ENV !== "developement" && process.env.RAILWAY_GIT_BRANCH !== 'main') && (
          <TunnelToolbar 
            projectId={process.env.TUNNEL_PROJECT_ID}
            branch={process.env.RAILWAY_GIT_BRANCH}
          />
        )}
      </body>
    </html>
  );
}
