import React, { createContext, useContext, useState, useEffect } from "react";
import { ClerkProvider, useUser, useClerk } from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured =
  Boolean(clerkPubKey) &&
  clerkPubKey.startsWith("pk_") &&
  !clerkPubKey.includes("sample_rao_key");

const AuthContext = createContext(null);

function DemoAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("rao_demo_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("sign-in"); // 'sign-in' | 'sign-up'

  useEffect(() => {
    if (user) {
      localStorage.setItem("rao_demo_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("rao_demo_user");
    }
  }, [user]);

  const openSignIn = () => {
    setAuthModalMode("sign-in");
    setAuthModalOpen(true);
  };

  const openSignUp = () => {
    setAuthModalMode("sign-up");
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const loginAsDemo = (role = "student") => {
    const rolesMap = {
      student: {
        id: "demo_usr_01",
        firstName: "Aarav",
        lastName: "Sharma",
        fullName: "Aarav Sharma",
        email: "aarav.sharma@raotech.io",
        role: "Student (Cohort 14)",
        avatarText: "AS",
      },
      recruiter: {
        id: "demo_usr_02",
        firstName: "Elena",
        lastName: "Verma",
        fullName: "Elena Verma",
        email: "elena@techpartner.com",
        role: "Hiring Lead @ Razorpay",
        avatarText: "EV",
      },
      partner: {
        id: "demo_usr_03",
        firstName: "Dr. Rajesh",
        lastName: "Kulkarni",
        fullName: "Dr. Rajesh Kulkarni",
        email: "dean@engineering.edu",
        role: "College Dean / MoU Partner",
        avatarText: "RK",
      },
    };

    const selectedUser = rolesMap[role] || rolesMap.student;
    setUser(selectedUser);
    setAuthModalOpen(false);
  };

  const signOut = () => {
    setUser(null);
  };

  const value = {
    isClerk: false,
    user,
    isSignedIn: Boolean(user),
    openSignIn,
    openSignUp,
    closeAuthModal,
    authModalOpen,
    authModalMode,
    setAuthModalMode,
    loginAsDemo,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function ClerkBridgeProvider({ children }) {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser();
  const { openSignIn: clerkOpenSignIn, openSignUp: clerkOpenSignUp, signOut: clerkSignOut } = useClerk();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("sign-in");

  const openSignIn = () => {
    if (clerkOpenSignIn) {
      clerkOpenSignIn();
    } else {
      setAuthModalMode("sign-in");
      setAuthModalOpen(true);
    }
  };

  const openSignUp = () => {
    if (clerkOpenSignUp) {
      clerkOpenSignUp();
    } else {
      setAuthModalMode("sign-up");
      setAuthModalOpen(true);
    }
  };

  const closeAuthModal = () => setAuthModalOpen(false);

  const user = clerkUser
    ? {
        id: clerkUser.id,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        fullName: clerkUser.fullName || `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
        email: clerkUser.primaryEmailAddress?.emailAddress || "user@clerk.com",
        role: "Verified Member",
        avatarText: (clerkUser.firstName?.[0] || "U").toUpperCase(),
        imageUrl: clerkUser.imageUrl,
      }
    : null;

  const value = {
    isClerk: true,
    isLoaded,
    isSignedIn: Boolean(isSignedIn),
    user,
    openSignIn,
    openSignUp,
    closeAuthModal,
    authModalOpen,
    authModalMode,
    setAuthModalMode,
    loginAsDemo: () => {},
    signOut: clerkSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function AppAuthProvider({ children }) {
  if (isClerkConfigured) {
    return (
      <ClerkProvider publishableKey={clerkPubKey}>
        <ClerkBridgeProvider>{children}</ClerkBridgeProvider>
      </ClerkProvider>
    );
  }
  return <DemoAuthProvider>{children}</DemoAuthProvider>;
}

export function useAppAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAppAuth must be used within an AppAuthProvider");
  }
  return context;
}
