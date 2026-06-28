import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Percent, PiggyBank, Scale } from "lucide-react";
import { PageHeader } from "@/layouts/PageHeader";

const inputCls =
"h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/30";
const labelCls = "text-xs font-bold uppercase tracking-wide text-muted-foreground";

function Card({ children, icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/12 text-secondary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </motion.div>);

}

function Result({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display text-lg font-extrabold text-secondary">{value}</span>
    </div>);

}

const fmt = (n) =>
isFinite(n) ?
n.toLocaleString("en-IN", { maximumFractionDigits: 2 }) :
"—";

function PositionSize() {
  const [capital, setCapital] = useState(100000);
  const [risk, setRisk] = useState(1);
  const [entry, setEntry] = useState(100);
  const [stop, setStop] = useState(95);

  const riskAmount = capital * risk / 100;
  const perShare = Math.abs(entry - stop);
  const shares = perShare > 0 ? Math.floor(riskAmount / perShare) : 0;

  return (
    <Card icon={Scale} title="Position Size Calculator" desc="Risk a fixed % per trade">
      <div className="grid grid-cols-2 gap-3">
        <label className="space-y-1">
          <span className={labelCls}>Capital (₹)</span>
          <input className={inputCls} type="number" value={capital} onChange={(e) => setCapital(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Risk %</span>
          <input className={inputCls} type="number" value={risk} onChange={(e) => setRisk(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Entry price</span>
          <input className={inputCls} type="number" value={entry} onChange={(e) => setEntry(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Stop loss</span>
          <input className={inputCls} type="number" value={stop} onChange={(e) => setStop(+e.target.value)} />
        </label>
      </div>
      <div className="mt-4 space-y-2">
        <Result label="Risk amount" value={`₹${fmt(riskAmount)}`} />
        <Result label="Shares to buy" value={fmt(shares)} />
      </div>
    </Card>);

}

function RiskReward() {
  const [entry, setEntry] = useState(100);
  const [stop, setStop] = useState(95);
  const [target, setTarget] = useState(115);

  const riskPS = Math.abs(entry - stop);
  const rewardPS = Math.abs(target - entry);
  const ratio = riskPS > 0 ? rewardPS / riskPS : 0;

  return (
    <Card icon={Percent} title="Risk : Reward" desc="Is the trade worth it?">
      <div className="grid grid-cols-3 gap-3">
        <label className="space-y-1">
          <span className={labelCls}>Entry</span>
          <input className={inputCls} type="number" value={entry} onChange={(e) => setEntry(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Stop</span>
          <input className={inputCls} type="number" value={stop} onChange={(e) => setStop(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Target</span>
          <input className={inputCls} type="number" value={target} onChange={(e) => setTarget(+e.target.value)} />
        </label>
      </div>
      <div className="mt-4 space-y-2">
        <Result label="Reward per share" value={`₹${fmt(rewardPS)}`} />
        <Result label="Risk : Reward" value={`1 : ${fmt(ratio)}`} />
      </div>
    </Card>);

}

function SIP() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 100 / 12;
  const fv = r > 0 ? monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r) : monthly * months;
  const invested = monthly * months;

  return (
    <Card icon={PiggyBank} title="SIP Calculator" desc="Compound your investments">
      <div className="space-y-3">
        <label className="block space-y-1">
          <span className={labelCls}>Monthly investment (₹)</span>
          <input className={inputCls} type="number" value={monthly} onChange={(e) => setMonthly(+e.target.value)} />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="space-y-1">
            <span className={labelCls}>Return % p.a.</span>
            <input className={inputCls} type="number" value={rate} onChange={(e) => setRate(+e.target.value)} />
          </label>
          <label className="space-y-1">
            <span className={labelCls}>Years</span>
            <input className={inputCls} type="number" value={years} onChange={(e) => setYears(+e.target.value)} />
          </label>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Result label="Invested" value={`₹${fmt(invested)}`} />
        <Result label="Future value" value={`₹${fmt(fv)}`} />
        <Result label="Wealth gained" value={`₹${fmt(fv - invested)}`} />
      </div>
    </Card>);

}

function ProfitLoss() {
  const [buy, setBuy] = useState(100);
  const [sell, setSell] = useState(120);
  const [qty, setQty] = useState(50);

  const pl = (sell - buy) * qty;
  const pct = buy > 0 ? (sell - buy) / buy * 100 : 0;

  return (
    <Card icon={Calculator} title="Profit / Loss" desc="Calculate trade outcome">
      <div className="grid grid-cols-3 gap-3">
        <label className="space-y-1">
          <span className={labelCls}>Buy</span>
          <input className={inputCls} type="number" value={buy} onChange={(e) => setBuy(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Sell</span>
          <input className={inputCls} type="number" value={sell} onChange={(e) => setSell(+e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className={labelCls}>Qty</span>
          <input className={inputCls} type="number" value={qty} onChange={(e) => setQty(+e.target.value)} />
        </label>
      </div>
      <div className="mt-4 space-y-2">
        <Result label="Net P/L" value={`₹${fmt(pl)}`} />
        <Result label="Return %" value={`${fmt(pct)}%`} />
      </div>
    </Card>);

}

export function Calculators() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Trading & investing calculators"
        description="Plan trades and investments with these free, instant calculators."
        crumbs={[{ label: "Calculators" }]} />
      
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <PositionSize />
          <RiskReward />
          <SIP />
          <ProfitLoss />
        </div>
      </section>
    </>);

}