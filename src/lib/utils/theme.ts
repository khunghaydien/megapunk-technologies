export function initTheme() {
    if (typeof window === 'undefined') return;

    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function toggleTheme() {
    if (typeof window === 'undefined') return;

    const isDark = document.documentElement.classList.toggle('dark');
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}
