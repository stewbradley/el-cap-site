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

const LoopModal = ({
    showLoopModal,
    setShowLoopModal, }: {
      showLoopModal: boolean;
      setShowLoopModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showLoopModal} setShowModal={setShowLoopModal}>
        <Link href="https://www.loopsupport.com/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-blue-300 ">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-6 pt-8 text-center md:px-10">
            <Image
              src="/loop.svg"
              alt="Precedent Logo"
              className="h-100 w-100"
              width={100}
              height={90}
            />
            <p className="text-sm text-left text-black">
            AI powered hiring tools for sales teams
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useLoopModal() {
  const [showLoopModal, setShowLoopModal] = useState(false);

  const LoopModalCallback = useCallback(() => {
    return (
      <LoopModal
        showLoopModal={showLoopModal}
        setShowLoopModal={setShowLoopModal}
      />
    );
  }, [showLoopModal, setShowLoopModal]);

  return useMemo(
    () => ({ setShowLoopModal, LoopModal: LoopModalCallback }),
    [setShowLoopModal, LoopModalCallback],
  );
}