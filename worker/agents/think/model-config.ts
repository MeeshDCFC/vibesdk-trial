import { ModelSize, type AIModelConfig } from '../inferutils/config.types';

// Findern trial variant (2026-09-10): the pre-budgeted comparison model from
// docs/plans/2026-09-08-vibesdk-trial-plan.md §2/§8 in MeeshDCFC/NexusCMS.
// A COMPLETE configuration, not only a renamed id: id, name, provider and
// context size all describe Claude Sonnet 4.5; creditCost is left at the
// shipped value and recorded as accounting-only. No ANTHROPIC_API_KEY is set,
// so the request goes through the platform AI Gateway compat path with the
// gateway token (Unified Billing). The prompt family is selected by the id
// ("claude" -> PROMPT_ANTHROPIC) and is the shipped prompt, untouched.
export const THINK_MODEL_ID = 'anthropic/claude-sonnet-4-5';

export const THINK_MODEL_CONFIG: AIModelConfig = {
	name: 'Claude Sonnet 4.5',
	size: ModelSize.REGULAR,
	provider: 'anthropic',
	creditCost: 2,
	contextSize: 200_000,
};
