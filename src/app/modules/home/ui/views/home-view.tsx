"use client";

import { authClient } from "@/lib/auth-client";

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }
  return <div className="flex flex-col p-4 gap-y-4">main</div>;
};
