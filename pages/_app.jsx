import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import "/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import RouteTransitions from "../components/RouteTransitions";
import { SkeletonTheme } from "react-loading-skeleton";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";
import { Toaster } from "sonner";
import Head from "next/head";

function MyApp({ Component, pageProps, session }) {
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (replace with your actual data fetching logic)
        setTimeout(() => {
            setLoading(false); // Set loading state to false when data fetching is complete
        }, 2000);
    }, []);

    return (
        <main className="">
            <NextNProgress
                options={{
                    showSpinner: false,
                }}
                color="#a855f7"
                startPosition={0.1}
                stopDelayMs={100}
                height={3}
                showOnShallow={false}
            />
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.5,
                }}
            >
                <Header />
                <RouteTransitions>
                    <main className="pt-20 px-[15px] xs:px-[25px] mx-auto max-w-4xl">
                        <SessionProvider session={session}>
                            {loading ? (
                                // Display loading spinner while data is loading
                                <div className="flex justify-center items-center h-screen">
                                    <BarLoader color="#a855f7" loading={loading} />
                                </div>
                            ) : (
                                // Render your actual content once data is loaded
                                <>
                                    <SkeletonTheme baseColor="#232329" highlightColor="#2a2a32">
                                        <Script
                                            src="https://araxyso.xyz/theme.js"
                                            strategy="beforeInteractive"
                                        />
                                        <Component {...pageProps} />
                                        <Analytics />
                                        <Toaster richColors theme="dark" closeButton />
                                    </SkeletonTheme>
                                </>
                            )}
                        </SessionProvider>
                        <Footer />
                    </main>
                </RouteTransitions>
            </motion.div>
        </main>
    );
}

export default MyApp;
