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

const GuruModal = ({
    showGuruModal,
    setShowGuruModal, }: {
      showGuruModal: boolean;
      setShowGuruModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showGuruModal} setShowModal={setShowGuruModal}>
        <Link href="https://getguru.ai/">
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-500 md:shadow-xl border border-black bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-white ">
          <div className="flex flex-col items-left justify-center space-y-3 px-6 py-6 pt-8 text-center md:px-10">
            <a>
              <Image
                src="/guru.svg"
                alt="Precedent Logo"
                className="h-100 w-100"
                width={110}
                height={75}
              />
            </a>
            <p className="text-sm text-left text-black">
            AI co-pilot for multimodal foundation models
            </p>
          </div>
        </div>
        </Link>
      </Modal>
    );
  };

export function useGuruModal() {
  const [showGuruModal, setShowGuruModal] = useState(false);

  const GuruModalCallback = useCallback(() => {
    return (
      <GuruModal
        showGuruModal={showGuruModal}
        setShowGuruModal={setShowGuruModal}
      />
    );
  }, [showGuruModal, setShowGuruModal]);

  return useMemo(
    () => ({ setShowGuruModal, GuruModal: GuruModalCallback }),
    [setShowGuruModal, GuruModalCallback],
  );
}