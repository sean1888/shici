import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Sparkles,
  Copy,
  Download,
  Check,
  RefreshCw,
  BookOpen,
} from "lucide-react";

const SAMPLE_WORDS = [
  "ambient", "buoyant", "candid", "diligent", "ephemeral", "fervent",
  "gregarious", "harbinger", "iridescent", "juxtapose", "kindle", "luminous",
  "meander", "nebulous", "ornate", "petrichor", "quintessential", "resonate",
  "serendipity", "tranquil", "ubiquitous", "vivid", "whimsical", "yearning",
  "zealous", "alacrity", "benevolent", "cascade", "demure", "eloquent",
];

const FILTERED_COUNT = 142;

export function ExtractorPopup() {
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleExtract = () => {
    setExtracting(true);
    setExtracted(false);
    setTimeout(() => {
      setExtracting(false);
      setExtracted(true);
    }, 1100);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-[380px] rounded-[28px] bg-white/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(255,90,95,0.35)] border border-white overflow-hidden"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-5 pt-4 pb-3 border-b border-rose-50">
        <span className="size-2.5 rounded-full bg-rose-300/80" />
        <span className="size-2.5 rounded-full bg-amber-300/80" />
        <span className="size-2.5 rounded-full bg-emerald-300/80" />
        <div className="ml-3 flex-1 h-6 rounded-full bg-rose-50/80 px-3 flex items-center text-[11px] text-rose-400/80 tracking-wide">
          chrome-extension://生词提取器
        </div>
      </div>

      {/* header */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center gap-2 text-rose-500/80 tracking-[0.18em] text-[10px]">
          <Sparkles className="size-3" /> SHICI · PICK WORDS
        </div>
        <h2 className="mt-1.5 text-[22px] tracking-tight text-stone-900">
          拾起这页的 <span className="text-rose-500">生词</span> ✨
        </h2>
        <p className="mt-1 text-[12.5px] text-stone-500">
          从当前网页智能挑出你还不会的词
        </p>
      </div>

      {/* extract button */}
      <div className="px-6">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleExtract}
          className="relative w-full h-12 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-orange-400 text-white shadow-[0_12px_30px_-8px_rgba(244,63,94,0.6)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.4),transparent_60%)]" />
          <span className="relative inline-flex items-center gap-2 tracking-wide">
            {extracting ? (
              <>
                <RefreshCw className="size-4 animate-spin" />
                拾取中…
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                拾起本页生词
              </>
            )}
          </span>
        </motion.button>
      </div>

      {/* stats */}
      <div className="mt-5 mx-6 grid grid-cols-2 gap-3">
        <StatPill label="新词" value={SAMPLE_WORDS.length} accent="rose" />
        <StatPill label="词袋已有" value={FILTERED_COUNT} accent="amber" />
      </div>

      {/* word chips */}
      <div className="mt-5 mx-6 rounded-2xl bg-gradient-to-b from-rose-50/70 to-orange-50/40 border border-rose-100/60 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] tracking-[0.16em] text-rose-400">
            预览 · TOP 30
          </span>
          <span className="text-[11px] text-stone-400">按字母序</span>
        </div>
        <AnimatePresence mode="wait">
          {extracted && (
            <motion.div
              key="chips"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.018 } },
              }}
              className="flex flex-wrap gap-1.5 max-h-[156px] overflow-hidden"
            >
              {SAMPLE_WORDS.map((w) => (
                <motion.span
                  key={w}
                  variants={{
                    hidden: { opacity: 0, y: 6, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  className="px-2.5 py-1 rounded-full bg-white border border-rose-100 text-[12px] text-stone-700 shadow-[0_2px_6px_-3px_rgba(244,63,94,0.25)] hover:bg-rose-50 transition-colors"
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* actions */}
      <div className="px-6 mt-5 grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleCopy}
          className="h-11 rounded-xl bg-stone-900 text-white inline-flex items-center justify-center gap-2 tracking-wide text-[13px] hover:bg-stone-800 transition-colors"
        >
          {copied ? (
            <>
              <Check className="size-4 text-emerald-400" /> 已复制
            </>
          ) : (
            <>
              <Copy className="size-4" /> 复制并加入词袋
            </>
          )}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="h-11 rounded-xl border border-stone-200 bg-white inline-flex items-center justify-center gap-2 text-stone-700 tracking-wide text-[13px] hover:border-rose-300 hover:text-rose-500 transition-colors"
        >
          <Download className="size-4" /> 下载 TXT
        </motion.button>
      </div>

      {/* footer */}
      <div className="mt-5 px-6 pb-5 flex items-center justify-between">
        <span className="text-[11px] text-stone-400">
          自动入袋 · 下次不再拾取
        </span>
        <button className="text-[11px] text-rose-500 inline-flex items-center gap-1 hover:underline">
          <BookOpen className="size-3" /> 我的词袋
        </button>
      </div>
    </motion.div>
  );
}

function StatPill({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: "rose" | "amber";
}) {
  const styles =
    accent === "rose"
      ? "from-rose-500 to-orange-400 text-white"
      : "from-amber-50 to-rose-50 text-stone-700 border border-amber-100";
  return (
    <div
      className={`rounded-2xl px-4 py-3 bg-gradient-to-br ${styles} flex items-baseline justify-between`}
    >
      <span className="text-[11px] tracking-[0.16em] opacity-80">{label}</span>
      <span className="tabular-nums tracking-tight" style={{ fontSize: 22 }}>
        {value}
      </span>
    </div>
  );
}
