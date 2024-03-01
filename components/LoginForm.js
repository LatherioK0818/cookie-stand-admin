// components/LoginForm.js
export default function LoginForm({ onLogin }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      onLogin(username, password);
    };
  
    return (
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">Username:</label>
            <input name="username" type="text" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password:</label>
            <input name="password" type="password" required className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Log In</button>
          </div>
        </form>
      </div>
    );
  }
  