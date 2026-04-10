"use client";

import Modal from "./ui/Modal";
import ContactForm from "./ui/ContactForm";
import { useEnquiry } from "@/context/EnquiryContext";

export default function QuickEnquiryModal() {
  const { isOpen, closeEnquiry } = useEnquiry();

  return (
    <Modal isOpen={isOpen} onClose={closeEnquiry}>
      <div className="w-full">
        <ContactForm />
      </div>
    </Modal>
  );
}
