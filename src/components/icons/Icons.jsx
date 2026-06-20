const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function Icon({ children, size = 24, className = '' }) {
  return (
    <svg {...iconProps} width={size} height={size} className={className}>
      {children}
    </svg>
  );
}

export function GearIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
  );
}

export function TargetIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  );
}

export function LightningIcon(props) {
  return (
    <Icon {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

export function AwardIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
    </Icon>
  );
}

export function UsersIcon(props) {
  return (
    <Icon {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

export function BriefcaseIcon(props) {
  return (
    <Icon {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </Icon>
  );
}

export function ClockIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </Icon>
  );
}

export function RoboticArmIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 20h16M8 20V8l4-4 4 4v12M12 4v4" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  );
}

export function ClockFastIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2M16 2l2 2M20 6l-2-2" />
    </Icon>
  );
}

export function RulerIcon(props) {
  return (
    <Icon {...props}>
      <path d="M2 12h20M6 8v8M10 10v4M14 9v6M18 8v8" />
    </Icon>
  );
}

export function LaserIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="4" />
    </Icon>
  );
}

export function WelderIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 20l-4-4 8-8 4 4-8 8zM14 6l4-4" />
      <path d="M18 10l2 2" />
    </Icon>
  );
}

export function DrillIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2v8M8 10h8M10 14h4M11 18h2" />
      <path d="M12 10l-2 12h4L12 10z" />
    </Icon>
  );
}

export function PressIcon(props) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="6" y="14" width="12" height="6" rx="1" />
      <path d="M12 10v4" />
    </Icon>
  );
}

export function SheetsIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 8h16M4 12h16M4 16h16" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </Icon>
  );
}

export function AluminiumIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 20L12 4l8 16H4z" />
      <path d="M8 16h8" />
    </Icon>
  );
}

export function MoldIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </Icon>
  );
}

export function LayersIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </Icon>
  );
}

export function DumbbellIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6 9h12v6H6zM3 10v4M21 10v4" />
      <rect x="1" y="8" width="3" height="8" rx="1" />
      <rect x="20" y="8" width="3" height="8" rx="1" />
    </Icon>
  );
}

export function ProfileIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 20V8l8-4 8 4v12" />
      <path d="M4 12h16" />
    </Icon>
  );
}

export function RobotArmIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 20h4M8 20V10l4-4 4 4v10" />
      <circle cx="16" cy="6" r="2" />
    </Icon>
  );
}

export function NutBoltIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2l6 3.5v7L12 16l-6-3.5v-7L12 2z" />
      <circle cx="12" cy="9" r="2" />
    </Icon>
  );
}

export function HeadsetIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 12a9 9 0 1 0 18 0" />
      <path d="M3 12v4a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2zM21 12v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z" />
    </Icon>
  );
}

export function ChevronDownIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6 9l6 6 6-6" />
    </Icon>
  );
}

export function ChevronUpIcon(props) {
  return (
    <Icon {...props}>
      <path d="M18 15l-6-6-6 6" />
    </Icon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Icon>
  );
}

export function StarIcon(props) {
  return (
    <Icon {...props} fill="currentColor" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
  );
}

export function DocumentIcon(props) {
  return (
    <Icon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </Icon>
  );
}

export function GridIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </Icon>
  );
}

export function BookIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </Icon>
  );
}

export function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function WhatsAppIcon(props) {
  return (
    <Icon {...props} fill="currentColor" stroke="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </Icon>
  );
}

export function GearsIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
  );
}

export const iconMap = {
  gear: GearIcon,
  target: TargetIcon,
  shieldCheck: ShieldCheckIcon,
  lightning: LightningIcon,
  award: AwardIcon,
  users: UsersIcon,
  briefcase: BriefcaseIcon,
  clock: ClockIcon,
  roboticArm: RoboticArmIcon,
  clockFast: ClockFastIcon,
  ruler: RulerIcon,
  laser: LaserIcon,
  welder: WelderIcon,
  drill: DrillIcon,
  press: PressIcon,
  sheets: SheetsIcon,
  aluminium: AluminiumIcon,
  mold: MoldIcon,
  layers: LayersIcon,
  dumbbell: DumbbellIcon,
  profile: ProfileIcon,
  robotArm: RobotArmIcon,
  nutBolt: NutBoltIcon,
  headset: HeadsetIcon,
  document: DocumentIcon,
  grid: GridIcon,
  book: BookIcon,
  gears: GearsIcon,
};

export function DynamicIcon({ name, ...props }) {
  const Component = iconMap[name] || GearIcon;
  return <Component {...props} />;
}
