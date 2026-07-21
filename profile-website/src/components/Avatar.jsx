import { profile } from '../data.js'

// Signature element: a slowly rotating conic-gradient ring around either the
// profile photo or the "AP" initials fallback.
const SIZES = {
  lg: { box: 'h-40 w-40 sm:h-48 sm:w-48', text: 'text-5xl sm:text-6xl' },
  md: { box: 'h-16 w-16', text: 'text-xl' },
  sm: { box: 'h-11 w-11', text: 'text-sm' },
}

export default function Avatar({ size = 'lg' }) {
  const { box: dimensions, text: textSize } = SIZES[size] ?? SIZES.lg

  return (
    <div className={`relative ${dimensions} shrink-0`}>
      {/* Rotating gradient ring */}
      <div
        className="absolute -inset-[2px] animate-spin-slow rounded-full opacity-90"
        style={{
          background:
            'conic-gradient(from 0deg, #8b5cf6, #6366f1, #22d3ee, #8b5cf6)',
        }}
        aria-hidden="true"
      />
      {/* Inner disc */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full p-[2px]"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--bg-elev)' }}
          >
            <span className={`gradient-text font-display font-bold ${textSize}`}>
              {profile.initials}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
