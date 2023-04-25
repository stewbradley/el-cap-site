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

const ArkestroModal = ({
    showArkestroModal,
    setShowArkestroModal, }: {
      showArkestroModal: boolean;
      setShowArkestroModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showArkestroModal} setShowModal={setShowArkestroModal}>
        <Link href="https://arkestro.com/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-200/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-teal-500">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-6 pt-8 text-center md:px-10">
            <a>
              <Image
                src="/arkestro.png"
                alt="Arkestro Logo"
                className="h-100 w-100"
                width={120}
                height={360}
              />
            </a>
            <p className="text-sm text-left text-black">
            ML powered procurement for world’s largest corporations
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useArkestroModal() {
  const [showArkestroModal, setShowArkestroModal] = useState(false);

  const ArkestroModalCallback = useCallback(() => {
    return (
      <ArkestroModal
        showArkestroModal={showArkestroModal}
        setShowArkestroModal={setShowArkestroModal}
      />
    );
  }, [showArkestroModal, setShowArkestroModal]);

  return useMemo(
    () => ({ setShowArkestroModal, ArkestroModal: ArkestroModalCallback }),
    [setShowArkestroModal, ArkestroModalCallback],
  );
}