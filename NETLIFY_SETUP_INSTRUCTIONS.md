# Netlify Forms Setup Instructions

This guide will help you configure Netlify Forms to send email notifications to `rasandunperera20@gmail.com` when someone submits the contact form.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://www.netlify.com) if you don't have one)
- Your website deployed on Netlify

## Step 1: Deploy Your Site to Netlify

1. **Push your code to GitHub/GitLab/Bitbucket** (if not already done)
2. **Connect your repository to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click "Deploy site"

**Important:** The `netlify.toml` file has been configured to work with Next.js. Netlify will automatically detect Next.js and use the appropriate adapter. The `@netlify/plugin-nextjs` plugin has been removed to avoid compatibility issues with Netlify Forms.

## Step 2: Verify Netlify Forms Detection

After deployment, Netlify will automatically detect forms with the `data-netlify="true"` attribute during the build process. The form should appear in your Netlify dashboard.

1. **Wait for the build to complete** (this is important - forms are detected during build)
2. Go to your site dashboard on Netlify
3. Navigate to **Forms** in the left sidebar
4. You should see a form named "contact" listed

**Note:** If the form doesn't appear immediately:
- Wait a few minutes and refresh the Forms page
- Check the build logs to ensure the build completed successfully
- Verify that the form HTML includes `data-netlify="true"` and `name="contact"` attributes

## Step 3: Configure Email Notifications

### Option A: Using Netlify's Built-in Email Notifications (Recommended)

1. **Go to Forms Settings:**
   - In your Netlify dashboard, click on **Forms** → **Form notifications**
   - Or go to **Site settings** → **Forms** → **Form notifications**

2. **Add Email Notification:**
   - Click **Add notification**
   - Select **Email notification**
   - Configure the notification:
     - **Name:** Contact Form Submission
     - **Form:** Select "contact" from the dropdown
     - **To:** `rasandunperera20@gmail.com`
     - **From:** (Optional) You can set a custom "from" email
     - **Subject:** (Optional) Customize the email subject, e.g., "New Contact Form Submission from TST Website"
     - **Email template:** You can customize the email template or use the default

3. **Save the notification**

### Option B: Using Google SMTP with Netlify Functions (Advanced)

If you need more control over email sending using Google SMTP, you'll need to create a Netlify Function.

#### Step 3B.1: Create Netlify Function

1. **Create the functions directory:**
   ```bash
   mkdir -p netlify/functions
   ```

2. **Create `netlify/functions/submit-contact.js`:**
   ```javascript
   const nodemailer = require('nodemailer');

   exports.handler = async (event, context) => {
     // Only allow POST requests
     if (event.httpMethod !== 'POST') {
       return {
         statusCode: 405,
         body: JSON.stringify({ message: 'Method Not Allowed' })
      };
     }

     try {
       const formData = JSON.parse(event.body);
       
       // Create transporter using Gmail SMTP
       const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: process.env.GMAIL_USER, // Your Gmail address
           pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password (not regular password)
         }
       });

       // Email content
       const mailOptions = {
         from: process.env.GMAIL_USER,
         to: 'rasandunperera20@gmail.com',
         subject: 'New Contact Form Submission - TST Website',
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
           <p><strong>Email:</strong> ${formData.email}</p>
           <p><strong>Organization:</strong> ${formData.organization || 'N/A'}</p>
           <p><strong>Message:</strong></p>
           <p>${formData.message.replace(/\n/g, '<br>')}</p>
         `
       };

       // Send email
       await transporter.sendMail(mailOptions);

       return {
         statusCode: 200,
         body: JSON.stringify({ message: 'Email sent successfully' })
       };
     } catch (error) {
       console.error('Error sending email:', error);
       return {
         statusCode: 500,
         body: JSON.stringify({ message: 'Error sending email', error: error.message })
       };
     }
   };
   ```

3. **Install nodemailer:**
   ```bash
   npm install nodemailer
   ```

4. **Set up Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to **Security** → **2-Step Verification** (enable if not already)
   - Go to **App passwords** (you may need to search for it)
   - Generate a new app password for "Mail"
   - Copy the 16-character password

5. **Add Environment Variables in Netlify:**
   - Go to **Site settings** → **Environment variables**
   - Add the following:
     - `GMAIL_USER`: Your Gmail address (e.g., `your-email@gmail.com`)
     - `GMAIL_APP_PASSWORD`: The 16-character app password you generated

6. **Update the contact form** to submit to the function instead of Netlify Forms (if using this method)

## Step 4: Test the Form

1. **Visit your deployed site**
2. **Fill out and submit the contact form**
3. **Check your email** (`rasandunperera20@gmail.com`) for the notification
4. **Check Netlify dashboard:**
   - Go to **Forms** → **contact**
   - You should see the submission listed there

## Step 5: Customize Email Template (Optional)

1. **In Netlify dashboard:**
   - Go to **Forms** → **Form notifications**
   - Click on your notification
   - Click **Edit**

2. **Customize the email template:**
   - You can use HTML in the email body
   - Available variables:
     - `{{form_name}}` - Form name
     - `{{all_fields}}` - All form fields
     - `{{first_name}}`, `{{last_name}}`, `{{email}}`, etc. - Individual fields

   Example template:
   ```
   New Contact Form Submission

   Name: {{first_name}} {{last_name}}
   Email: {{email}}
   Organization: {{organization}}
   
   Message:
   {{message}}
   ```

## Troubleshooting

### Plugin "@netlify/plugin-nextjs" failed error

If you encounter this error during build:
- **Solution:** The `netlify.toml` has been updated to remove the explicit plugin reference
- Netlify will automatically detect Next.js and use the appropriate adapter
- The form will work with the auto-detected Next.js adapter
- **No action needed** - this has been fixed in the codebase

### Form submissions not appearing in Netlify

1. **Check form attributes:**
   - Ensure `data-netlify="true"` is present
   - Ensure `name="contact"` matches the form name
   - Ensure hidden input `<input type="hidden" name="form-name" value="contact" />` is present

2. **Check browser console** for JavaScript errors

3. **Verify deployment:**
   - Make sure your latest code is deployed
   - Check the deployed site's HTML source to verify form attributes
   - Ensure the build completed successfully

### Emails not being received

1. **Check spam/junk folder**
2. **Verify email address** in Netlify notification settings
3. **Check Netlify logs:**
   - Go to **Functions** → **Logs** (if using Netlify Functions)
   - Check for any error messages

### Gmail App Password Issues

1. **Ensure 2-Step Verification is enabled** on your Google Account
2. **Generate a new app password** if the old one doesn't work
3. **Verify environment variables** are set correctly in Netlify

## Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Form Notifications](https://docs.netlify.com/forms/notifications/)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)

## Quick Setup Summary (Recommended Method)

1. Deploy site to Netlify
2. Go to **Forms** → **Form notifications** → **Add notification**
3. Select **Email notification**
4. Set **To:** `rasandunperera20@gmail.com`
5. Select form: **contact**
6. Save and test!

---

**Note:** For production use, consider:
- Adding spam protection (reCAPTCHA)
- Setting up form submission limits
- Adding custom email templates
- Setting up webhook notifications for integrations

