import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "infoplanetspa@gmail.com", // Your Gmail address
    pass: "your-app-specific-password", // Your Gmail app-specific password
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const mailOptions = {
      from: "infoplanetspa@gmail.com",
      to: "infoplanetspa@gmail.com",
      subject: "New Spa Booking Request",
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Selected Services:</strong> ${data.services.join(", ")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

