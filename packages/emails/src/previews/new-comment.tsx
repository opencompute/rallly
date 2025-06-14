import { previewEmailContext } from "../components/email-context";
import { NewCommentEmail } from "../templates/new-comment";

function NewCommentEmailPreview() {
  return (
    <NewCommentEmail
      title="Untitled Poll"
      authorName="Someone"
      pollUrl="https://kinpal.com"
      disableNotificationsUrl="https://kinpal.com"
      ctx={previewEmailContext}
    />
  );
}

export default NewCommentEmailPreview;
