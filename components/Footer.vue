<template>
    <footer class="bg-primary-900">
        <div class="px-4 lg:px-10 xl:px-20 pb-7 pt-16 lg:py-16 flex lg:flex-row flex-col lg:justify-between">
            <div class="lg:max-w-[373px]">
                <div class="py-3 mb-2">
                    <!-- Convert home link to nuxt-link -->
                    <nuxt-link to="/">
                        <nuxt-img class="w-[250px] lg:w-[260px]" :src="config.public.storage + footer.content.section1_logo"
                            alt="footer-logo" loading="lazy" decoding="async" format="webp" quality="80"/>
                    </nuxt-link>
                </div>
                <p class="text-white leading-5 mb-8">{{ footer?.content.section1_address }}</p>
                <div class="flex items-center space-x-6 mb-12 lg:mb-0">
                    <nuxt-img v-for="accreditation in footer?.content.section1_accreditation" class="h-[40px] xl:h-[50px] w-fit"
                        :src="config.public.storage + accreditation.logo" alt="icon" loading="lazy" decoding="async" format="webp" quality="80"/>
                </div>
            </div>
            <div class="max-w-[780px] w-full grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10 xl:gap-16 text-white text-sm">
                <div class="space-y-3">
                    <p class="font-bold text-base">Solutions</p>
                    <!-- Convert solution links to nuxt-link -->
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/solutions/contact-center">Contact Center</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/solutions/managed-services">Managed Services</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/solutions/staff-leasing">Staff Leasing</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/solutions/workforce-management">Workforce Management</nuxt-link></div>
                </div>
                <div class="space-y-3">
                    <p class="font-bold text-base">Specializations</p>
                    <!-- Convert specialization links to nuxt-link -->
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/specialization/creative-services">Creative Services</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/specialization/sales-and-customer-support/sales-development-services">Sales Development Services</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/specialization/sales-and-customer-support/customer-success-services">Customer Success Services</nuxt-link></div>
                </div>
                <div class="space-y-3">
                    <p class="font-bold text-base">Industries</p>
                    <!-- Convert industry links to nuxt-link -->
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/industries/gaming">Entertainment & Gaming</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/industries/saas">Product & SaaS</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/industries/e-commerce">E-Commerce</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/industries/finance">Finance</nuxt-link></div>
                </div>
                <div class="space-y-3">
                    <p class="font-bold text-base">Others</p>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/resources">Resources</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/pages/about-us/our-advantages">About Us</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/careers">Careers</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/contact-us">Contact Us</nuxt-link></div>
                    <div><nuxt-link class="hover:text-primary-600 transition" to="/sitemap">Sitemap</nuxt-link></div>
                </div>
            </div>
        </div>
        <div class="px-4 pt-4 pb-12 lg:px-20 lg:py-12 flex lg:flex-row flex-col lg:items-center justify-between text-white text-sm lg:text-base lg:space-y-0 space-y-6">
            <div class="flex lg:items-center lg:space-x-16 lg:flex-row flex-col lg:space-y-0 space-y-6">
                <p>{{ footer?.content.section1_copyright }}</p>
                <div class="flex items-start lg:items-center space-x-4 lg:w-auto w-fit">
                    <!-- Convert policy links to nuxt-link -->
                    <nuxt-link class="hover:text-primary-600 transition" to="/privacy-policy">Privacy Policy</nuxt-link>
                    <nuxt-link class="hover:text-primary-600 transition" to="/terms-and-conditions">Terms</nuxt-link>
                </div>
            </div>
            <div class="flex items-center space-x-3.5">
                <!-- Retain <a> tags with target="_blank" for external links -->
                <a v-for="social in footer?.content.section2_social_accounts" :href="social.link" target="_blank" rel="noreferrer">
                    <nuxt-img class="w-5" :src="config.public.storage + social.icon" alt="icon" loading="lazy" decoding="async" format="webp" quality="80"/>
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { get } = useApi();
const config = useRuntimeConfig();
const { data: footer } = await get('/cms-footer');
</script>
