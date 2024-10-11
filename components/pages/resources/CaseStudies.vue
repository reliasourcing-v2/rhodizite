<template>
    <div>
        <div v-if="!loaded" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div v-for="i in 4"
                class="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 animate-loading">
                <div class="w-full lg:w:[calc(100%-279px)]">
                    <div class="lg:aspect-w-1 aspect-w-4 aspect-h-3 lg:aspect-h-1 rounded-md bg-neutral-200"></div>
                </div>
                <div class="w-full lg:w-[263px]">
                    <div class="bg-neutral-200 mb-4 h-5 rounded"></div>
                    <div class="bg-neutral-200 h-3 rounded mb-2"></div>
                    <div class="bg-neutral-200 h-3 rounded"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="caseStudiesState.caseStudies.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <cards-article-card v-for="item in caseStudiesState.caseStudies" :item="item" :key="item.id" />
            </div>
            <div v-else>
                No articles available...
            </div>
            <div v-if="caseStudiesState.currentPage < caseStudiesState.totalPages" class="text-center mt-8">
                <buttons-base-button @click="loadMore" design-color="text-white" :disabled="caseStudiesState.isLoading">
                    {{ caseStudiesState.isLoading ? 'Loading...' : 'Load More' }}
                </buttons-base-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
const config = useRuntimeConfig()

const caseStudiesState = reactive({
    caseStudies: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
});

const loaded = ref(false);

const fetchCaseStudies = async (page = 1) => {
    caseStudiesState.isLoading = true;
    try {
        const { data, error } = await useFetch(`${config.public.apiBaseUrl}/case-studies?page=${page}`);

        if (error.value) {
            throw new Error(error.value);
        }

        caseStudiesState.caseStudies.push(...data.value.caseStudies.data);
        caseStudiesState.currentPage = data.value.caseStudies.current_page;
        caseStudiesState.totalPages = data.value.caseStudies.last_page;
        // caseStudiesState.totalPages = data.value.totalPages;
    } catch (err) {
        caseStudiesState.error = err.message;
    } finally {
        caseStudiesState.isLoading = false;
    }
};

const loadMore = () => {
    if (caseStudiesState.currentPage < caseStudiesState.totalPages) {
        fetchCaseStudies(caseStudiesState.currentPage + 1);
    }
};

onMounted(() => {
    fetchCaseStudies();

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