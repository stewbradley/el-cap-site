import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";


const portfolioCos = [
    {
        name: 'Arkestro',
        url: 'https://arkestro.com/',
        src: '/images/arkestro.png',
        summary: 'Arkestro is a Predictive Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.', 
    },
    {
        id: 'Clockwork',
        url: 'https://clockwork.xyz/',
        src: '/images/clockwork.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Revive',
        url: 'https://revivemedia.us/',
        src: '/images/revive.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        
        id: 'Generation Esports',
        url: 'https://generationesports.com/',
        src: '/images/generation-esports.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Loop',
        url: 'https://loopsupport.com/',
        src: '/images/loop.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Cabin',
        url: 'https://cabin.city/',
        src: '/images/cabin.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Guru',
        url: 'https://getguru.ai/',
        src: '/images/guru.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        
        id: 'Backdrop',
        url: 'https://backdrop.so/',
        src: '/images/backdrop.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Unstack',
        url: 'https://unstack.com/',
        src: '/images/unstack.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
    {
        id: 'Verb',
        url: 'https://verbdata.com/',
        src: '/images/verb.png',
        summary: 'Clockwork is core web3 infrastructure Procurement Orchestration layer, that uses AI to helps the worlds largerst businesses drive savings in their procurement.',
    },
]
const DemoModal = ({
    showDemoModal,
    setShowDemoModal, }: {
      showDemoModal: boolean;
      setShowDemoModal: Dispatch<SetStateAction<boolean>>;
    }) => {
    return (
      <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
        <div className="w-full overflow-hidden md:max-w-md md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <a href="https://precedent.dev">
              <Image
                src="/logo.png"
                alt="Precedent Logo"
                className="h-100 w-100 rounded-full"
                width={200}
                height={200}
              />
            </a>
            <h3 className="font-display text-2xl font-bold">Name</h3>
            <p className="text-sm text-gray-500">
              Portfolio summary
            </p>
          </div>
        </div>
      </Modal>
    );
  };

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
