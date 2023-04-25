import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";


const name = 'el cap';
export const siteTitle = 'el cap';

export default function PostLayout({
    meta,
    children,
  }: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
  }) {
    const { data: session, status } = useSession();
    const { SignInModal, setShowSignInModal } = useSignInModal();
    const scrolled = useScroll(50);
    return (
      <>
        <Meta {...meta} />
        <SignInModal />
        <div className="fixed h-screen w-full bg-gradient-to-br from-slate-300 via-slate to-slate-100" />
        <div
          className={`fixed top-0 w-full ${
            scrolled
              ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
              : "bg-white/0"
          } z-30 transition-all`}
        >
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/logo.png"
                alt="el cap logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p>el cap</p>
            </Link>
            <div>
              <AnimatePresence>
                {!session && status !== "loading" ? (
                  <motion.button
                    className=" border border-black bg-slate p-1.5 px-4 text-sm text-black transition-all hover:bg-white hover:text-black"
                    onClick={() => setShowSignInModal(true)}
                    {...FADE_IN_ANIMATION_SETTINGS}
                  >
                    team
                  </motion.button>
                ) : (
                  <UserDropdown />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
    </>
  );
}
