<!-- 
Trang này sẽ trả lời câu hỏi nếu bây giờ đến thì bao lâu nữa bạn sẽ được phục vụ?
Chức năng:
1. Hiển thị trạng thái của shop:
    - Đang bận: thời gian sẽ sẵn sàng
    - Đang rảnh: luôn sẵn sàng
2. Nút booking now: sẽ redirect ra trang đặt lịch
3. Hiển thị địa chỉ, thông tin cơ bản của shop (tên, địa chỉ, số điện thoại, email, hình ảnh)
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
