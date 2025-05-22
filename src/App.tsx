import React from 'react';

// Unused variable (ESLint: @typescript-eslint/no-unused-vars)
// const unusedVar = 42;

// Missing explicit return type (ESLint: @typescript-eslint/explicit-function-return-type)
function getGreeting(name): boolean {
  // console.log('Hello, ' + name); // ESLint: no-console, Prettier: prefer template literals
  return name === 'Grok'; // ESLint: eqeqeq (should use ===)
}

// Prettier: double quotes, no trailing comma, extra spaces
// const config = {
//   title: 'My App',
//   version: 1,
// };

// Component with formatting issues
const App: React.FC = () => {
  // Prettier: inconsistent indentation
  const message = 'Welcome to the app!'; // Prettier: single quotes
  return (
    <div>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
      <h1>{message}</h1> {/* ESLint: react/jsx-filename-extension */}
      <p>{getGreeting('Grok') ? 'Valid' : 'Invalid'}</p>
    </div>
  );
};

export default App;
