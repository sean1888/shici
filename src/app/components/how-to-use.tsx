import { motion } from "motion/react";
import {
  Globe,
  Sparkles,
  Copy,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Globe,
    title: "打开任意英文网页",
    desc: "外刊、博客、文档、Reddit……只要是英文，全部支持。",
    hint: "随便什么英文页面都行，不用挑网站",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "点一下「拾起本页生词」",
    desc: "0.3 秒扫完整页，3 字符以上的英文单词全部入袋候选。",
    hint: "已学过的词自动跳过 · 显示「新词 / 已过滤」统计",
  },
  {
    n: "03",
    icon: Copy,
    title: "复制 或 下载 TXT",
    desc: "一键复制到剪贴板，或下载 words_2026-05-29.txt。",
    hint: "复制 / 下载的一刻，自动入袋，下次不再出现",
  },
  {
    n: "04",
    icon: BookOpenCheck,
    title: "导入背单词 APP",
    desc: "粘贴或上传 TXT 到你常用的背词应用，今天读的英文，今晚就能背。",
    hint: "兼容：不背单词 · 百词斩 · 欧路词典 · Anki · 墨墨背单词 等",
  },
];

export function HowToUse() {
  return (
    <section id="usage" className="mt-28 scroll-mt-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-[11px] tracking-[0.22em] text-rose-500">
            02 · HOW IT WORKS
          </div>
          <h2
            className="mt-3 tracking-tight text-stone-900"
            style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: -0.5 }}
          >
            四步，把网页<br />
            <span className="text-rose-500">变成你的单词书</span>
          </h2>
        </div>
        <p className="text-stone-500 max-w-[360px] text-[14px] leading-relaxed">
          安装拾词后，从打开网页到背完今天的词，
          整个流程不到一分钟 —— 比你点一杯咖啡还快。
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-white border border-stone-100 p-6 hover:border-rose-200 hover:shadow-[0_24px_48px_-24px_rgba(244,63,94,0.35)] transition-all"
            >
              {/* connector arrow on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-white border border-stone-100 items-center justify-center text-rose-300 z-10">
                  <ArrowRight className="size-3" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="size-11 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100/60 inline-flex items-center justify-center text-rose-500 group-hover:from-rose-500 group-hover:to-orange-400 group-hover:text-white group-hover:border-transparent transition-colors">
                  <Icon className="size-5" />
                </div>
                <span className="text-rose-300 tracking-[0.2em] text-[11px]">
                  {s.n}
                </span>
              </div>

              <div className="mt-4 text-stone-900 tracking-tight" style={{ fontSize: 17, lineHeight: 1.35 }}>
                {s.title}
              </div>
              <p className="mt-2 text-[13px] text-stone-600 leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-dashed border-stone-100 text-[11.5px] text-stone-400 leading-relaxed">
                {s.hint}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* tail note */}
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50/80 border border-amber-100 text-[12.5px] text-amber-800">
        <span>💡</span>
        <span>
          特殊页面（chrome://、扩展商店）会提示「不支持提取」，刷新即可重试
        </span>
      </div>
    </section>
  );
}
