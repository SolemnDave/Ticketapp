"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const LoginCard = () => {
  return (
    <Card className="max-w-sm mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-gray-200">
          Login with these credentials
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
            Username
          </label>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight">
            Admin
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
            Password
          </label>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight">
            password
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
