<template>
    <section>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                <cards-specialty-card
                    v-for="item in items.cards"
                    :item="item"
                />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
defineProps({
    items: {
        type: Object,
        default: () => ({})
    }
})
</script>