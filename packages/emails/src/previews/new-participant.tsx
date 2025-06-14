import { previewEmailContext } from "../components/email-context";
import { NewParticipantEmail } from "../templates/new-participant";

export default function NewParticipantPreview() {
  return (
    <NewParticipantEmail
      participantName="John Doe"
      title="Untitled Poll"
      pollUrl="https://kinpal.com"
      disableNotificationsUrl="https://kinpal.com"
      ctx={previewEmailContext}
    />
  );
}
