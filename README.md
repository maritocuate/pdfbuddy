# PDFBuddy App

PDF Buddy allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.

![screenshot](/public/screenshot.png?raw=true)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)

## Features

- Create an account.
- PDF file upload.
- Ask questions about the file.

## Requirements

Before you get started, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (or a cloud-based MongoDB service like MongoDB Atlas)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/maritocuate/pdfbuddy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pdfbuddy
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Setup .env files:

   ```bash
   DATABASE_URL="mongodb-url"

   KINDE_CLIENT_ID=123
   KINDE_CLIENT_SECRET=123
   KINDE_ISSUER_URL=https://zxc.kinde.com
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback

   UPLOADTHING_SECRET=123
   UPLOADTHING_APP_ID=123

   PINECONE_API_KEY=123

   OPENAI_API_KEY=123
   ```
