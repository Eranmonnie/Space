"use client";
import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, SetMounted] = useState(false);

  useEffect(() => {
    SetMounted(true);
  }, []);

  const orgin =
    typeof window != "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mounted) {
    return "";
  }
  return origin;
};
