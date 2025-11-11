import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);
  const userName = auth?.user?.name || auth?.googleUser?.name;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-11/12 sm:w-96 text-center border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome, <span className="text-blue-600 dark:text-blue-400">{userName}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You are now logged into SmartKrishi.
        </p>

        <button
          onClick={auth?.logout}
          className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
