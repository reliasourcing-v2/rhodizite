<template>
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-16">
        <div class="max-w-[1061px] m-auto">
            <div v-if="!loaded" class="flex lg:flex-row lg:space-y-0 space-y-4 flex-col lg:space-x-8 w-full">
                <div class="w-full lg:w-[calc(100%-415px)]">
                    <div class="aspect-w-[641] aspect-h-[469] overflow-hidden rounded-md bg-neutral-200 animate-loading"></div>
                </div>
                <div class="space-y-4 w-full lg:w-[383px]">
                    <div class="bg-neutral-200 h-[32px] rounded-md animate-loading"></div>
                    <div class="bg-neutral-200 h-[32px] rounded-md animate-loading"></div>
                    <div class="bg-neutral-200 h-[32px] rounded-md animate-loading"></div>
                    <div>
                        <div class="bg-neutral-200 h-[16px] w-[80%] mt-2 rounded-md animate-loading"></div>
                        <div class="bg-neutral-200 h-[16px] w-[80%] mt-2 rounded-md animate-loading"></div>
                        <div class="bg-neutral-200 h-[16px] w-[80%] mt-2 rounded-md animate-loading"></div>
                        <div class="bg-neutral-200 h-[16px] w-[50%] mt-2 rounded-md animate-loading"></div>
                    </div>
                    <div class="bg-primary-200 h-[40px] w-[120px] rounded-md animate-loading"></div>
                </div>
            </div>
            <div v-else>
                <div 
                    v-for="item in featured.featured" :key="item.id"
                    class="flex lg:flex-row lg:space-y-0 space-y-4 flex-col lg:space-x-8 w-full"
                >
                    <div class="w-full lg:w-[calc(100%-415px)]">
                        <div class="aspect-w-[641] aspect-h-[469] overflow-hidden rounded-md">
                            <nuxt-img 
                                class="w-full h-full object-cover"
                                :src="$config.public.storage + item.banner_image_path" 
                                :alt="item.title" 
                                decoding="async" 
                                format="webp" 
                                quality="10" 
                                width="646" 
                                height="473" 
                                :sizes="['(max-width: 1024px) 100vw', '33vw']"
                            />
                        </div>
                    </div>
                    <div class="space-y-4 w-full lg:w-[383px]">
                        <p class="text-28 font-bold line-clamp-3">{{ item.title }}</p>
                        <div class="line-clamp-6" v-html="truncateContent(item.content)"></div>
                        <div>
                            <p class="text-sm text-neutral-500">{{ formatDate(item.publish_date) }} • {{
                                item.article_type }}</p>
                            <p v-if="item.author" class="text-sm text-neutral-500">Written by: {{ item.author }}</p>
                        </div>
                        <div>
                            <nuxt-link :to="`/resources/${item.slug}`">
                                <buttons-base-button designColor="text-primary-50">Read More</buttons-base-button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { get } = useApi();
const config = useRuntimeConfig();
const { data: featured } = await get('/featured-article');
// defineProps({
//     featured: Object
// })

const loaded = ref(false);

const formatDate = (rawDate: string) => {
    return new Date(rawDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

const truncateContent = (content: string) => {
    const limit = 600;
    if (content.length > limit) {
        return content.substring(0, limit) + '...';
    }
    return content;
}

onMounted(() => {

    const delay = detectMobile() ? 1000 : 2500;

    const fireLoad = () => {
        setTimeout(() => {
            loaded.value = true;
        }, delay);
    };

    if (document.readyState === "complete") {
        fireLoad();
    } else {
        window.addEventListener("load", () => {
            fireLoad();
        });
    }
});

</script>