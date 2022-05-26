<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            SEO Optimization
                        </span>
                    </h2>
                    <p class="body-copy">
                        Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.
                        SEO targets unpaid traffic (known as "natural" or "organic" results) rather than direct traffic or paid traffic.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/seo.png" alt="SEO Optimization" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        SEO Optimization that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        Each business that owns a website should work on its SEO and not everyone understands its importance - InYourShoes does. 
                        By combining analytics, trending and technical configuration we improve the relevance of your platform in search engines results, allowing a better audience reach.
                    </p>
                    <UiButton
                        placeholder="Let's talk"
                        type="router-link"
                        link="/contact"
                    />
                </div>
                <div class="service-about__dots">
                    <img src="@/assets/images/home-about-dots.svg" alt="Digital Marketing" class="u-image-contain">
                </div>
            </div>
        </section>
        <section class="service-result section-m-top container">
            <h2 class="heading-2">
                The numbers don’t lie
            </h2>
            <div class="service-result__numbers">
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        73%
                    </div>
                    <h4 class="heading-4">
                        Boost in search results
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        21%
                    </div>
                    <h4 class="heading-4">
                        Increased revenue
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/feelit.png" alt="Feel IT Service" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Feel IT is a local company that provides IT services. Before our collaboration they had stunning reviews and feedback from their customers, but they were having difficulties in reaching new potential clients. This because their website, even if it was easy to use and well structured, was not appearing in suggested search results. 
                    <br>
                    <br>
                    InYourShoes promptly noticed this issue and through SEO, mixing the use of relevant keywords in titles, meta descriptions, headlines (H1) and schema markup to specify the page's content meaning, boosted their display in search results by 73%, also increasing revenue by 21%. What are you waiting? Join us for even better results!
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'seo'
}
</script>