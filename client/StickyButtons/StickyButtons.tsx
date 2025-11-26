import { Phone, MessageCircle } from "lucide-react";

export default function StickyButtons() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-[9999]">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919631681403"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition-all"
      >
        <MessageCircle size={26} />
      </a>

      {/* Call */}
      <a
        href="tel:919631681403"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all"
      >
        <Phone size={26} />
      </a>
    </div>
  );
}
