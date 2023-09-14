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

const VerbModal = ({
    showVerbModal,
    setShowVerbModal, }: {
      showVerbModal: boolean;
      setShowVerbModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showVerbModal} setShowModal={setShowVerbModal}>
        <Link href="https://revivemedia.us">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-white hover:shadow-lg hover:border-amber-500 mx-auto my-auto">
          <div className="flex flex-col items-left justify-center space-y-3 py-6 pt-6 text-left text-sm md:px-10">
              <Image
                src="/revive.png"
                alt="Revive Logo"
                className="h-100 w-100"
                width={200}
                height={100}
              />
            <div className="pl-5 text-left text-sm">
            Acquired by Revive Media in 2023
            </div>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useVerbModal() {
  const [showVerbModal, setShowVerbModal] = useState(false);

  const VerbModalCallback = useCallback(() => {
    return (
      <VerbModal
        showVerbModal={showVerbModal}
        setShowVerbModal={setShowVerbModal}
      />
    );
  }, [showVerbModal, setShowVerbModal]);

  return useMemo(
    () => ({ setShowVerbModal, VerbModal: VerbModalCallback }),
    [setShowVerbModal, VerbModalCallback],
  );
}