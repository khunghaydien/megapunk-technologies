<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import { clsx } from "clsx";

    const buttonVariants = cva(
        "flex justify-center items-center rounded-xl text-sm font-medium cursor-pointer",
        {
            variants: {
                variant: {
                    default:
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive:
                        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline:
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary:
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10",
                },
            },
            defaultVariants: {
                variant: "default",
                size: "default",
            },
        },
    );

    type ButtonVariants = VariantProps<typeof buttonVariants>;

    export let variant: ButtonVariants["variant"] = "default";
    export let size: ButtonVariants["size"] = "default";
    export let className = "";
</script>

<button
    class={clsx(buttonVariants({ variant, size }), className)}
    {...$$restProps}
    on:click
>
    <slot />
</button>
