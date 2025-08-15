import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Check if email already exists in newsletter list
    // 2. Add to newsletter service (e.g., Mailchimp, ConvertKit)
    // 3. Send welcome email

    // For now, we'll just log the data and return success
    console.log("Newsletter subscription:", {
      email,
      name: name || "Anonymous",
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with newsletter service (e.g., Mailchimp, ConvertKit, Resend)
    // TODO: Check for existing subscriptions
    // TODO: Send welcome email

    return NextResponse.json(
      {
        message:
          "Successfully subscribed to newsletter! Welcome to our community.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
