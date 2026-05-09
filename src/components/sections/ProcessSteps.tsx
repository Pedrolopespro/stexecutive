import React from "react";

const steps = [
  {
    number: "01",
    title: "Envie sua demanda",
    text: "Informe data, horário, origem, destino, quantidade de passageiros e tipo de serviço.",
  },
  {
    number: "02",
    title: "Receba a melhor opção",
    text: "A equipe indica o veículo mais adequado e monta uma proposta conforme sua necessidade.",
  },
  {
    number: "03",
    title: "Confirme o serviço",
    text: "Após a confirmação, a operação é organizada com motorista profissional e horário combinado.",
  },
  {
    number: "04",
    title: "Transporte realizado",
    text: "No dia do atendimento, a equipe executa o deslocamento com pontualidade, conforto e segurança.",
  },
];

interface ProcessStepsProps {
  className?: string;
}

export default function ProcessSteps({ className = "" }: ProcessStepsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Connector line on desktop */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gray-200 -translate-x-4 z-0" />
          )}

          <div className="relative z-10">
            <span className="text-[40px] sm:text-[48px] font-extrabold text-navy-950/8 leading-none select-none">
              {step.number}
            </span>
            <h3 className="mt-2 text-base font-bold text-navy-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
