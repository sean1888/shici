import { motion } from "motion/react";
import { Sparkles, Chrome, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { ExtractorPopup } from "./components/extractor-popup";
import { VocabVault } from "./components/vocab-vault";
import { ShareCard } from "./components/share-card";
import { BrandLogo } from "./components/brand-logo";
import { HowToUse } from "./components/how-to-use";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fff8f3] relative overflow-hidden">
      <div className="pointer-events-none absolute top-16 -left-40 size-[520px] rounded-full bg-rose-200/50 blur-[100px] [mask-image:radial-gradient(circle,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-80 -right-40 size-[480px] rounded-full bg-orange-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[420px] rounded-full bg-amber-100/60 blur-3xl" />

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] w-full bg-[#fff8f3]/85 backdrop-blur-[10px] border-b border-rose-100/60 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <nav className="max-w-[1240px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-[0_8px_20px_-6px_rgba(244,63,94,0.6)] overflow-hidden">
              <BrandLogo size={36} />
            </div>
            <div className="leading-tight">
              <div className="tracking-tight text-stone-900">拾词</div>
              <div className="text-[10px] tracking-[0.2em] text-rose-400">SHICI&nbsp;·&nbsp;PICK&nbsp;WORDS</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[13px] text-stone-600">
            <a href="#features" className="hover:text-rose-500 cursor-pointer">功能</a>
            <a href="#usage" className="hover:text-rose-500 cursor-pointer">用法</a>
            <a className="hover:text-rose-500 cursor-pointer">下载</a>
          </div>
          <button className="h-9 px-4 rounded-full bg-stone-900 text-white text-[12.5px] inline-flex items-center gap-1.5 hover:bg-rose-500 transition-colors">
            <Chrome className="size-3.5" /> 添加到 Chrome
          </button>
        </nav>
      </header>

      {/* MAIN */}
      <main className="relative max-w-[1240px] mx-auto px-8 py-10 pt-[calc(64px+40px)]">
        <section className="mt-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-rose-100 px-3 py-1 text-[11.5px] text-rose-500 shadow-sm"
            >
              <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" />
              阅读路上的单词收藏家
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 tracking-tight text-stone-900"
              style={{ fontSize: 64, lineHeight: 1.02, letterSpacing: -1 }}
            >
              读到哪儿，
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-rose-500 via-rose-400 to-orange-400 bg-clip-text text-transparent">
                  拾到哪儿
                </span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-2.5 bg-rose-100 rounded-full -z-0" />
              </span>
              。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-stone-600 max-w-[480px] leading-relaxed"
            >
              一键拾起当前网页的生词，自动跳过你已经学过的，
              直接导入背单词 APP —— 阅读即背词，
              再也不用手动抄单词本啦 📖✨
            </motion.p>

            <div className="mt-7 flex items-center gap-3">
              <button className="h-12 px-6 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 text-white tracking-wide inline-flex items-center gap-2 shadow-[0_14px_32px_-10px_rgba(244,63,94,0.55)] hover:shadow-[0_18px_38px_-10px_rgba(244,63,94,0.7)] transition-shadow">
                <Chrome className="size-4" /> 免费添加扩展
              </button>
              <button className="h-12 px-6 rounded-full bg-white border border-stone-200 text-stone-700 tracking-wide hover:border-rose-300 hover:text-rose-500 transition-colors">
                看看怎么用 →
              </button>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4 max-w-[520px]">
              <Feature icon={<Zap className="size-4" />} label="0.3s 提取" sub="任何英文网页都能用" />
              <Feature icon={<ShieldCheck className="size-4" />} label="本地存储" sub="数据不上云" />
              <Feature icon={<Sparkles className="size-4" />} label="自动去重" sub="已学不再出现" />
            </div>
          </div>

          <div className="relative h-[640px] flex items-center justify-center">
            <div className="absolute right-0 top-2">
              <ExtractorPopup />
            </div>
            <div className="absolute -left-6 bottom-0 hidden lg:block">
              <ShareCard />
            </div>
          </div>
        </section>

        <section id="features" className="mt-24 scroll-mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.22em] text-rose-500">01 · MY WORD POUCH</div>
            <h2
              className="mt-3 tracking-tight text-stone-900"
              style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: -0.5 }}
            >
              你的私人<br />
              <span className="text-rose-500">词袋</span>
            </h2>
            <p className="mt-4 text-stone-600 max-w-[440px] leading-relaxed">
              拾起的每个词都自动归档，下次阅读时自动跳过 ——
              进度条会偷偷涨，连续打卡的小火苗也越烧越旺 🔥
            </p>
            <div className="mt-6 space-y-3 max-w-[440px]">
              <Bullet n="01" t="标签式词汇墙" d="一眼看完最近收录的所有单词" />
              <Bullet n="02" t="多格式导入" d="换行 / 逗号 / 空格 / 制表符全部识别" />
              <Bullet n="03" t="一键备份导出" d="数据迁移 / 防止卸载丢失" />
            </div>
          </div>
          <div className="flex justify-center">
            <VocabVault />
          </div>
        </section>

        <HowToUse />

        <section className="mt-28 mb-10 relative rounded-[32px] overflow-hidden bg-gradient-to-br from-rose-500 via-rose-400 to-orange-400 p-12 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.22em] opacity-80">READY?</div>
              <h3
                className="mt-2 tracking-tight"
                style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: -0.5 }}
              >
                你不是没时间背单词，<br />是没人帮你把词从文章里捡出来。
              </h3>
            </div>
            <button className="h-12 px-6 rounded-full bg-white text-rose-500 tracking-wide inline-flex items-center gap-2 hover:bg-stone-900 hover:text-white transition-colors">
              <Chrome className="size-4" /> 立即添加到 Chrome
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative mt-16 bg-gradient-to-b from-[#fbeadb] to-[#f7dec9] text-stone-600">
        <div className="max-w-[1240px] mx-auto px-8 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2">
                <div className="rounded-xl overflow-hidden">
                  <BrandLogo size={36} />
                </div>
                <div className="leading-tight">
                  <div className="tracking-tight text-stone-900">拾词</div>
                  <div className="text-[10px] tracking-[0.2em] text-rose-500">SHICI&nbsp;·&nbsp;PICK&nbsp;WORDS</div>
                </div>
              </div>
              <p className="mt-4 text-[13px] text-stone-600 leading-relaxed max-w-[280px]">
                阅读路上的单词收藏家 —— 读到哪儿，拾到哪儿。
              </p>
            </div>

            <FooterCol title="产品" items={["功能", "用法", "更新日志", "下载"]} />
            <FooterCol title="支持" items={["使用帮助", "常见问题", "反馈建议", "隐私说明"]} />
            <FooterCol title="兼容 APP" items={["不背单词", "百词斩", "Anki", "欧路 / 墨墨"]} />
          </div>

          <div className="mt-12 pt-6 border-t border-rose-200/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-stone-500">
            <span>© 2026 拾词 ShiCi · Chrome Extension · Manifest V3</span>
            <span>Made with 🌶️ for English learners</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[13px] font-medium tracking-[0.16em] text-rose-500">{title.toUpperCase()}</div>
      <ul className="mt-4 space-y-2.5 text-[12px]">
        {items.map((it) => (
          <li key={it} className="text-stone-600 hover:text-rose-500 cursor-pointer transition-colors">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Feature({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur border border-white px-4 py-3">
      <div className="size-7 rounded-lg bg-rose-50 text-rose-500 inline-flex items-center justify-center">
        {icon}
      </div>
      <div className="mt-2 text-[13px] text-stone-900 tracking-tight">{label}</div>
      <div className="text-[11px] text-stone-500 mt-0.5">{sub}</div>
    </div>
  );
}

function Bullet({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white border border-stone-100 p-4 hover:border-rose-200 hover:shadow-[0_12px_28px_-18px_rgba(244,63,94,0.4)] transition-all">
      <div className="text-rose-500 tracking-[0.16em] text-[11px] mt-1">{n}</div>
      <div>
        <div className="text-stone-900 tracking-tight">{t}</div>
        <div className="text-[12.5px] text-stone-500 mt-0.5">{d}</div>
      </div>
    </div>
  );
}
