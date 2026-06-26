export default function Logo({ className = '' }) {
  return (
    <img
      src="/logos/umametals-logo.png"
      alt="UMA Metal Craft"
      className={`logo-image ${className}`.trim()}
    />
  );
}
