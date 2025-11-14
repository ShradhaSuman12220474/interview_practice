"use client";

import { useAuth } from "@/context/AuthContext";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function UserDropdown() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const userInitial = user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U';

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        className="flex items-center gap-2 px-3 py-2 hover:bg-dark-200/50 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-8 rounded-full bg-primary-200 text-dark-100 flex items-center justify-center font-medium">
          {userInitial}
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-200 rounded-lg shadow-lg py-1 z-50 border border-dark-100/20">
          <div className="px-4 py-2 border-b border-dark-100/10">
            <p className="text-sm font-medium text-light-100">{user.name || 'User'}</p>
            <p className="text-xs text-light-100/70 truncate">{user.email}</p>
          </div>
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 text-sm text-light-100/90 hover:bg-dark-300/50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full text-left flex items-center px-4 py-2 text-sm text-red-400 hover:bg-dark-300/50 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}