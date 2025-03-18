"use client";
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			sideOffset={6}
		collisionPadding={10}
			{...props}
			ref={forwardedRef}
			className="min-w-[200px] lg:min-w-[300px] max-w-[400px] w-full 
			shadow-sm shadow-neutral-200/80 bg-white/20 backdrop-blur p-3  border border-neutral-200"
		>
			{children}
			<PopoverPrimitive.Arrow fill="fill-gray-400" className="fill-gray-200" />
		</PopoverPrimitive.Content>
	</PopoverPrimitive.Portal>
));

PopoverContent.displayName = "PopoverContent"; // avoid console warnings, radix be weird sometimes.
