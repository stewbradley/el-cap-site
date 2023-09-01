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

const RhizomeModal = ({
    showRhizomeModal,
    setShowRhizomeModal, }: {
      showRhizomeModal: boolean;
      setShowRhizomeModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showRhizomeModal} setShowModal={setShowRhizomeModal}>
        <Link href="https://www.rhizomedata.com/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-white ">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-6 pt-8 text-center md:px-10">
            <a>
              <Image
                src="/rhizome.png"
                alt="Rhizome Logo"
                className="h-100 w-100"
                width={110}
                height={75}
              />
            </a>
            <p className="text-sm text-left text-black">
            A resiliency SaaS platform for utilities
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useRhizomeModal() {
  const [showRhizomeModal, setShowRhizomeModal] = useState(false);

  const RhizomeModalCallback = useCallback(() => {
    return (
      <RhizomeModal
        showRhizomeModal={showRhizomeModal}
        setShowRhizomeModal={setShowRhizomeModal}
      />
    );
  }, [showRhizomeModal, setShowRhizomeModal]);

  return useMemo(
    () => ({ setShowRhizomeModal, RhizomeModal: RhizomeModalCallback }),
    [setShowRhizomeModal, RhizomeModalCallback],
  );
}