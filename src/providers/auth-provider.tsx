"use client";
import { auth } from "@/lib/firebase";
import { User } from "@/types";
import { useEffect, useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}
