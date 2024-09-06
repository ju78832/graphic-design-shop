"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function VerifyMail() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);

  async function verifyEmail() {
    try {
      await axios.post("/api/user/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const value = window.location.search.split("=")[1];
    setToken(value);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div>
      {verified && (
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome Here <br /> You are verified
          </motion.h1>

          <div className="mt-8">
            <Link href={"/login"}>
              {" "}
              <button className="shadow-[inset_0_0_0_2px_#616467] text-[#acbed0] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Login
              </button>{" "}
            </Link>
          </div>
        </LampContainer>
      )}
    </div>
  );
}
