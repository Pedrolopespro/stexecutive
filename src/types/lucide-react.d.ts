declare module "lucide-react" {
  import * as React from "react";

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;

  export const ArrowRight: LucideIcon;
  export const AtSign: LucideIcon;
  export const BriefcaseBusiness: LucideIcon;
  export const Building2: LucideIcon;
  export const Bus: LucideIcon;
  export const Calendar: LucideIcon;
  export const Car: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Globe: LucideIcon;
  export const Hotel: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Mic2: LucideIcon;
  export const PartyPopper: LucideIcon;
  export const Phone: LucideIcon;
  export const Plane: LucideIcon;
  export const Quote: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Users: LucideIcon;
  export const X: LucideIcon;
}
