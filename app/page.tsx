"use client";

import { useState } from "react";
import Synapse from "@/app/synapse/page";
import SynapseLoading from "@/components/Synapse-Loading";

export default function Home() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <>
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Main Content - Always rendered, visible through the split */}
        <div className="relative w-full">
          <Synapse />
        </div>

        {/* Loading Overlay - Splits to reveal content underneath */}
        {!isLoadingComplete && (
          <div 
            className="fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <SynapseLoading onComplete={handleLoadingComplete} />
          </div>
        )}
      </main>
    </>
  );
}
