"use client";

import { motion } from "framer-motion";

const ORBIT_NODES = [0, 60, 120, 180, 240, 300].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  const r = 90;
  const cx = Number((140 + r * Math.cos(rad)).toFixed(2));
  const cy = Number((96 + r * Math.sin(rad) * 0.55).toFixed(2));
  return { angle, cx, cy };
});
const BINARY_BITS = ["01", "10", "11", "00", "10", "01"];

export default function RobotMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="relative mx-auto w-full max-w-[300px] select-none sm:max-w-[360px]"
      aria-hidden="true"
    >
      {/* floating binary digits drifting upward around the bot */}
      {BINARY_BITS.map((bit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: -60 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute font-mono text-[10px] text-accent/70"
          style={{
            left: `${10 + ((i * 17) % 80)}%`,
            top: `${20 + ((i * 23) % 50)}%`,
          }}
        >
          {bit}
        </motion.span>
      ))}

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* ambient glow puddle under the robot */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-6 bottom-2 h-10 rounded-full bg-accent/25 blur-2xl"
        />

        {/* orbiting radar ring of data nodes around the head */}
       <motion.svg
          viewBox="0 0 280 340"
          className="pointer-events-none absolute inset-0 w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 96px" }}
        >
          {ORBIT_NODES.map(({ angle, cx, cy }) => (
            <circle
              key={angle}
              cx={cx}
              cy={cy}
              r="2.2"
              fill="#39ff8f"
              opacity="0.5"
            />
          ))}
          <ellipse
            cx="140"
            cy="96"
            rx="90"
            ry="50"
            fill="none"
            stroke="#39ff8f"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </motion.svg>
        <svg
          viewBox="0 0 280 340"
          className="relative w-full drop-shadow-[0_0_28px_rgba(57,255,143,0.25)]"
        >
          <defs>
            <linearGradient id="bodyFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16201c" />
              <stop offset="100%" stopColor="#0c1411" />
            </linearGradient>
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a8ffce" />
              <stop offset="55%" stopColor="#39ff8f" />
              <stop offset="100%" stopColor="#39ff8f" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="visorClip">
              <rect x="92" y="68" width="96" height="48" rx="14" />
            </clipPath>
          </defs>

          {/* antenna */}
          <motion.g
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "140px 46px" }}
          >
            <line x1="140" y1="18" x2="140" y2="44" stroke="#1f8f56" strokeWidth="2.5" />
            <motion.circle
              cx="140"
              cy="14"
              r="6"
              fill="#39ff8f"
              filter="url(#softGlow)"
              animate={{ opacity: [0.5, 1, 0.5], r: [5, 7, 5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* head — subtle scanning tilt, like it's looking around */}
          <motion.g
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "140px 96px" }}
          >
            <rect x="75" y="46" width="130" height="100" rx="22" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />
            <rect x="75" y="46" width="130" height="100" rx="22" fill="none" stroke="#39ff8f" strokeOpacity="0.15" strokeWidth="6" />

            {/* visor */}
            <rect x="92" y="68" width="96" height="48" rx="14" fill="#06100c" stroke="#1f8f56" strokeWidth="1" />

            {/* sweeping radar scanline inside the visor */}
            <g clipPath="url(#visorClip)">
              <motion.rect
                x="92"
                y="68"
                width="96"
                height="6"
                fill="#39ff8f"
                opacity="0.35"
                animate={{ y: [68, 110, 68] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>

            {/* eyes */}
            <motion.g
              animate={{ opacity: [1, 1, 0.15, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.92, 0.95, 1] }}
            >
              <circle cx="118" cy="92" r="11" fill="url(#eyeGlow)" />
              <circle cx="162" cy="92" r="11" fill="url(#eyeGlow)" />
              <circle cx="118" cy="92" r="4" fill="#eafff3" />
              <circle cx="162" cy="92" r="4" fill="#eafff3" />
            </motion.g>

            {/* ear nodes */}
            <rect x="62" y="80" width="13" height="28" rx="5" fill="#101a16" stroke="#1f8f56" strokeWidth="1" />
            <rect x="205" y="80" width="13" height="28" rx="5" fill="#101a16" stroke="#1f8f56" strokeWidth="1" />
          </motion.g>

          {/* neck */}
          <rect x="124" y="146" width="32" height="16" fill="#0c1411" stroke="#1f8f56" strokeWidth="1" />

          {/* torso */}
          <rect x="58" y="162" width="164" height="120" rx="20" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />

          {/* chest panel */}
          <rect x="86" y="184" width="108" height="62" rx="10" fill="#06100c" stroke="#1f8f56" strokeWidth="1" />

          {/* chest core - pulses like a heartbeat / status light */}
          <motion.circle
            cx="140"
            cy="215"
            r="14"
            fill="url(#eyeGlow)"
            animate={{ scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="140" cy="215" r="5" fill="#eafff3" />

          {/* chest readout bars */}
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={i}
              x={104 + i * 26}
              y={258}
              width="14"
              height="10"
              rx="2"
              fill="#39ff8f"
              animate={{ opacity: [0.25, 1, 0.25], scaleY: [0.6, 1, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              style={{ transformOrigin: `${104 + i * 26 + 7}px 263px` }}
            />
          ))}

          {/* left arm — subtle wave */}
          <motion.g
            animate={{ rotate: [0, -8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "44px 178px" }}
          >
            <rect x="34" y="178" width="20" height="64" rx="9" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />
            <circle cx="44" cy="248" r="11" fill="#101a16" stroke="#39ff8f" strokeWidth="1.5" />
          </motion.g>

          {/* right arm — subtle counter-wave */}
          <motion.g
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            style={{ transformOrigin: "236px 178px" }}
          >
            <rect x="226" y="178" width="20" height="64" rx="9" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />
            <circle cx="236" cy="248" r="11" fill="#101a16" stroke="#39ff8f" strokeWidth="1.5" />
          </motion.g>

          {/* legs */}
          <rect x="92" y="282" width="26" height="44" rx="8" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />
          <rect x="162" y="282" width="26" height="44" rx="8" fill="url(#bodyFill)" stroke="#1f8f56" strokeWidth="1.5" />
          <rect x="86" y="322" width="38" height="12" rx="5" fill="#101a16" stroke="#1f8f56" strokeWidth="1" />
          <rect x="156" y="322" width="38" height="12" rx="5" fill="#101a16" stroke="#1f8f56" strokeWidth="1" />

          {/* circuit accents with traveling pulse */}
          <path d="M58 200 H40 V230" fill="none" stroke="#1f8f56" strokeWidth="1" opacity="0.5" />
          <path d="M222 200 H240 V230" fill="none" stroke="#1f8f56" strokeWidth="1" opacity="0.5" />
          <motion.circle
            r="2.5"
            fill="#39ff8f"
            animate={{
              cx: [58, 40, 40],
              cy: [200, 200, 230],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="2.5"
            fill="#39ff8f"
            animate={{
              cx: [222, 240, 240],
              cy: [200, 200, 230],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </svg>
      </motion.div>

      <p className="mt-4 text-center font-mono text-[11px] text-ink-faint">
        status: <span className="text-accent">online</span> · awaiting input
        <span className="animate-blink text-accent">_</span>
      </p>
    </motion.div>
  );
}