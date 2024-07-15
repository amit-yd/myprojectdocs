import { useColorMode } from "@docusaurus/theme-common";
import { useHistory } from "@docusaurus/router";
import {
  BackgroundGradient,
  Button,
  buttonVariants,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import { cn } from "/lib/utils";
import Link from "@docusaurus/Link";

export const ProductCard = ({ product }) => {
  const { colorMode } = useColorMode();
  const history = useHistory();
  return (
    <BackgroundGradient className="h-full rounded-3xl bg-white dark:bg-zinc-900">
      <div
        className={cn(
          "group flex h-full w-full flex-col rounded-[20px] border border-black/[0.2] border-zinc-200 bg-gray-100 p-6  dark:border-neutral-800 dark:border-white/[0.2] dark:bg-neutral-900",
        )}
      >
        <div
          className={cn(
            "flex flex-1 flex-col items-start justify-center gap-2",
          )}
        >  
          <div
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-slate-300 p-2 dark:border-slate-800",
            )}
          >
            <img className={cn("w-10")} src={product.iconImage} alt="" />
          </div>
          <div>
            <div className={cn("text-3xl font-bold")}>{product.name}</div>
          </div>
          <div className={cn("flex-1")}>
            <div>{product.description}</div>
          </div>
          <div
            className={cn(
              "mt-4 flex w-full flex-row flex-wrap justify-between gap-2",
            )}
          >
            <Button
              className={buttonVariants({ variant: "outline" })}
              tabindex="1"
              onClick={() => {
                history.push(product.link);
              }}
            >{`Explore ${product.name}`}</Button>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild tabIndex={"1"}>
                  <Button variant="secondary">Quick Links</Button>
                </TooltipTrigger>
                <TooltipContent
                  avoidCollisions={false}
                  side={"top"}
                  className={
                    "relative z-50 rounded-xl bg-gray-200 dark:bg-zinc-700"
                  }
                >
                  <div
                    className={cn(
                      "flex flex-col items-center justify-start gap-1 p-2",
                    )}
                  >
                    <Link
                      href={product.link}
                      className={cn(
                        "block text-sm font-semibold text-black dark:text-white ",
                      )}
                    >
                      Most Visited Link 1 <span>&#8594;</span>{" "}
                    </Link>
                    <Link
                      href={"#"}
                      className={cn(
                        "block text-sm font-semibold text-black dark:text-white ",
                      )}
                    >
                      Most Visited Link 2 <span>&#8594;</span>{" "}
                    </Link>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};
