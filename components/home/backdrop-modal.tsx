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


const BackdropModal = ({
    showBackdropModal,
    setShowBackdropModal, }: {
      showBackdropModal: boolean;
      setShowBackdropModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showBackdropModal} setShowModal={setShowBackdropModal}>
        <Link href="https://Backdrop.so/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-200/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-amber-500 ">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-4 pt-8 text-black md:px-10">
              <Image
                src="/backdrop.svg"
                alt="Backdrop Logo"
                className="h-100 w-100"
                width={50}
                height={50}
              />
            <p className="text-left text-xl font-bold text-black">
            Backdrop
            </p>
            <p className="text-sm text-left text-black">
            An open work graph that any developer can use to build apps
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useBackdropModal() {
  const [showBackdropModal, setShowBackdropModal] = useState(false);

  const BackdropModalCallback = useCallback(() => {
    return (
      <BackdropModal
        showBackdropModal={showBackdropModal}
        setShowBackdropModal={setShowBackdropModal}
      />
    );
  }, [showBackdropModal, setShowBackdropModal]);

  return useMemo(
    () => ({ setShowBackdropModal, BackdropModal: BackdropModalCallback }),
    [setShowBackdropModal, BackdropModalCallback],
  );
}