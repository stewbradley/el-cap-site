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
import { useRhizomeModal } from "./rhizome-modal";
import { useUnstackModal } from "./unstack-modal";
import { useFridayModal } from "./friday-modal";
import { useMossModal } from "./moss-modal";
import { useVerbModal } from "./verb-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const { VerbModal, setShowVerbModal } = useVerbModal();
  const { FridayModal, setShowFridayModal } = useFridayModal();
  const { MossModal, setShowMossModal } = useMossModal();
  const { UnstackModal, setShowUnstackModal } = useUnstackModal();
  const { ArkestroModal, setShowArkestroModal } = useArkestroModal();
  const { ClockworkModal, setShowClockworkModal } = useClockworkModal();
  const { BackdropModal, setShowBackdropModal } = useBackdropModal();
  const { ReviveModal, setShowReviveModal } = useReviveModal();
  const { GuruModal, setShowGuruModal } = useGuruModal();
  const { GenEModal, setShowGenEModal } = useGenEModal();
  const { LoopModal, setShowLoopModal } = useLoopModal();
  const { CabinModal, setShowCabinModal } = useCabinModal();
  const { RhizomeModal, setShowRhizomeModal } = useRhizomeModal();

  const [openAcquiredPopover, setOpenAcquiredPopover] = useState(false);
  const [openShutdownPopover, setOpenShutdownPopover] = useState(false);
  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-3">
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
      <ReviveModal />
      <button
        onClick={() => setShowReviveModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40  items-center justify-center border border-violet-500 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-violet-300 text-violet-600 hover:text-black"
      >
        Revive
      </button>
      <RhizomeModal />
      <button
        onClick={() => setShowRhizomeModal(true)}
        className="hover:shadow-md flex md:text-lg md:w-40 items-center justify-center border border-slate-800 px-3 py-2 transition-all text-slate-800 hover:text-gray-700 duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100 hover:bg-pink-300"
      >
        Rhizome
      </button>
      
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
            <button 
              onClick={() => setShowUnstackModal(true)}
              className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Unstack
            </button>
            
            <button 
              onClick={() => setShowVerbModal(true)}
              className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Verb
            </button>
          </div>
        }
        openPopover={openAcquiredPopover}
        setOpenPopover={setOpenAcquiredPopover}
      >
        <button
          onClick={() => setOpenAcquiredPopover(!openAcquiredPopover)}
          className="hover:shadow-md flex md:text-sm md:w-40 items-center justify-center border border-green-800 px-3 py-2 transition-all text-green-800 hover:text-gray-700 duration-75 hover:border-gray-800 focus:outline-none bg-green-300 hover:bg-grey-100"
        >
          <p className="text-gray-600">Acquired</p>
          <ChevronDown
            className={`h-4 w-4 text-gray-600 transition-all ${openAcquiredPopover ? "rotate-180" : ""
              }`}
          />
        </button>
      </Popover>
      <UnstackModal />
      <VerbModal />
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
            <button 
              onClick={() => setShowFridayModal(true)}
              className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Friday
            </button>
            <button 
              onClick={() => setShowMossModal(true)}
              className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              Moss
            </button>
          </div>
        }
        openPopover={openShutdownPopover}
        setOpenPopover={setOpenShutdownPopover}
      >
        <button
          onClick={() => setOpenShutdownPopover(!openShutdownPopover)}
          className="hover:shadow-md flex md:text-sm md:w-40 items-center justify-center border border-red-500 px-3 py-2 transition-all text-red-800 hover:text-slate-700 duration-75 hover:border-gray-800 focus:outline-none bg-red-100 hover:bg-red-300"
        >
          <p className="text-red-600">Shutdown</p>
          <ChevronDown
            className={`h-4 w-4 text-red-600 transition-all ${openShutdownPopover ? "rotate-180" : ""
              }`}
          />
        </button>
      </Popover>
      <MossModal />
      <FridayModal />
    </div>
  );
}


 ///<Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
 ///<div className="flex w-40 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
 ///<p className="text-gray-600">Tooltip</p>
 ///</div>
 ///</Tooltip>




