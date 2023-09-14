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

const FridayModal = ({
    showFridayModal,
    setShowFridayModal, }: {
      showFridayModal: boolean;
      setShowFridayModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showFridayModal} setShowModal={setShowFridayModal}>
         <Link href="https://friday.app/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-white hover:shadow-lg hover:border-amber-500 ">
          <div className="flex flex-col items-left justify-center space-y-3 py-6 pt-6 text-left text-sm md:px-10">
          <Image
              src="/friday.svg"
              alt="Precedent Logo"
              className="h-100 w-100"
              width={100}
              height={90}
            />
            <div className="pl-5 text-left text-sm">
            Coordination and collaboration layer for remote teams
            </div>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useFridayModal() {
  const [showFridayModal, setShowFridayModal] = useState(false);

  const FridayModalCallback = useCallback(() => {
    return (
      <FridayModal
        showFridayModal={showFridayModal}
        setShowFridayModal={setShowFridayModal}
      />
    );
  }, [showFridayModal, setShowFridayModal]);

  return useMemo(
    () => ({ setShowFridayModal, FridayModal: FridayModalCallback }),
    [setShowFridayModal, FridayModalCallback],
  );
}