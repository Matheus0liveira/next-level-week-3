import { createTransport } from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';

const transporter = createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,

  },
  tls: {
    rejectUnauthorized: false,
  },
});


export default transporter;
