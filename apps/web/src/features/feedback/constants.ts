import { isSelfHosted } from "@/lib/constants";

// Feedback goes to the Kinpal team; there is nobody to receive it self-hosted
export const isFeedbackEnabled = !isSelfHosted;
