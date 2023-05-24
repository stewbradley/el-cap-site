import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import { useArkestroModal } from "./arkestro-modal";
import { useClockworkModal } from "@/components/home/clockwork-modal";
import { useBackdropModal } from "./backdrop-modal";
import { useReviveModal } from "./revive-modal";
import { useGuruModal } from "./guru-modal";
import { useGenEModal } from "./genE-modal";
import { useLoopModal } from "./loop-modal";
import { useCabinModal } from "./cabin-modal"; 
import { useMossModal } from "./moss-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const { ArkestroModal, setShowArkestroModal } = useArkestroModal();
  const { ClockworkModal, setShowClockworkModal } = useClockworkModal();
  const { BackdropModal, setShowBackdropModal } = useBackdropModal();
  const { ReviveModal, setShowReviveModal } = useReviveModal();
  const { GuruModal, setShowGuruModal } = useGuruModal();
  const { GenEModal, setShowGenEModal } = useGenEModal();
  const { LoopModal, setShowLoopModal } = useLoopModal();
  const { CabinModal, setShowCabinModal } = useCabinModal();
  const { MossModal, setShowMossModal } = useMossModal();

  const [openPopover, setOpenPopover] = useState(false);
  return (
    <div className="grid grid-cols-3 gap-5 md:grid-cols-3">
      <ArkestroModal />
      <button
        onClick={() => setShowArkestroModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border text-teal-600 hover:text-white border-teal-600 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-teal-600"
      >
        Arkestro
      </button>
      <BackdropModal />
      <button
        onClick={() => setShowBackdropModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border text-orange-500 hover:text-gray-600 border-orange-400 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-orange-300"
      >
        Backdrop
      </button>
      <CabinModal />
      <button
        onClick={() => setShowCabinModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40 items-center justify-center border border-green-500 px-3 py-2 transition-all duration-75 text-green-600 hover:text-gray-700 hover:border-gray-700 focus:outline-none active:bg-gray-100 hover:bg-green-400 "
      >
      Cabin
      </button>
      <ClockworkModal />
      <button
        onClick={() => setShowClockworkModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border text-red-600 hover:text-gray-600 border-red-400 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100  hover:bg-red-200"
      >
        Clockwork
      </button>
      <GenEModal />
      <button
        onClick={() => setShowGenEModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40 items-center justify-center border border-yellow-500 px-3 py-2 transition-all text-yellow-600 hover:text-gray-700 duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-yellow-300"
      >
        GenE
      </button>
      <GuruModal />
      <button
        onClick={() => setShowGuruModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border border-fuchsia-500 px-3 py-2 transition-all duration-75 text-fuchsia-500 hover:text-gray-800 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-fuchsia-300"
      >
        Guru
      </button>
      <LoopModal />
      <button
        onClick={() => setShowLoopModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border border-blue-500 px-3 py-2 transition-all duration-75 text-blue-600 hover:text-gray-600 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-blue-200"
      >
        Loop
      </button>
      
      <MossModal />
      <button
        onClick={() => setShowMossModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40 items-center justify-center border border-slate-800 px-3 py-2 transition-all text-slate-800 hover:text-gray-700 duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-slate-100"
      >
        Moss
      </button>
      <ReviveModal />
      <button
        onClick={() => setShowReviveModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border border-violet-500 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-violet-300 text-violet-600 hover:text-black"
      >
        Revive
      </button>
    </div>
  );
}


 ///<Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
 ///<div className="flex w-40 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
 ///<p className="text-gray-600">Tooltip</p>
 ///</div>
 ///</Tooltip>




