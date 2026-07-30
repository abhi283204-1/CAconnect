import { NextRequest, NextResponse } from "next/server";

// WhatsApp Business API Configuration
// You'll need to set these environment variables:
// WHATSAPP_API_TOKEN - Your WhatsApp Business API access token
// WHATSAPP_PHONE_NUMBER_ID - Your WhatsApp Business phone number ID
const WHATSAPP_API_TOKEN = process.env.WHATSAPP_API_TOKEN || "";
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || "";
const NOTIFY_PHONE = "918800752884"; // WhatsApp number to receive lead alerts

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

async function sendWhatsAppMessage(lead: LeadData) {
  const messageBody = `🔔 *New Lead Received!*

👤 *Name:* ${lead.name}
📞 *Phone:* ${lead.phone}
📧 *Email:* ${lead.email}
${lead.userType ? `🏷️ *Type:* ${lead.userType}` : ""}
${lead.service ? `📋 *Service:* ${lead.service}` : ""}
${lead.city ? `📍 *City:* ${lead.city}` : ""}
${lead.businessType ? `🏢 *Business:* ${lead.businessType}` : ""}
${lead.companyName ? `🏛️ *Company:* ${lead.companyName}` : ""}
${lead.preferredTime ? `🕐 *Preferred Time:* ${lead.preferredTime}` : ""}
${lead.source ? `📌 *Source:* ${lead.source}` : ""}

⏰ *Received:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`;

  // If WhatsApp Business API is configured, use it
  if (WHATSAPP_API_TOKEN && WHATSAPP_PHONE_NUMBER_ID) {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: NOTIFY_PHONE,
          type: "text",
          text: { body: messageBody },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("WhatsApp API error:", error);
      throw new Error("Failed to send WhatsApp message");
    }

    return await response.json();
  }

  // Fallback: Log the lead if WhatsApp API is not configured
  console.log("=== NEW LEAD (WhatsApp API not configured) ===");
  console.log(messageBody);
  console.log("================================================");

  return { status: "logged", message: "WhatsApp API not configured, lead logged to console" };
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

    // Send WhatsApp notification
    const result = await sendWhatsAppMessage(lead);

    return NextResponse.json(
      { success: true, message: "Lead received successfully", result },
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
