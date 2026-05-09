import React from "react";
import { Users, Calendar, ShieldCheck, Car } from "lucide-react";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";

const trustItems = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Foco em grupos",
    text: "Transporte para equipes, convidados e executivos que precisam chegar juntos e no horário.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Desde 2011",
    text: "Experiência em transporte executivo em Brasília para diferentes perfis de clientes.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Motoristas profissionais",
    text: "Profissionais preparados para atuar com pontualidade, cordialidade e discrição.",
  },
  {
    icon: <Car className="w-5 h-5" />,
    title: "Frota revisada",
    text: "Vans, minivans e veículos executivos preparados para conforto e segurança.",
  },
];

interface TrustBarProps {
  className?: string;
}

export default function TrustBar({ className = "" }: TrustBarProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 ${className}`}
    >
      {trustItems.map((item, index) => (
        <Card key={index} variant="white" hover padding="md">
          <IconBadge icon={item.icon} />
          <h3 className="mt-4 text-[15px] font-bold text-navy-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {item.text}
          </p>
        </Card>
      ))}
    </div>
  );
}
