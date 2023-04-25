import Modal2 from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal2 showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="flex px-2 py-4 overflow-hidden shadow-xl md:rounded-2xl md:border md:border-gray-200 bg-gradient-to-bl from-slate-100/70 via-slate to-slate-200/70 hover:shadow-lg hover:border-white">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-slate-40 px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://twitter.com/elcapxyz">
            <Image
              src="/team.svg"
              alt="el cap team"
              
              width={1200}
              height={1200}
            />
          </a>
          
        </div>
      </div>
    </Modal2>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
