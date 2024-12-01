<h1>Text2Image Project</h1>

<h2>Overview</h2>
<p>Text2Image is a Node.js-based application that generates images from text using AI APIs. The project supports user authentication, a credit-based system for usage, and stores data in MongoDB.</p>

<h2>Features</h2>
<ul>
  <li>User Registration and Login</li>
  <li>Generate images from text using AI APIs (e.g., OpenAI DALL·E)</li>
  <li>Credit-based usage system</li>
  <li>Transaction history tracking</li>
  <li>MongoDB integration for users, transactions, and image data</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
  <li><strong>AI Integration:</strong> OpenAI API for text-to-image generation</li>
  <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js installed</li>
  <li>MongoDB URI (local or cloud, e.g., MongoDB Atlas)</li>
  <li>OpenAI API key</li>
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
  <li>Create a <code>.env</code> file:
    <pre><code>
MONGODB_URI=&lt;your-mongodb-uri&gt;
OPENAI_API_KEY=&lt;your-openai-api-key&gt;
    </code></pre>
  </li>
  <li>Start the server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h2>API Endpoints</h2>

<h3>User Routes</h3>
<ul>
  <li><code>POST /api/users/register</code> - Register a new user</li>
  <li><code>POST /api/users/login</code> - Login a user</li>
</ul>

<h3>Image Routes</h3>
<ul>
  <li><code>POST /api/images/generate</code> - Generate an image from text (requires auth)</li>
</ul>

<h3>Transaction Routes</h3>
<ul>
  <li><code>GET /api/transactions</code> - View transaction history</li>
</ul>

<h2>Credits</h2>
<p>Developed by [Your Name] - 2024</p>
