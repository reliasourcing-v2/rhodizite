<!-- pages/index.vue -->
<template>
    <div class="spacer h-[100px]"></div>
    <div class="lg:min-h-screen max-w-[1000px] px-4 py-10 lg:p-20 m-auto">
        <h1 class="lg:text-h1 text-4xl text-center font-bold mb-10 lg:mb-20">SITEMAP</h1>
        <div>
            <ul>
                <li v-for="parentPage in parent_pages" :key="parentPage.id" class="mb-4">
                    <div v-if="parentPage.title === 'Industries'">
                        <h2 class="text-xl lg:text-2xl font-bold mb-4">
                            Industries
                        </h2>
                        <ul class="ml-4">
                            <li class="mb-4">
                                <h3 class="text-normal lg:text-lg">
                                    <NuxtLink to="/industries/gaming-and-entertainment" class="hover:text-primary-500">
                                        Gaming and Entertainment
                                    </NuxtLink>
                                </h3>
                            </li>
                            <li class="mb-4">
                                <h3 class="text-normal lg:text-lg">
                                    <NuxtLink to="/industries/saas" class="hover:text-primary-500">
                                        Saas
                                    </NuxtLink>
                                </h3>
                            </li>
                            <li class="mb-4">
                                <h3 class="text-normal lg:text-lg">
                                    <NuxtLink to="/industries/e-commerce" class="hover:text-primary-500">
                                        E-Commerce
                                    </NuxtLink>
                                </h3>
                            </li>
                            <li class="mb-4">
                                <h3 class="text-normal lg:text-lg">
                                    <NuxtLink to="/industries/finance" class="hover:text-primary-500">
                                        Finance
                                    </NuxtLink>
                                </h3>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <h2 class="text-xl lg:text-2xl font-bold mb-4">
                            {{ parentPage.title }}
                        </h2>
                        <ul v-if="parentPage.sub_pages.length > 0" class="ml-4">
                            <li v-for="subPage in parentPage.sub_pages" :key="subPage.id" class="mb-4">
                                <h3 class="text-normal lg:text-lg mb-4">
                                    <NuxtLink :to="`/pages/${parentPage.slug}/${subPage.slug}`" class="hover:text-primary-500">
                                        {{ subPage.title }}
                                    </NuxtLink>
                                </h3>
                                <ul v-if="subPage.child_pages.length > 0" class="ml-4">
                                    <li v-for="childPage in subPage.child_pages" :key="childPage.id" class="mb-4">
                                        <h3 class="text-normal lg:text-lg">
                                            <NuxtLink :to="`/pages/${parentPage.slug}/${subPage.slug}/${childPage.slug}`" class="hover:text-primary-500">
                                                {{ childPage.title }}
                                            </NuxtLink>
                                        </h3>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h2 class="text-xl lg:text-2xl font-bold mb-4">
                        <NuxtLink to="/resources" class="hover:text-primary-500">
                            Resources
                        </NuxtLink>
                    </h2>
                    <ul class="ml-4">
                        <li v-for="item in resources.articles">
                            <h3 class="text-normal lg:text-lg mb-4">
                                <NuxtLink :to="`/resources/${item.slug}`" class="hover:text-primary-500">
                                    {{ item.title }}
                                </NuxtLink>
                            </h3>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="text-xl lg:text-2xl font-bold mb-4">
                        <NuxtLink to="/careers" class="hover:text-primary-500">
                            Careers
                        </NuxtLink>
                    </h2>
                </li>
                <li>
                    <h2 class="text-xl lg:text-2xl font-bold mb-4">
                        <NuxtLink to="/calculator" class="hover:text-primary-500">
                            Calculator
                        </NuxtLink>
                    </h2>
                </li>
                <li>
                    <h2 class="text-xl lg:text-2xl font-bold mb-4">
                        <NuxtLink to="/contact-us" class="hover:text-primary-500">
                            Contact Us
                        </NuxtLink>
                    </h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const { get } = useApi();
const { data: parent_pages } = await get('/parent-pages');
const { data: resources} = await get('/articles');

</script>
