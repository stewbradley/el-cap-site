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

const GenEModal = ({
    showGenEModal,
    setShowGenEModal, }: {
      showGenEModal: boolean;
      setShowGenEModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showGenEModal} setShowModal={setShowGenEModal}>
        <Link href="https://GenerationEsports.com/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-amber-500 ">
          <div className="flex flex-col items-left justify-center space-y-3 py-6 pt-6 text-left text-sm md:px-10">
              <Image
                src="/genE.png"
                alt="Generation Esports Logo"
                className="h-100 w-100"
                width={200}
                height={100}
              />
            <div className="pl-5 text-left text-sm">
            The home for all gamers to compete, create, and learn together
            </div>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useGenEModal() {
  const [showGenEModal, setShowGenEModal] = useState(false);

  const GenEModalCallback = useCallback(() => {
    return (
      <GenEModal
        showGenEModal={showGenEModal}
        setShowGenEModal={setShowGenEModal}
      />
    );
  }, [showGenEModal, setShowGenEModal]);

  return useMemo(
    () => ({ setShowGenEModal, GenEModal: GenEModalCallback }),
    [setShowGenEModal, GenEModalCallback],
  );
}