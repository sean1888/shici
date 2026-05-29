import { motion } from "motion/react";
import { Library, Plus, Upload, Trash2, X, Flame, ArrowLeft } from "lucide-react";

const RECENT = [
  "ambient", "buoyant", "candid", "diligent", "ephemeral",
  "fervent", "gregarious", "harbinger", "iridescent", "juxtapose",
  "kindle", "luminous", "nebulous", "ornate", "petrichor",
];

export function VocabVault() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="w-full max-w-[420px] rounded-[28px] bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] border border-stone-100 overflow-hidden"
    >
      <div className="relative px-6 pt-6 pb-5 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <button className="absolute top-5 right-5 inline-flex items-center gap-1 text-[11.5px] text-rose-500/80 hover:text-rose-600 transition-colors">
          <ArrowLeft className="size-3" /> 返回拾起
        </button>
        <div className="flex items-center gap-2 text-rose-500/80 tracking-[0.18em] text-[10px]">
          <Library className="size-3" /> MY WORD POUCH · 我的词袋
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="tabular-nums tracking-tight text-stone-900" style={{ fontSize: 36 }}>
              1,284
            </div>
            <div className="text-[12px] text-stone-500 mt-0.5">已拾起词汇</div>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-white px-3 py-2 inline-flex items-center gap-1.5 text-[12px] text-rose-500">
            <Flame className="size-3.5" /> 连续 28 天
          </div>
        </div>

        {/* progress */}
        <div className="mt-4">
          <div className="h-2 rounded-full bg-white/60 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
              className="h-full bg-gradient-to-r from-rose-500 to-orange-400"
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] text-stone-500">
            <span>本周新增 +84</span>
            <span>目标 1,800 词</span>
          </div>
        </div>
      </div>

      {/* add input */}
      <div className="px-6 py-4 flex items-center gap-2 border-b border-stone-100">
        <div className="flex-1 h-10 rounded-xl bg-stone-50 border border-stone-100 px-3 flex items-center text-[13px] text-stone-400">
          输入单词，回车快速入袋…
        </div>
        <button className="size-10 rounded-xl bg-stone-900 text-white inline-flex items-center justify-center hover:bg-rose-500 transition-colors">
          <Plus className="size-4" />
        </button>
        <button className="size-10 rounded-xl bg-white border border-stone-200 text-stone-600 inline-flex items-center justify-center hover:border-rose-300 hover:text-rose-500 transition-colors">
          <Upload className="size-4" />
        </button>
      </div>

      {/* word list */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] tracking-[0.16em] text-stone-400">
            最近拾起
          </span>
          <button className="text-[11px] text-stone-400 inline-flex items-center gap-1 hover:text-rose-500">
            <Trash2 className="size-3" /> 清空
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {RECENT.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.02 }}
              className="group inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full bg-stone-50 border border-stone-100 text-[12px] text-stone-700 hover:bg-rose-50 hover:border-rose-200 transition-colors"
            >
              {w}
              <button className="size-4 rounded-full inline-flex items-center justify-center text-stone-300 hover:bg-rose-500 hover:text-white transition-colors">
                <X className="size-3" />
              </button>
            </motion.span>
          ))}
        </div>
      </div>

      {/* backup hint */}
      <div className="mx-6 mb-5 rounded-2xl bg-amber-50/70 border border-amber-100 px-4 py-3 text-[12px] text-amber-800/90 flex items-start gap-2">
        <span className="mt-0.5">💡</span>
        <span>
          已超 100 词，建议导出备份 ——
          <span className="underline underline-offset-2 ml-1">立即导出</span>
        </span>
      </div>
    </motion.div>
  );
}
