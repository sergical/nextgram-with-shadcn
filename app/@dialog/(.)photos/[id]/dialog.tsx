"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export function DialogWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <Dialog defaultOpen onOpenChange={onDismiss}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Photo page</DialogTitle>
          <DialogDescription>
            Intercepting routes are a great way to show dialogs.
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
