import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, problem } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "surabhi.jain1810@gmail.com",
      subject: "My Website Contact Form",
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Problem Statement:</strong></p>

        <p>${problem}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}