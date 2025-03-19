'use client'
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-neutral-300/50 backdrop-blur-sm" />
    <DialogPrimitive.Content
      {...props}
      ref={forwardedRef}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-600/60 backdrop-blur z-[200] 
       shadow-md"
    >
      <DialogPrimitive.Title></DialogPrimitive.Title>
      {children}

    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "DialogContent";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close

