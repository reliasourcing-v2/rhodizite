<template>
   <section>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="h-full bg-white">
                <nuxt-img class="w-full h-full object-cover" :src="$config.public.storage + cms?.content.section5_image"
                    alt="gaming" loading="lazy" decoding="async" format="webp" quality="80"/>
            </div>
            <div class="px-4 lg:px-10 xl:px-20 py-6 lg:py-[100px]">
                <p class="text-5xl font-bold mb-6 animateUp" v-html="cms?.content.section5_header"></p>
                <div class="text-lg mb-12 animateUp">
                    <p>{{ cms?.content.section5_content }}</p>
                </div>
                <a href="/#contact-us">
                    <buttons-base-button class="animateUp" design-color="text-white">
                        Outsource with Us
                    </buttons-base-button>
                </a>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
defineProps({
    cms: {
        type: Object,
        required: true
    }
})
</script>