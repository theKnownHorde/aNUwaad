
<body>
  <div class="container">
    <h1>aNUwaad</h1>
    <p>An AI Chat App Using MERN Stack</p>
    <h2>Demonstration</h2>
    <p><a href="https://github.com/theKnownHorde/aNUwaad/assets/108342131/075a10ce-6e25-40fc-9122-e437d7951070">View Demonstration</a></p>
    <h2>To Use the Project</h2>
    <div class="step">
      <h3>Step 1: Clone the Repository</h3>
      <p>Clone the repository to your local machine using the following command:</p>
      <pre><code>git clone &lt;repository_URL&gt;</code></pre>
      <p>Replace <code>&lt;repository_URL&gt;</code> with the URL of your Git repository.</p>
    </div>
    <div class="step">
      <h3>Step 2: Install Backend Dependencies</h3>
      <p>Navigate to the "Backend" directory:</p>
      <pre><code>cd aNUwaad/backend</code></pre>
      <p>Install the required dependencies using npm:</p>
      <pre><code>npm install</code></pre>
    </div>
    <div class="step">
      <h3>Step 3: Install Frontend Dependencies</h3>
      <p>Navigate to the "Frontend" directory:</p>
      <pre><code>cd aNUwaad/frontend</code></pre>
      <p>Install the required dependencies using npm:</p>
      <pre><code>npm install</code></pre>
    </div>
    <div class="step">
      <h3>Step 4: Configure Environment Variables</h3>
      <p>Create a <code>.env</code> file in the "backend" directory (<code>aNUwaad/backend/.env</code>) to store important keys and configurations. Add the following variables:</p>
      <pre class="env-variable">
        <code>
OPEN_AI_SECRET=&lt;your_openai_secret&gt;
OPENAI_ORGANISATION_ID=&lt;your_openai_organisation_id&gt;
MONGODB_URL=&lt;your_mongodb_url&gt;
JWT_SECRET=&lt;your_jwt_secret&gt;
COOKIE_SECRET=&lt;your_cookie_secret&gt;
PORT=&lt;port_number&gt;
        </code>
      </pre>
      <p>Replace <code>&lt;your_openai_secret&gt;</code>, <code>&lt;your_openai_organisation_id&gt;</code>, <code>&lt;your_mongodb_url&gt;</code>, <code>&lt;your_jwt_secret&gt;</code>, <code>&lt;your_cookie_secret&gt;</code>, and <code>&lt;port_number&gt;</code> with your actual values.</p>
    </div>
  </div>
</body>
</html>
