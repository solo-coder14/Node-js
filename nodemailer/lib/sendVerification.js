const nodemailer = require('nodemailer');

async function sendVerificationEmail(userEmail, verificationToken) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '@gmail.com', // Replace with your email
            pass: ,    // Use App Password if using Gmail
        },
    });

    const verificationLink = `http://localhost:3000/verify-email?token=${verificationToken}`;

    const mailOptions = {
        from: '"nodemailer" <woafisun@gmail.com>',
        to: userEmail,
        subject: 'Email Address Verification',
        html: `
          <h2>Verify Your Email</h2>
          <p>Click the link below to verify your email address:</p>
          <a href="${verificationLink}">${verificationLink}</a>
          `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to', userEmail);
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
}

module.exports = sendVerificationEmail;
