<template>
    <sections-general-banner :item="{
        image: $config.public.storage + cms?.content.section1_image,
        title: cms?.content.section1_title
    }" />
    <section class="bg-primary-50">
        <pages-resources-featured />

        <lazy-pages-resources-articles />
    </section>
</template>
<script setup lang="ts">
const { get } = useApi();
const config = useRuntimeConfig();
const { data: cms } = await get('/page/resources');

useSeoMeta({
    title: cms.value?.title,
    ogTitle: cms.value?.title,
    description: cms.value?.description,
    ogDescription: cms.value?.description,
    keywords: cms.value?.keywords,
    ogImage: config.public.storage + cms.value?.keywords,
    twitterCard: 'summary_large_image',
})
</script>