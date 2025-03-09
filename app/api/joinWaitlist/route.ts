import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// Initialize Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from("waitlist")
      .select()
      .eq("email", email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Save email to Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: "This email is already registered" },
          { status: 400 }
        );
      }
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send confirmation email
    await transporter.sendMail({
      from: `"GSoC Finder" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "You're on the Waitlist!",
      html: `<h2>Thank you for joining the waitlist!</h2><p>We'll notify you when we launch.</p>`,
    });

    return NextResponse.json(
      { message: "Successfully joined waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}