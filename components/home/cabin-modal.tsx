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

const CabinModal = ({
    showCabinModal,
    setShowCabinModal, }: {
      showCabinModal: boolean;
      setShowCabinModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showCabinModal} setShowModal={setShowCabinModal}>
        <Link href="https://www.cabin.city/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-200/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-green-500 ">
          <div className="flex flex-col items-left text-left justify-center space-y-3 px-6 py-6 pt-8 md:px-10">
            <Image
              src="/cabin.png"
              alt="Precedent Logo"
              className="h-100 w-100"
              width={120}
              height={360}
            />     
            <p className="text-sm text-left text-black">
              Network cities governed by a DAO
            </p>
          </div>          
        </div>
        </Link>
      </Modal>
    );
  };

export function useCabinModal() {
  const [showCabinModal, setShowCabinModal] = useState(false);

  const CabinModalCallback = useCallback(() => {
    return (
      <CabinModal
        showCabinModal={showCabinModal}
        setShowCabinModal={setShowCabinModal}
      />
    );
  }, [showCabinModal, setShowCabinModal]);

  return useMemo(
    () => ({ setShowCabinModal, CabinModal: CabinModalCallback }),
    [setShowCabinModal, CabinModalCallback],
  );
}