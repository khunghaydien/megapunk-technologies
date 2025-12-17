<script lang="ts">
    import { toggleTheme } from "$lib/utils/theme";
    import Button from "$lib/components/Button.svelte";
</script>

<main class="min-h-screen bg-background text-foreground p-8">
    <Button
        variant="destructive"
        size="lg"
        aria-label="Toggle theme"
        className="w-full cursor-pointer"
        on:click={toggleTheme}
    >
        Click me
    </Button>
</main>
