import type { ServiceId } from "@/lib/data";
import {
  ChefHat,
  Gamepad2,
  LucideIcon,
  Scissors,
  SmartphoneCharging,
  WalletCards,
} from "lucide-react";

const serviceIconMap: Record<ServiceId, LucideIcon> = {
  barbershop: Scissors,
  gaming: Gamepad2,
  chopbar: ChefHat,
  momo: WalletCards,
  phone: SmartphoneCharging,
};

type ServiceMarkProps = {
  serviceId: ServiceId;
  className?: string;
};

export default function ServiceMark({ serviceId, className = "" }: ServiceMarkProps) {
  const Icon = serviceIconMap[serviceId];

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(16,24,40,0.08)] bg-white text-[var(--accent-strong)] shadow-[0_18px_40px_rgba(16,24,40,0.08)] ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.9} />
    </span>
  );
}
