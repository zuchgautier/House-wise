import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, propertyType, message } = await request.json();

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "housewisecontactpro@gmail.com",
            subject: `Nouvelle demande de contact - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0A1A33; border-bottom: 2px solid #C6A667; padding-bottom: 10px;">
                        Nouvelle demande de contact - Housewise
                    </h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 150px;">Nom</td>
                            <td style="padding: 10px; background: #fafafa;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email</td>
                            <td style="padding: 10px; background: #fafafa;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Téléphone</td>
                            <td style="padding: 10px; background: #fafafa;">${phone || "Non renseigné"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Type de bien</td>
                            <td style="padding: 10px; background: #fafafa;">${propertyType || "Non renseigné"}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 20px;">
                        <h3 style="color: #0A1A33;">Message</h3>
                        <p style="background: #fafafa; padding: 15px; border-radius: 8px; line-height: 1.6;">
                            ${message || "Aucun message"}
                        </p>
                    </div>
                    
                    <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
                        Email envoyé depuis le formulaire de contact Housewise
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email envoyé avec succès" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Erreur lors de l'envoi de l'email" },
            { status: 500 }
        );
    }
}
