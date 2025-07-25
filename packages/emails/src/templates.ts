import { AbandonedCheckoutEmail } from "./templates/abandoned-checkout";
import { ChangeEmailRequest } from "./templates/change-email-request";
import { EventCanceledEmail } from "./templates/event-canceled";
import { FinalizeHostEmail } from "./templates/finalized-host";
import { FinalizeParticipantEmail } from "./templates/finalized-participant";
import { LicenseKeyEmail } from "./templates/license-key";
import { LoginEmail } from "./templates/login";
import { NewCommentEmail } from "./templates/new-comment";
import { NewParticipantEmail } from "./templates/new-participant";
import { NewParticipantConfirmationEmail } from "./templates/new-participant-confirmation";
import { NewPollEmail } from "./templates/new-poll";
import { RegisterEmail } from "./templates/register";
import { SpaceInviteEmail } from "./templates/space-invite";
import type { TemplateName } from "./types";

const templates = {
  FinalizeHostEmail,
  FinalizeParticipantEmail,
  LoginEmail,
  NewCommentEmail,
  NewParticipantEmail,
  NewParticipantConfirmationEmail,
  NewPollEmail,
  RegisterEmail,
  ChangeEmailRequest,
  AbandonedCheckoutEmail,
  LicenseKeyEmail,
  EventCanceledEmail,
  SpaceInviteEmail,
};

export const emailTemplates = Object.keys(templates) as TemplateName[];

export type EmailTemplates = typeof templates;

export { templates };
