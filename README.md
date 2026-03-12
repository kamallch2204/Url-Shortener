# 🔗 URL Shortener

A backend service that converts long URLs into short, shareable links.
Built using **Node.js, Express, and MongoDB**, the service also records visit history for basic analytics.

This project demonstrates core backend concepts such as REST APIs, database modeling with Mongoose, URL redirection, and request analytics.

---

## 🚀 Features

* Generate short URLs from long links
* Redirect users to the original URL
* Track visit history with timestamps
* Retrieve analytics for each short link
* REST API architecture

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**

---

## 📁 Project Structure

```
short-url/
│
├── controllers/   → request handling logic
├── models/        → MongoDB schema definitions
├── routes/        → API route definitions
│
├── connect.js     → database connection
├── index.js       → application entry point
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=
PORT=
BASE_URL=
```

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/Url-Shortener.git
```

Navigate into the project:

```
cd Url-Shortener
```

Install dependencies:

```
npm install
```

---

## ▶️ Run the Server

```
npm start
```

Server runs on:

```
http://localhost:PORT
```

---

## 📡 API Endpoints

### Create Short URL

**POST**

```
/url
```

Body:

```
{
"url": "https://example.com"
}
```

Response:

```
{
"shortUrl": "http://localhost:PORT/abc123"
}
```

---

### Redirect to Original URL

**GET**

```
/:shortId
```

Opening this route redirects to the stored URL.

---

### URL Analytics

**GET**

```
/url/analytics/:shortId
```

Returns the total click count and visit history.

---

## 👨‍💻 Author

Kamal Ch
GitHub: https://github.com/kamallch2204
