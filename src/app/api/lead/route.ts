import { NextRequest, NextResponse } from "next/server";

// Web3Forms Configuration
// Get your free access key from https://web3forms.com/
// It will send form submissions directly to your Gmail
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "";

interface LeadData {
  name: string;
  phone: string;
  email: string;
  userType?: string;
  service?: string;
  city?: string;
  preferredTime?: string;
  message?: string;
  businessType?: string;
  companyName?: string;
  source?: string;
}

async function sendEmailNotification(lead: LeadData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🔔 New Lead: ${lead.name} - ${lead.source || "Website"}`,
      from_name: "CAConnect Leads",
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      user_type: lead.userType || "N/A",
      service_required: lead.service || "N/A",
      city: lead.city || "N/A",
      business_type: lead.businessType || "N/A",
      company_name: lead.companyName || "N/A",
      preferred_time: lead.preferredTime || "N/A",
      message: lead.message || "N/A",
      source: lead.source || "Website",
      received_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    }),
  });

  const result = await response.json();

  if (!result.success) {
    console.error("Web3Forms error:", result);
    throw new Error("Failed to send email notification");
  }

  return result;
}

export async function POST(request: NextRequest) {
  try {
    const lead: LeadData = await request.json();

    // Validate required fields
    if (!lead.name || !lead.phone || !lead.email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    // Send email notification via Web3Forms
    if (WEB3FORMS_ACCESS_KEY) {
      const result = await sendEmailNotification(lead);
      return NextResponse.json(
        { success: true, message: "Lead received successfully", result },
        { status: 200 }
      );
    }

    // Fallback: Log if not configured
    console.log("=== NEW LEAD (Web3Forms not configured) ===");
    console.log(JSON.stringify(lead, null, 2));
    console.log("=============================================");

    return NextResponse.json(
      { success: true, message: "Lead logged (email not configured)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
