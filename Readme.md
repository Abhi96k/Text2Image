<h1>Text2Image Project</h1>

<h2>Overview</h2>
<p>Text2Image is a Node.js-based application that generates images from text using AI APIs. The project includes user authentication, credit-based image generation, and payment integration using Razorpay and Stripe.</p>

<h2>Features</h2>
<ul>
  <li>User Registration and Login</li>
  <li>Generate images from text using ClipDrop API</li>
  <li>Credit-based usage system</li>
  <li>Transaction history tracking</li>
  <li>Payment integration with Razorpay and Stripe</li>
  <li>MongoDB integration for users, transactions, and image data</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
  <li><strong>AI Integration:</strong> ClipDrop API for text-to-image generation</li>
  <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
  <li><strong>Payments:</strong> Razorpay and Stripe</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js installed</li>
  <li>MongoDB URI (local or cloud, e.g., MongoDB Atlas)</li>
  <li>ClipDrop API key</li>
  <li>Razorpay Key ID and Key Secret</li>
  <li>Stripe Secret Key</li>
</ul>

<h3>Steps</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone &lt;repository-url&gt;
cd Text2Image
    </code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file with the following content:
    <pre><code>
JWT_SECRET=Abhishek
PORT=4000

# MongoDB Setup

MONGODB_URI=

# ClipDrop API

CLIPDROP_API=

# Razorpay Payment Integration

CURRENCY='INR'
RAZORPAY_KEY_ID='------ Razorpay Key Id here ------'
RAZORPAY_KEY_SECRET='------ Razorpay Key Secret here ------'

# Stripe Payment Integration

STRIPE_SECRET_KEY="------ Stripe Secret Key here ------"
</code></pre>

  </li>
  <li>Start the server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h2>API Endpoints</h2>

<h3>User Routes</h3>
<ul>
  <li><code>POST /api/user/register</code> - Register a new user</li>
  <li><code>POST /api/user/login</code> - Login a user</li>
</ul>

<h3>Image Routes</h3>
<ul>
  <li><code>POST /api/image/generate</code> - Generate an image from text (requires auth)</li>
</ul>

<h3>Payment Routes</h3>
<ul>
  <li><code>POST /api/payment/razorpay</code> - Razorpay payment</li>
  <li><code>POST /api/payment/stripe</code> - Stripe payment</li>
</ul>

<h2>Credits</h2>
<p>Developed by Abhishek Nangare - 2024</p>
