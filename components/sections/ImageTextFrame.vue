<template>
    <section class="bg-primary-900">
        <div class="flex items-center lg:flex-row flex-col">
            <div class="w-full lg:w-1/2 h-full bg-white">
                <nuxt-img  
                    class="w-full h-full object-cover" 
                    :src="item.image" 
                    alt="solution"
                    loading="lazy"
                    decoding="async"
                    format="webp" quality="80"
                />
            </div>
            <div class="w-full lg:w-1/2 text-white px-4 lg:px-10 xl:px-20 py-6 lg:py-[100px]">
                <h2 class="text-5xl font-bold mb-6 animateUp leading-[56px]" v-html="item.title"></h2>
                <div class="text-lg mb-12 animateUp" v-html="item.content" />
                <a :href="item.buttonLink">
                    <buttons-base-button class="animateUp">
                        {{ item.buttonText }}
                    </buttons-base-button>
                </a>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
</script>