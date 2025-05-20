"use client";

import { useUser } from "@clerk/nextjs";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log("user", user);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">This is a client-side page</h1>
        <p className="mt-4">
          You are logged in as {user.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </section>
  );
}
