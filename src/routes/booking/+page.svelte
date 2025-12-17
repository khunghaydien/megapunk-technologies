<!-- 
Trang này là trang đặt lịch
Chức năng:
- Tự động fill tên khách hàng -> cho phép chỉnh sửa
- Tự động fill khung giờ gần nhật available -> cho phép chỉnh sửa
- Tự động fill dịch vụ lần trước đặt(nếu có) || dịch vụ hot nhất(nếu có) -> cho phép chỉnh sửa)
- Nếu chưa đặt thì sẽ là đặt ngay, có rồi hiện nút cập nhật (update booking, disabled, trừ khi sửa thì mới enable), nếu đã đặt và chủ quán approved thì hiện nút hủy (cancel booking)
-->
<script lang="ts">
    import { toggleTheme } from "$lib/utils/theme";
    import Button from "$lib/components/Button.svelte";
    import * as m from "$lib/paraglide/messages.js";
</script>

<main class="min-h-screen bg-background text-foreground">
    <Button
        aria-label={m.book_now()}
        className="w-fit cursor-pointer"
        on:click={toggleTheme}
    >
        {m.book_now()}
    </Button>
</main>
