import { previewEmailContext } from "../components/email-context";
import NewPollEmail from "../templates/new-poll";

export default function NewPollPreview() {
  return (
    <NewPollEmail
      title="Untitled Poll"
      name="John Doe"
      adminLink="https://kinpal.com"
      participantLink="https://kinpal.com/invite/abc123"
      ctx={previewEmailContext}
    />
  );
}
