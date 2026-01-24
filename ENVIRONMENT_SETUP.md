# Environment Variables Setup Guide

## Step 1: Create Environment File

Create a `.env.local` file in your project root directory with the following content:

```bash
# EmailJS Configuration
# Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/

# Your EmailJS Service ID
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_rc12r84

# Your EmailJS Template ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_bjgmhvi

# Your EmailJS Public Key
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=BDxrvXML2lhiWhA-b

# Email address where form submissions will be sent
NEXT_PUBLIC_CONTACT_EMAIL=netagency10@gmail.com

# WhatsApp number for contact (with country code, no + sign)
NEXT_PUBLIC_WHATSAPP_NUMBER=919986639995
```

## Step 2: Update Your Credentials

Replace the values above with your actual EmailJS credentials:

1. **NEXT_PUBLIC_EMAILJS_SERVICE_ID**: Your EmailJS service ID
2. **NEXT_PUBLIC_EMAILJS_TEMPLATE_ID**: Your EmailJS template ID  
3. **NEXT_PUBLIC_EMAILJS_PUBLIC_KEY**: Your EmailJS public key
4. **NEXT_PUBLIC_CONTACT_EMAIL**: The email address where you want to receive form submissions
5. **NEXT_PUBLIC_WHATSAPP_NUMBER**: Your WhatsApp number (with country code, no + sign)

## Step 3: Restart Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
# or
yarn dev
```

## Security Notes

- ✅ The `.env.local` file is automatically ignored by Git (it's in `.gitignore`)
- ✅ These are `NEXT_PUBLIC_` variables, so they're safe to use in client-side code
- ✅ The code includes fallback values, so it will work even without the environment file
- ✅ Never commit your actual credentials to version control

## How It Works

The ContactForm component now reads these values from environment variables:

```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'fallback_value';
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'fallback_value';
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'fallback_value';
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'fallback_value';
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || 'fallback_value';
```

This makes your code more secure and easier to manage across different environments (development, staging, production).
