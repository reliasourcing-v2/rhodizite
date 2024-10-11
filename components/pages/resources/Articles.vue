<template>
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 pb-16 bg-primary-50">
        <div class="max-w-[1061px] m-auto">
            <div class="w-fit m-auto space-x-2.5 flex mb-8 lg:mb-16">
                <div @click="activateTab('case-studies')"
                    class="px-4 py-2 rounded-lg cursor-pointer transition hover:bg-primary-600/[0.24]"
                    :class="articleType == 'case-studies' ? 'bg-primary-600/[0.24] text-primary-400 font-medium' : ''">
                    <p class="text-sm leading-6">Case Studies</p>
                </div>
                <div @click="activateTab('blogs')"
                    class="px-4 py-2 rounded-lg cursor-pointer transition hover:bg-primary-600/[0.24]"
                    :class="articleType == 'blogs' ? 'bg-primary-600/[0.24] text-primary-400 font-medium' : ''">
                    <p class="text-sm leading-6">Blogs</p>
                </div>
            </div>

           
            <div>
                <pages-resources-case-studies v-if="articleType == 'case-studies'" />
                <pages-resources-blogs v-if="articleType == 'blogs'" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const articleType = ref('case-studies');
const activateTab = (tab: string) => {
    articleType.value = tab;
}
</script>
