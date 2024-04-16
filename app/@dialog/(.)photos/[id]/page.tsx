import { DialogWrapper } from "./dialog";

export default function PhotoDialog({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <DialogWrapper>{photoId}</DialogWrapper>;
}
