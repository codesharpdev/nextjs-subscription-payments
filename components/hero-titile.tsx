import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  className?: string
}

export function HeroTitle({ title, description, className }: Props) {
  return (
    
      <div className={cn(
        "sm:flex sm:flex-col",
        className
      )}>
        <h2 className="text-1xl font-semibold sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-zinc-400 text-sm">
          {description}
        </p>
      </div>
  );
};
