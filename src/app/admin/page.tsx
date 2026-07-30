import { Metadata } from "next";
import { AdminDashboardContent } from "./AdminDashboardContent";

export const metadata: Metadata = {
  title: "Admin Dashboard | CAConnect",
  description: "Admin dashboard for managing leads, CAs, and platform metrics.",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <AdminDashboardContent />;
}
