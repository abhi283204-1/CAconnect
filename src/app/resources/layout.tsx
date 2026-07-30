import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
