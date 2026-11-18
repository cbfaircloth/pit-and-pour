import ReactionButtons from "./ReactionButtons";

export default function ContentWithReactions({
  contentType,
  contentId,
  children,
}) {
  return (
    <>
      <ReactionButtons
        contentType={contentType}
        contentId={contentId}
      />
      {children}
    </>
  );
}