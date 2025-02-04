import { Navigation } from "@/components/Navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
