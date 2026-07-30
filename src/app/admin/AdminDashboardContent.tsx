"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  UserCheck,
  CheckCircle2,
  IndianRupee,
  Building2,
  TrendingUp,
  Calendar,
  Bell,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const dashboardStats = [
  {
    title: "Today's Leads",
    value: "47",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "New Leads",
    value: "128",
    change: "+8%",
    trend: "up",
    icon: UserPlus,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Assigned Leads",
    value: "89",
    change: "+15%",
    trend: "up",
    icon: UserCheck,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Closed Deals",
    value: "34",
    change: "+5%",
    trend: "up",
    icon: CheckCircle2,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Commission Earned",
    value: "₹4.2L",
    change: "+22%",
    trend: "up",
    icon: IndianRupee,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Partner CAs",
    value: "2,547",
    change: "+3%",
    trend: "up",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600",
  },
];

const recentLeads = [
  { id: "LD-4521", name: "Rahul Gupta", service: "GST Registration", city: "Mumbai", status: "New", time: "5 min ago" },
  { id: "LD-4520", name: "Priya Sharma", service: "Company Registration", city: "Delhi", status: "Assigned", time: "12 min ago" },
  { id: "LD-4519", name: "Amit Patel", service: "Income Tax Filing", city: "Ahmedabad", status: "In Progress", time: "25 min ago" },
  { id: "LD-4518", name: "Sneha Reddy", service: "Virtual CFO", city: "Hyderabad", status: "Closed", time: "1 hr ago" },
  { id: "LD-4517", name: "Vikash Kumar", service: "Startup Advisory", city: "Bangalore", status: "New", time: "1 hr ago" },
  { id: "LD-4516", name: "Meera Joshi", service: "Audit", city: "Pune", status: "Assigned", time: "2 hrs ago" },
];

const statusColors: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Assigned: "bg-purple-100 text-purple-700",
  "In Progress": "bg-amber-100 text-amber-700",
  Closed: "bg-green-100 text-green-700",
};

export function AdminDashboardContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-premium">
                  <span className="text-xs font-bold text-accent">CA</span>
                </div>
                <span className="text-base font-bold text-primary">CAConnect</span>
              </Link>
              <span className="hidden sm:inline-block rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                Admin
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 relative" aria-label="Notifications">
                <Bell className="h-4 w-4 text-muted" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <Container>
          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
              <p className="text-sm text-muted">Welcome back! Here&apos;s your platform overview.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2">
                <Calendar className="h-4 w-4 text-muted" />
                <span className="text-sm text-text">Last 30 days</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-white p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                      <ArrowUpRight className="h-3 w-3" />
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted mt-1">{stat.title}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Leads Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border bg-white"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-lg font-bold text-primary">Recent Leads</h2>
              <div className="flex items-center gap-2">
                <button className="flex h-8 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium text-muted hover:border-primary hover:text-primary transition-colors">
                  <Filter className="h-3 w-3" />
                  Filter
                </button>
                <button className="flex h-8 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium text-muted hover:border-primary hover:text-primary transition-colors">
                  <Search className="h-3 w-3" />
                  Search
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">Lead ID</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">Name</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">Service</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">City</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">Status</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">Time</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-background/50 transition-colors">
                      <td className="px-5 py-3.5 text-sm font-mono text-accent">{lead.id}</td>
                      <td className="px-5 py-3.5 text-sm font-medium text-primary">{lead.name}</td>
                      <td className="px-5 py-3.5 text-sm text-text">{lead.service}</td>
                      <td className="px-5 py-3.5 text-sm text-muted">{lead.city}</td>
                      <td className="px-5 py-3.5">
                        <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-muted">{lead.time}</td>
                      <td className="px-5 py-3.5">
                        <button className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100" aria-label="More options">
                          <MoreVertical className="h-4 w-4 text-muted" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between p-4 border-t border-border">
              <p className="text-xs text-muted">Showing 6 of 128 leads</p>
              <button className="text-xs font-medium text-accent hover:text-primary transition-colors">
                View All Leads →
              </button>
            </div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
