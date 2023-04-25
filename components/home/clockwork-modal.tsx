import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";

const ClockworkModal = ({
    showClockworkModal,
    setShowClockworkModal, }: {
      showClockworkModal: boolean;
      setShowClockworkModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showClockworkModal} setShowModal={setShowClockworkModal}>
        <Link href="https://www.clockwork.xyz/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-red-600 ">
          <div className="flex flex-col items-left justify-center text-left text-sm space-y-3 px-6 py-8 pt-8 text-black md:px-10">
            
              <Image
                src="/clockwork.png"
                alt="Precedent Logo"
                className="py-4 h-100 w-100"
                width={120}
                height={360}
              />
            
              Automating tasks and webhooks on the Blockchain
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useClockworkModal() {
  const [showClockworkModal, setShowClockworkModal] = useState(false);

  const ClockworkModalCallback = useCallback(() => {
    return (
      <ClockworkModal
        showClockworkModal={showClockworkModal}
        setShowClockworkModal={setShowClockworkModal}
      />
    );
  }, [showClockworkModal, setShowClockworkModal]);

  return useMemo(
    () => ({ setShowClockworkModal, ClockworkModal: ClockworkModalCallback }),
    [setShowClockworkModal, ClockworkModalCallback],
  );
}