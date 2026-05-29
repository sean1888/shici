import { motion } from "motion/react";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

export function ShareCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="w-[260px] rounded-[24px] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] overflow-hidden border border-white"
    >
      <div className="relative h-[300px] bg-gradient-to-br from-rose-400 via-orange-300 to-amber-200 p-5 flex flex-col justify-between text-white overflow-hidden">
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-12 -left-8 size-36 rounded-full bg-rose-300/40 blur-2xl" />
        <div className="relative">
          <div className="text-[10px] tracking-[0.2em] opacity-90">DAY 28 · 今日打卡</div>
          <div className="mt-1 tracking-tight" style={{ fontSize: 26, lineHeight: 1.2 }}>
            今天又拾到<br />
            <span className="bg-white text-rose-500 px-1.5 rounded-md">30 个词</span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-wrap gap-1">
            {["serendipity", "luminous", "ephemeral", "petrichor"].map((w) => (
              <span
                key={w}
                className="px-2 py-0.5 rounded-full bg-white/30 backdrop-blur text-[11px] tracking-wide"
              >
                {w}
              </span>
            ))}
          </div>
          <div className="mt-3 text-[11px] opacity-90">
            #拾词 #英语学习 #每日拾词
          </div>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-stone-500">
          <span className="inline-flex items-center gap-1 text-[12px]">
            <Heart className="size-4 text-rose-500 fill-rose-500" /> 2.4k
          </span>
          <span className="inline-flex items-center gap-1 text-[12px]">
            <MessageCircle className="size-4" /> 186
          </span>
          <span className="inline-flex items-center gap-1 text-[12px]">
            <Bookmark className="size-4" /> 521
          </span>
        </div>
        <Share2 className="size-4 text-stone-400" />
      </div>
    </motion.div>
  );
}
