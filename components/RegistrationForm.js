// components/RegistrationForm.js
export default function RegistrationForm({ onRegister }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      const email = event.target.email.value;
      onRegister(username, password, email);
    };
  
    return (
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">Username:</label>
            <input name="username" type="text" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email:</label>
            <input name="email" type="email" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password:</label>
            <input name="password" type="password" required className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Register</button>
          </div>
        </form>
      </div>
    );
  }