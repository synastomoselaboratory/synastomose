import type { ReactNode } from "react";

export const metadata = {
  title: "Synastomose",
  description: "Continuity substrate and observatory",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
