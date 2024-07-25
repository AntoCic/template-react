 - npm create vite@latest nome-repo --template react
 - cd nome-repo
 - npm i
 - npm install -D tailwindcss postcss autoprefixer
 - npx tailwindcss init -p
 - ### tailwind.config.js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 - ### index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

 - npm run dev

 ### Axios
npm i axios

 ### netlify CLI
 - npm install netlify-cli -g  
    - (solo se non é giá installato)    
 - npm install netlify-cli --save-dev
- add dir functions
  - add file function.js
      exports.handler = async function (event, context) {
        return {
          statusCode: 200,
          body: 'Ciao Mamma',
        };
      };
- add file netlify.toml
    [build]
      functions = "functions"
    [[redirects]]
      from = "/api/*"
      to = "/.netlify/functions/:splat"
      status = 200

 - netlify dev
