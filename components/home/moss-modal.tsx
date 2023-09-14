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

const MossModal = ({
    showMossModal,
    setShowMossModal, }: {
      showMossModal: boolean;
      setShowMossModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showMossModal} setShowModal={setShowMossModal}>
        <Link href="https://mossworkspace.com//">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-white hover:shadow-lg hover:border-amber-500 ">
          <div className="flex flex-col items-left justify-center space-y-3 py-6 pt-6 text-left text-sm md:px-10">
          <Image
              src="/moss.png"
              alt="Precedent Logo"
              className="h-100 w-100"
              width={100}
              height={90}
            />
          <div className="pl-5 text-left text-sm">
            Collaborative workflow tool for creatives
            </div>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useMossModal() {
  const [showMossModal, setShowMossModal] = useState(false);

  const MossModalCallback = useCallback(() => {
    return (
      <MossModal
        showMossModal={showMossModal}
        setShowMossModal={setShowMossModal}
      />
    );
  }, [showMossModal, setShowMossModal]);

  return useMemo(
    () => ({ setShowMossModal, MossModal: MossModalCallback }),
    [setShowMossModal, MossModalCallback],
  );
}