import React from "react";
import UserInterface from "@/components/UserInterface";

const Home: React.FC = () => {
  return (
   <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="m-4">
        <UserInterface backendName="go" />
      </div>
   </main>
  )
}
export default Home