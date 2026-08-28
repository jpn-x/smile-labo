export default function SmileMark({ size = 48, className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`neon-smile ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="43" fill="none" stroke="var(--color-yellow-neon)" strokeWidth="6" />
      <circle cx="33" cy="41" r="6" fill="var(--color-yellow-neon)" />
      <circle cx="67" cy="41" r="6" fill="var(--color-yellow-neon)" />
      <path
        d="M27 57 Q50 82 73 57"
        fill="none"
        stroke="var(--color-yellow-neon)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
