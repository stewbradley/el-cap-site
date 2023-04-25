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

const ReviveModal = ({
    showReviveModal,
    setShowReviveModal, }: {
      showReviveModal: boolean;
      setShowReviveModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showReviveModal} setShowModal={setShowReviveModal}>
        <Link href="https://revivemedia.us/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-violet-400 ">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-6 pt-8 text-center md:px-10">
            <Image
              src="/revive.png"
              alt="Revive Logo"
              className="h-100 w-100"
              width={120}
              height={360}
            />
            <p className="text-sm text-left text-black">
              Ad campaign creation with data tools and customizable intelligent workflows  
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useReviveModal() {
  const [showReviveModal, setShowReviveModal] = useState(false);

  const ReviveModalCallback = useCallback(() => {
    return (
      <ReviveModal
        showReviveModal={showReviveModal}
        setShowReviveModal={setShowReviveModal}
      />
    );
  }, [showReviveModal, setShowReviveModal]);

  return useMemo(
    () => ({ setShowReviveModal, ReviveModal: ReviveModalCallback }),
    [setShowReviveModal, ReviveModalCallback],
  );
}