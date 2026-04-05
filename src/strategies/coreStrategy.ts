import type { RuntimeContext } from "../types/runtime.js";

export function buildStrategyDecision(context: RuntimeContext, snapshot: { score: number }) {
  const shouldTrade = snapshot.score >= 0.7;

  return {
    shouldTrade,
    reason: shouldTrade
      ? "Signal strength passed placeholder threshold"
      : "Signal strength below placeholder threshold",
    market: context.market,
    action: "normalizes opportunities, applies hedging rules, and coordinates execution across venues",
  };
}
