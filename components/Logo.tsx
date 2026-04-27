import Image from "next/image";

export function Logo({ className = "text-xl text-slate-900" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-8 w-8 overflow-hidden rounded-md border border-slate-200/60 shadow-sm shrink-0">
        <Image
          alt="OpenOtter Icon"
          className="object-cover"
          fill
          src="/brand/openotter-icon.jpg"
          sizes="32px"
          priority
        />
      </div>
      <span className={`font-semibold tracking-tight hidden sm:block ${className}`}>
        OpenOtter
      </span>
    </div>
  );
}
