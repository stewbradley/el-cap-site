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

const UnstackModal = ({
    showUnstackModal,
    setShowUnstackModal, }: {
      showUnstackModal: boolean;
      setShowUnstackModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showUnstackModal} setShowModal={setShowUnstackModal}>
        <Link href="https://www.elasticpath.com/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-white hover:shadow-lg hover:border-amber-500 ">
          <div className="flex flex-col items-left justify-center space-y-3 py-6 pt-6 text-left text-sm md:px-10">
              <Image
                src="/unstack.png"
                alt="Unstack Logo"
                className="h-100 w-100"
                width={200}
                height={100}
              />
            <div className="pl-5 text-left text-sm">
            Acquired by Elastic Path in 2023
            </div>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useUnstackModal() {
  const [showUnstackModal, setShowUnstackModal] = useState(false);

  const UnstackModalCallback = useCallback(() => {
    return (
      <UnstackModal
        showUnstackModal={showUnstackModal}
        setShowUnstackModal={setShowUnstackModal}
      />
    );
  }, [showUnstackModal, setShowUnstackModal]);

  return useMemo(
    () => ({ setShowUnstackModal, UnstackModal: UnstackModalCallback }),
    [setShowUnstackModal, UnstackModalCallback],
  );
}