"use client";

import Modal from "./ui/Modal";
import ContactForm from "./ui/ContactForm";
import { useEnquiry } from "@/context/EnquiryContext";
import { Dictionary } from "@/types/dictionary";

interface QuickEnquiryModalProps {
  content: Dictionary["home"]["lead"];
  servicesContent: Dictionary["services"];
}

export default function QuickEnquiryModal({ content, servicesContent }: QuickEnquiryModalProps) {
  const { isOpen, closeEnquiry } = useEnquiry();

  // If content is not loaded yet (e.g. initial render if passed as null initially, though we pass from layout)
  if (!content || !servicesContent) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeEnquiry}>
      <div className="w-full">
        <ContactForm content={content} servicesContent={servicesContent} />
      </div>
    </Modal>
  );
}
