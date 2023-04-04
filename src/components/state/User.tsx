import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
  phoneNo: number;
};
function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Akash",
      email: "akie@gmail.com",
      phoneNo: 907523232,
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        USER NAME IS {user?.name} and Email is {user?.email}
      </div>
    </div>
  );
}

export default User;
